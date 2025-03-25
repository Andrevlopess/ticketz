import { relations } from "drizzle-orm";
import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { Organization } from "./organization";
import { Ticket } from "./ticket";
import { primaryKey } from "drizzle-orm/pg-core";

export const Priority = pgTable(
  "priority",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar().notNull(),

    organizationId: integer()
      .notNull()
      .references(() => Organization.id),

    createdAt: timestamp().defaultNow().notNull(),
  }
);

export const PriorityRelations = relations(Priority, ({ many, one }) => ({
  tickets: many(Ticket),
  organization: one(Organization, {
    fields: [Priority.organizationId],
    references: [Organization.id],
  }),
}));

export type PrioritySelect = typeof Priority.$inferSelect;
export type PriorityInsert = typeof Priority.$inferInsert;
