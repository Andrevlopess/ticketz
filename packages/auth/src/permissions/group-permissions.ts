import { AbilityBuilder } from "@casl/ability";
import { GroupRole } from "@ticketz/database";
import { AppAbility, GroupAbility, GroupMember } from "..";
import { User } from "../models/user";


type GroupRoles = GroupMember["role"]

type PermissionsByRole = (
  member: GroupMember,
  builder: AbilityBuilder<GroupAbility>
) => void;

export const groupPermissions: Record<GroupRoles, PermissionsByRole> = {
  GROUP_MANAGER(user, { can, cannot }) {
    can("manage", "Group");
    can("manage", "GroupMembers");
    can("create", "Group");
    cannot("delete", "Group");
  },
  MEMBER(user, { can, cannot }) {
    can("read", "Group");
  },
  ANONYMOUS(user, { can, cannot }) {
    can("read", "GroupMembers");
  },
};
