import { relations } from "drizzle-orm";
import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { GroupMembership } from "./group-membership";
import { Organization } from "./organization";
import { Ticket } from "./ticket";
import { unique } from "drizzle-orm/pg-core";

export const Group = pgTable(
  "group",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar().notNull(),
    slug: varchar().notNull(),

    description: varchar(),

    organizationId: integer()
      .notNull()
      .references(() => Organization.id),

    createdAt: timestamp().defaultNow().notNull(),
  },
  (t) => [unique().on(t.slug, t.organizationId)]
);

export const GroupRelations = relations(Group, ({ many, one }) => ({
  users: many(GroupMembership),
  tickets: many(Ticket),
  organization: one(Organization, {
    fields: [Group.organizationId],
    references: [Organization.id],
  }),
}));

export type GroupSelect = typeof Group.$inferSelect;
export type GroupInsert = typeof Group.$inferInsert;
