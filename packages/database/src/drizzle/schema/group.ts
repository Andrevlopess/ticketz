import { relations } from "drizzle-orm";
import { integer, pgTable, primaryKey, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "../columns.helpers";
import { Ticket } from "./ticket";
import { User } from "./user";
import { Organization } from "./organization";

export const Group = pgTable("group", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar().unique().notNull(),

  description: varchar(),

  organizationId: integer()
    .notNull()
    .references(() => Organization.id),

  ...timestamps,
});

export const GroupRelations = relations(Group, ({ many, one }) => ({
  users: many(UsersOnGroup),
  tickets: many(Ticket),
  organization: one(Organization, {
    fields: [Group.organizationId],
    references: [Organization.id],
  }),
}));

export const UsersOnGroup = pgTable(
  "usersOnGroup",
  {
    userId: integer()
      .notNull()
      .references(() => User.id),
    groupId: integer()
      .notNull()
      .references(() => Group.id),

    ...timestamps,
  },
  (t) => [primaryKey({ columns: [t.userId, t.groupId] })]
);

export const UsersOnGroupRelations = relations(UsersOnGroup, ({ one }) => ({
  user: one(User, { fields: [UsersOnGroup.userId], references: [User.id] }),
  group: one(Group, { fields: [UsersOnGroup.groupId], references: [Group.id] }),
}));

export type GroupSelect = typeof Group.$inferSelect;
export type GroupInsert = typeof Group.$inferInsert;
