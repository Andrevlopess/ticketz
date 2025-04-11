import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from 'src/decorators/public.decorator';
import { UsersService } from '../../schemas/users/users.service';

@Injectable()
export class OrganizationGuard implements CanActivate {
  constructor(
    private userService: UsersService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('......EXECUTED ORGANIZATION GUARD......');

    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) return true;

    const request = context.switchToHttp().getRequest() as Request;

    // ========== STORE USER ON REQUEST =========
    if (!request.params.slug) {
      throw new BadRequestException('Organization slug not provided!');
    }

    const member = await this.userService.getMembership(
      request.accessToken.sub,
      request.params.slug,
    );

    if (!member) {
      throw new UnauthorizedException(
        `You're not a member of this organization.`,
      );
    }

    const { organization, membership } = member;

    request.organization = organization;
    request.user = {
      ...request.accessToken,
      role: membership.role,
    };

    return true;
  }
}