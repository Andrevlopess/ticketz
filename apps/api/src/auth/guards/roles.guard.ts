import { UsersService } from './../../schemas/users/users.service';

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@ticketz/database';
import { ROLES_KEY } from 'src/decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    const membership = await this.usersService.getMembership(
      user.sub,
      user.orgId,
    );

    if (!membership || membership.role !== user.role) {
      return false;
    }

    return requiredRoles.some((role) => user.role?.includes(role));
  }
}
// TODO: how to update the jwt on the client if a user changes their role?
