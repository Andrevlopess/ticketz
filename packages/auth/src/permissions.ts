import { AbilityBuilder } from "@casl/ability";
import { Role } from "@ticketz/database";
import { Actions, AppAbility } from ".";
import { User } from "./models/user";

type PermissionsByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>
) => void;

export const permissions: Record<Role, PermissionsByRole> = {
  ADMIN(user, { can, cannot }) {
    can(Actions.Create, 'all')

    // cannot(['transfer_ownership', 'update'], 'Organization')
  },
  USER(user, { can }) {
    can(Actions.Delete, "all");
  },
  MASTER(_, { can }) {},
};
