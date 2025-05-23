import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GroupAbility } from '@ticketz/auth';
import { Request } from 'express';
import { CHECK_POLICIES_KEY } from 'src/decorators/policies.decorator';
import { UsersService } from 'src/schemas/users/users.service';
import { getMemberPermissions } from 'src/utils/get-member-permissions';
import { getUserPermissions } from 'src/utils/get-user-permissions';

export type Abilities = GroupAbility;

interface IPolicyHandler {
  handle(ability: Abilities): boolean;
}

type PolicyHandlerCallback = (ability: Abilities) => boolean;

export type PolicyHandler = IPolicyHandler | PolicyHandlerCallback;

@Injectable()
export class GroupPoliciesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private userService: UsersService,
    // private caslAbilityFactory: CaslAbilityFactory,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('......EXECUTED GROUP POLICIES GUARD......');

    const policyHandlers =
      this.reflector.get<PolicyHandler[]>(
        CHECK_POLICIES_KEY,
        context.getHandler(),
      ) || [];

    const request = context.switchToHttp().getRequest() as Request;

    if (!request.params.slug) return false;

    const appAbility = getUserPermissions(request.user.sub, request.user.role);

    // // first try to check if the user has the permission in the app role (ADMIN | USER)
    // // if not, check if the user has the permission in the group role (GROUP_MANAGER | MEMBER)
    const hasAppRolePermission = policyHandlers.every((handler) =>
      this.execPolicyHandler(handler, appAbility),
    );

    // if (!hasAppRolePermission) {
    if (!request.params.groupId) {
      throw new BadRequestException('Slug not provided!');
    }

    if (hasAppRolePermission) return true;

    // return hasAppRolePermission;

    const member = await this.userService.getGroupMembership(
      request.user.sub,
      +request.params.groupId,
    );

    if (!member) {
      throw new ForbiddenException(`You're not a allowed to perform this action on this group!.`);
    }

    const ability = getMemberPermissions({
      id: request.user.sub,
      role: member?.role, // ?? 'ANONYMOUS',
    });

    console.log({
      id: request.user.sub,
      role: member?.role, // ?? 'ANONYMOUS',
    });

    const hasGroupRolePermission = policyHandlers.every((handler) =>
      this.execPolicyHandler(handler, ability),
    );

    if (!hasGroupRolePermission) {
      console.log(
        `${member?.role ?? 'ANONYMOUS'}'s group members are not allowed to ${policyHandlers.map((handler) => handler).join(', ')} `,
      );
    }

    return hasGroupRolePermission;
  }

  //   return hasAppRolePermission;
  // }

  private execPolicyHandler(handler: PolicyHandler, ability: Abilities) {
    if (typeof handler === 'function') {
      return handler(ability);
    }
    return handler.handle(ability);
  }
}
