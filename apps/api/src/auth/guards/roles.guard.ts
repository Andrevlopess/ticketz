import { UsersService } from './../../schemas/users/users.service';

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@ticketz/database';
import { Request } from 'express';
import { ROLES_KEY } from 'src/decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('......EXECUTED ROLES GUARD......');

    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const request = context
      .switchToHttp()
      .getRequest() as Request;


    // if(!request.params.slug) return false

    // const { membership } = await request.getUserMembership(request.params.slug);

    return requiredRoles.some((role) => request.user.role?.includes(role));
  }
}

// TODO: how to update the jwt on the client if a user changes their role?
