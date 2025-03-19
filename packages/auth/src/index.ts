import {
  AbilityBuilder,
  CreateAbility,
  createMongoAbility,
  InferSubjects,
  MongoAbility,
} from "@casl/ability";
import { permissions } from "./permissions";
import { User } from "./models/user";
import { z } from "zod";
import { organizationSubject } from "./subjects/organization";
import { Organization } from "@ticketz/database";
import { createSelectSchema } from "drizzle-zod";

export * from "./roles";
export * from "./permissions";
export * from "./models/user";

type CRUD = "read" | "create" | "update" | "delete";

// const appAbilitiesSchema = z.union([
//     // z.tuple([z.literal("read"), z.literal("Organization")]),
//     z.tuple([z.literal("manage"), z.literal("all")]),
//   ]);

export const AppAbilitiesSchema = z.tuple([
  z.literal("manage"),
  z.literal("all"),
]);

export type AppAbilities = z.infer<typeof AppAbilitiesSchema>;

export enum Actions {
  Manage = "manage",
  Read = "read",
  Create = "create",
  Update = "update",
  Delete = "delete",
}

// const organizationSchema = createSelectSchema(Organization).extend({
//     __typename: z.literal("Organization").default("Organization"),
// })

export const organizationSchema = z.object({
  __typename: z.literal("Organization").default("Organization"),
  id: z.string(),
  ownerId: z.string(),
});
export type Organization = z.infer<typeof organizationSchema>;

type Subjects = InferSubjects<Organization>;

export type AppAbility = MongoAbility<[Actions, Subjects]>;
// export type AppAbility = MongoAbility<['read', 'Organization'] | ['manage', 'all']>;

export function defineAbilityFor(user: User) {
  const builder = new AbilityBuilder<AppAbility>(createMongoAbility);

  if (typeof permissions[user.role] !== "function") {
    throw new Error(`Permissions for role ${user.role} not found.`);
  }

  permissions[user.role](user, builder);

  //   const ability = builder.build({
  //     detectSubjectType: (object) => object.__typename
  //   });

  //   ability.can = ability.can.bind(ability);
  //   ability.cannot = ability.cannot.bind(ability);

  return builder.build({
    detectSubjectType: (object) => object.__typename as Subjects,
  });
  //   return ability;
}
