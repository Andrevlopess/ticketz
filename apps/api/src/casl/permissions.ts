// import { AbilityBuilder } from '@casl/ability';
// import { Role } from '@ticketz/database';
// import { AppAbility } from './casl-ability.factory';
// import { User } from './models/user';

// type PermissionsByRole = (
//   user: User,
//   builder: AbilityBuilder<AppAbility>,
// ) => void;

// export const permissions: Record<Role, PermissionsByRole> = {
//   ADMIN(user, { can }) {
//     can(Action.Manage, 'all');
//   },
//   USER(user, { can }) {
//     // can('read', 'all');
//     can(['invite', 'delete'], 'Group', { ownerId: { $eq: user.id } });
//   },
// };
