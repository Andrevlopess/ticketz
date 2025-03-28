import { AbilityBuilder } from "@casl/ability";
import { GroupRole, Role } from "@ticketz/database";
import { AppAbility } from "..";
import { User } from "../models/user";

type PermissionsByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>
) => void;

export const permissions: Record<Role, PermissionsByRole> = {
  ADMIN(user, { can, cannot }) {
    can("manage", "all");
    // can('read', 'Group');
  },
  USER(user, { can, cannot }) {
    can("read", "Group");
  },
};
