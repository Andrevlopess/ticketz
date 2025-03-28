import { AbilityBuilder } from "@casl/ability";
import { GroupRole } from "@ticketz/database";
import { AppAbility, GroupMember } from "..";
import { User } from "../models/user";

type PermissionsByRole = (
  member: GroupMember,
  builder: AbilityBuilder<AppAbility>
) => void;

export const groupPermissions: Record<GroupRole, PermissionsByRole> = {
  GROUP_MANAGER(user, { can, cannot }) {
    can("manage", "Group");
    cannot("delete", "Group");
  },
  MEMBER(user, { can, cannot }) {
    can("read", "Group");
  },
};
