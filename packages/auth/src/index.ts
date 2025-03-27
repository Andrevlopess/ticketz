import {
  AbilityBuilder,
  CreateAbility,
  createMongoAbility,
  MongoAbility,
} from "@casl/ability";
import z from "zod";
import { User } from "./models/user";
import { permissions } from "./permissions";
import { groupSubject } from "./subjects/group";
import { userSubject } from "./subjects/user";

export * from "./models/user";
export * from "./models/group";

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
