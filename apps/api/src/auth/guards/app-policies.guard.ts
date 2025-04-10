import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AppAbility } from '@ticketz/auth';
import { Request } from 'express';
import { CHECK_POLICIES_KEY } from 'src/decorators/policies.decorator';
import { UsersService } from 'src/schemas/users/users.service';
import { getUserPermissions } from 'src/utils/get-user-permissions';

export type Abilities = AppAbility;

interface IPolicyHandler {
  handle(ability: Abilities): boolean;
}

type PolicyHandlerCallback = (ability: Abilities) => boolean;

export type PolicyHandler = IPolicyHandler | PolicyHandlerCallback;

@Injectable()
export class AppPoliciesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private userService: UsersService,
    // private caslAbilityFactory: CaslAbilityFactory,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('......EXECUTED APP POLICIES GUARD......');

    const policyHandlers =
      this.reflector.get<PolicyHandler[]>(
        CHECK_POLICIES_KEY,
        context.getHandler(),
      ) || [];

    const request = context.switchToHttp().getRequest() as Request;

    if (!request.params.slug) return false;

    const appAbility = getUserPermissions(request.user.sub, request.user.role);

    const hasAppRolePermission = policyHandlers.every((handler) =>
      this.execPolicyHandler(handler, appAbility),
    );

    if (!request.params.groupId) {
      throw new BadRequestException('Slug not provided!');
    }

    return hasAppRolePermission;
  }

  private execPolicyHandler(handler: PolicyHandler, ability: Abilities) {
    if (typeof handler === 'function') {
      return handler(ability);
    }
    return handler.handle(ability);
  }
}
