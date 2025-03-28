import { AbilityBuilder } from '@casl/ability';
import { Role } from '@ticketz/database';
import { User } from './models/user';
import { AppAbility } from '.';

type PermissionsByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>,
) => void;

export const permissions: Record<Role, PermissionsByRole> = {
  ADMIN(user, { can , cannot}) {
    can('manage', 'all');
    // can('read', 'Group');

  },
  USER(user, { can, cannot }) {
    // can('read', 'all');
    can('read', 'Group');
    // cannot(['', 'update'], 'Group');
  },
};
