import { log } from 'console';
import { UsersService } from './../../schemas/users/users.service';
import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from 'src/decorators/public.decorator';
import { AccessTokenPayload } from '../auth.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('......EXECUTED JWT-AUTH GUARD......');

    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) return true;

    const request = context.switchToHttp().getRequest() as Request;

    // ========== STORE USER ON REQUEST =========
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException('Token not provided!');
    }

    let payload: AccessTokenPayload;
    
    try {
      payload = this.jwtService.verify<AccessTokenPayload>(token);
    } catch (e) {

      throw new UnauthorizedException('Invalid token provided!');
    }

    if (!request.params.slug) {
      throw new BadRequestException('Slug not provided!');
    }

    const member = await this.userService.getMembership(
      payload.sub,
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
      ...payload,
      role: membership.role,
    };

    // ========== STORE ORGANIZATION ON REQUEST =========

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
// import { log } from 'console';
// import { UsersService } from './../../schemas/users/users.service';
// import {
//   CanActivate,
//   ExecutionContext,
//   Injectable,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { JwtService } from '@nestjs/jwt';
// import { Request } from 'express';
// import { IS_PUBLIC_KEY } from 'src/decorators/public.decorator';
// import { AccessTokenPayload } from '../auth.service';

// @Injectable()
// export class JwtAuthGuard implements CanActivate {
//   constructor(
//     private jwtService: JwtService,
//     private reflector: Reflector,
//   ) {}

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     console.log('......EXECUTED JWT-AUTH GUARD......');

//     const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
//       context.getHandler(),
//       context.getClass(),
//     ]);

//     if (isPublic) return true;

//     const request = context.switchToHttp().getRequest() as Request;

//     const user = await request.getCurrentUser();
//     if (!user) return false;

//     request.user = user;

//     if (!request.params.slug) return false;
//     const { organization } = await request.getUserMembership(
//       request.params.slug,
//     );
//     if (!organization) return false;

//     request.organization = organization;

//     return true;
//   }

//   // private extractTokenFromHeader(request: Request): string | undefined {
//   //   const [type, token] = request.headers.authorization?.split(' ') ?? [];
//   //   return type === 'Bearer' ? token : undefined;
//   // }
// }
