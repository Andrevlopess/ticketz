// import {
//   BadRequestException,
//   CanActivate,
//   ExecutionContext,
//   ForbiddenException,
//   Injectable,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { AppAbility } from '@ticketz/auth';
// import { Request } from 'express';
// import { CHECK_POLICIES_KEY } from 'src/decorators/policies.decorator';
// import { UsersService } from 'src/schemas/users/users.service';
// import { getMemberPermissions } from 'src/utils/get-member-permissions';
// import { getUserPermissions } from 'src/utils/get-user-permissions';

// interface IPolicyHandler {
//   handle(ability: AppAbility): boolean;
// }

// type PolicyHandlerCallback = (ability: AppAbility) => boolean;

// export type PolicyHandler = IPolicyHandler | PolicyHandlerCallback;

// @Injectable()
// export class PoliciesGuard implements CanActivate {
//   constructor(
//     private reflector: Reflector,
//     private userService: UsersService,
//     // private caslAbilityFactory: CaslAbilityFactory,
//   ) {}

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     console.log('......EXECUTED POLICIES GUARD......');

//     const policyHandlers =
//       this.reflector.get<PolicyHandler[]>(
//         CHECK_POLICIES_KEY,
//         context.getHandler(),
//       ) || [];

//     const request = context.switchToHttp().getRequest() as Request;

//     if (!request.params.slug) return false;

    
//     const ability = getUserPermissions(request.user.sub, request.user.role);

//     // first try to check if the user has the permission in the app role (ADMIN | USER)
//     // if not, check if the user has the permission in the group role (GROUP_MANAGER | MEMBER)
//     const hasAppRolePermission = policyHandlers.every((handler) =>
//       this.execPolicyHandler(handler, ability),
//     );

//     if (!hasAppRolePermission) {
//       if (!request.params.groupId) {
//         throw new BadRequestException('Slug not provided!');
//       }

//       // const member = null
//       const member = await this.userService.getGroupMembership(
//         request.user.sub,
//         +request.params.groupId,
//       );

//       // if (!member) {
//       //   throw new ForbiddenException(
//       //     `You're not a member of this group.`,
//       //   );
//       // }

//       const ability = getMemberPermissions({
//         id: request.user.sub,
//         role: member?.role ?? 'ANONYMOUS',
//       });

//       const hasGroupRolePermission = policyHandlers.every((handler) =>
//         this.execPolicyHandler(handler, ability),
//       );

//       return hasGroupRolePermission;
//     }

//     return hasAppRolePermission;
//   }

//   private execPolicyHandler(handler: PolicyHandler, ability: AppAbility) {
//     if (typeof handler === 'function') {
//       return handler(ability);
//     }
//     return handler.handle(ability);
//   }
// }
