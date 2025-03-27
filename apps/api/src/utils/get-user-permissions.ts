import { defineAbilityFor, User } from '@ticketz/auth';

export function getUserPermissions(authUser: User) {
  const ability = defineAbilityFor(authUser);

  return ability;
}
