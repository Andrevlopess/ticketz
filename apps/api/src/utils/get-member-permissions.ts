import {
  defineGroupAbilityFor,
  GroupMember,
  groupMemberSchema,
} from '@ticketz/auth';

export function getMemberPermissions(member: { id: number; role: GroupMember['role'] }) {

  const authMember = groupMemberSchema.parse({
    id: member.id,
    role: member.role,
  });
  
  
  const ability = defineGroupAbilityFor(authMember);

  return ability;
}
