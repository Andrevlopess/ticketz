import { defineAbilityFor, userSchema } from '@ticketz/auth';
import { Role } from '@ticketz/database';

export function getUserPermissions(userId: number, role: Role) {
  //   const authUser = userSchema.parse({
  //     id: userId,
  //     role,
  //   });

  const authUser = { id: userId, role };
  const ability = defineAbilityFor(authUser);

  return ability;
}
