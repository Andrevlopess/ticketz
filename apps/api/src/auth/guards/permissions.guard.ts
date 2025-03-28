// import { UsersService } from './../../schemas/users/users.service';

// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { GroupRole } from '@ticketz/database';
// import { table } from 'console';
// import type { Request } from 'express';
// import { PERMISSIONS_KEY } from 'src/decorators/permissions.decorator';

// export enum Action {
//   Manage = 'manage',
//   Create = 'create',
//   Read = 'read',
//   Update = 'update',
//   Delete = 'delete',
// }

// const permissions: Record<GroupRole, { action: Action; subject: any }[]> = {
//   MEMBER: [
//     {
//       action: Action.Read,
//       subject: 'group_members',
//     },
//   ],
//   GROUP_MANAGER: [
//     {
//       action: Action.Manage,
//       subject: 'all',
//     },
//   ],
// };

// @Injectable()
// export class PermissionGuard implements CanActivate {
//   constructor(private reflector: Reflector) {}

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const requiredRoles = this.reflector.getAllAndOverride<string[]>(
//       PERMISSIONS_KEY,
//       [context.getHandler(), context.getClass()],
//     );

//     if (!requiredRoles) {
//       return true;
//     }

//     const { user, params } = context.switchToHttp().getRequest() as Request;

//     // console.log(user.grps, requiredRoles);
//     console.table(user.grps);
//     console.table(requiredRoles);

//     if (!params.groupId) return false;

//     const currentGroup = user.grps?.find(
//       (group) => group.id === +params.groupId!,
//     );

//     table(currentGroup);

//     return requiredRoles.some((role) =>
//       permissions[currentGroup?.role].includes(role),
//     );
//   }
// }

// // TODO: how to update the jwt on the client if a user changes their role?
