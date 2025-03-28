import {
  AbilityBuilder,
  CreateAbility,
  createMongoAbility,
  MongoAbility,
} from "@casl/ability";
import z from "zod";
import { User } from "./models/user";
import { permissions } from "./permissions/app-permissions";
import { groupSubject } from "./subjects/group";
import { userSubject } from "./subjects/user";
import { GroupMember } from "./models/group-member";
import { groupPermissions } from "./permissions/group-permissions";

export * from "./models/group";
export * from "./models/user";
export * from "./models/group-member";

const appAbilitiesSchema = z.union([
  userSubject,
  groupSubject,
  z.tuple([z.literal("manage"), z.literal("all")]),
]);

type AppAbilities = z.infer<typeof appAbilitiesSchema>;
export type AppAbility = MongoAbility<AppAbilities>;

export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>;

export function defineAbilityFor(user: User) {
  const builder = new AbilityBuilder(createAppAbility);

  permissions[user.role](user, builder);

  const ability = builder.build({
    detectSubjectType(subject: any) {
      return subject.__typename;
    },
  });

  ability.can = ability.can.bind(ability);
  ability.cannot = ability.cannot.bind(ability);

  return ability;
}
// ================ GROUP ABILITIES ================  //

const groupAbilitiesSchema = z.union([
  userSubject,
  groupSubject,
  z.tuple([z.literal("manage"), z.literal("all")]),
]);

type GroupAbilities = z.infer<typeof groupAbilitiesSchema>;
export type GroupAbility = MongoAbility<GroupAbilities>;

export const createGroupAbility = createMongoAbility as CreateAbility<GroupAbility>;

export function defineGroupAbilityFor(member: GroupMember) {
  const builder = new AbilityBuilder(createGroupAbility);

  groupPermissions[member.role](member, builder);

  const ability = builder.build({
    detectSubjectType(subject: any) {
      return subject.__typename;
    },
  });

  ability.can = ability.can.bind(ability);
  ability.cannot = ability.cannot.bind(ability);

  return ability;
}
