import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AppAbility, defineAbilityFor } from '@ticketz/auth';
import { GroupRole } from '@ticketz/database';
import { Request } from 'express';
import { CHECK_POLICIES_KEY } from 'src/decorators/policies.decorator';
import { getMemberPermissions } from 'src/utils/get-member-permissions';
import { getUserPermissions } from 'src/utils/get-user-permissions';

interface IPolicyHandler {
  handle(ability: AppAbility): boolean;
}

type PolicyHandlerCallback = (ability: AppAbility) => boolean;

export type PolicyHandler = IPolicyHandler | PolicyHandlerCallback;

@Injectable()
export class PoliciesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    // private caslAbilityFactory: CaslAbilityFactory,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('......EXECUTED POLICIES GUARD......');

    const policyHandlers =
      this.reflector.get<PolicyHandler[]>(
        CHECK_POLICIES_KEY,
        context.getHandler(),
      ) || [];

    const request = context.switchToHttp().getRequest() as Request;

    if (!request.params.slug) return false;

    const user = await request.getCurrentUser();
    const { membership } = await request.getUserMembership(request.params.slug);

    const ability = getUserPermissions(user.sub, membership.role);

    // first try to check if the user has the permission in the app role (ADMIN | USER)
    // if not, check if the user has the permission in the group role (GROUP_MANAGER | MEMBER)
    const hasAppRolePermission = policyHandlers.every((handler) =>
      this.execPolicyHandler(handler, ability),
    );

    if (!hasAppRolePermission) {
      // const role = this.extractGroupRoleFromRequest(request);

      // if (!role) return false;

      // const ability = getMemberPermissions({
      //   id: request.user.sub,
      //   role: role,
      // });

      const hasGroupRolePermission = policyHandlers.every((handler) =>
        this.execPolicyHandler(handler, ability),
      );

      return hasGroupRolePermission;
    }

    return hasAppRolePermission;
  }

  // private extractGroupRoleFromRequest(request: Request): GroupRole | null {
  //   if (!request.user?.grps || !request.params?.groupId) return null;

  //   const groupId = +request.params.groupId;
  //   return request.user.grps.find((group) => group.id === groupId)?.role;
  // }

  private execPolicyHandler(handler: PolicyHandler, ability: AppAbility) {
    if (typeof handler === 'function') {
      return handler(ability);
    }
    return handler.handle(ability);
  }
}
