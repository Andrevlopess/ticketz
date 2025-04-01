import { defineAbilityFor, User, userSchema } from '@ticketz/auth';
import { Role } from '@ticketz/database';
import { AccessTokenPayload } from 'src/auth/auth.service';

export function getUserPermissions(userId: number, role: Role) {
  const user = userSchema.parse({
    id: userId,
    role,
  });

  const ability = defineAbilityFor(user);

  return ability;
}
