import { defineAbilityFor, User, userSchema } from '@ticketz/auth';
import { AccessTokenPayload } from 'src/auth/auth.service';

export function getUserPermissions(authUser: AccessTokenPayload) {
  const user = userSchema.parse({
    id: authUser.sub,
    role: authUser.org.role,
  });

  const ability = defineAbilityFor(user);

  return ability;
}
