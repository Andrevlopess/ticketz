import { AbilityBuilder } from '@casl/ability';
import { Role } from '@ticketz/database';
import { User } from './models/user';
import { AppAbility } from '.';

type PermissionsByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>,
) => void;

export const permissions: Record<Role, PermissionsByRole> = {
  ADMIN(user, { can }) {
    can('manage', 'all');
  },
  USER(user, { can }) {
    // can('read', 'all');
    can(['invite', 'delete'], 'Group', { ownerId: { $eq: user.id } });
  },
};
