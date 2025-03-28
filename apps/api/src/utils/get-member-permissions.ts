import {
  defineGroupAbilityFor,
  memberSchema
} from '@ticketz/auth';
import { GroupRole } from '@ticketz/database';

export function getMemberPermissions(member: { id: number; role: GroupRole }) {

  const authMember = memberSchema.parse({
    id: member.id,
    role: member.role,
  });

  
  const ability = defineGroupAbilityFor(authMember);

  return ability;
}
