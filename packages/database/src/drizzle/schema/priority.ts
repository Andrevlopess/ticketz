import { relations } from "drizzle-orm";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "../columns.helpers";
import { Ticket } from "./ticket";
import { Organization } from "./organization";

export const Priority = pgTable("priority", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar().unique().notNull(),

  organizationId: integer()
    .notNull()
    .references(() => Organization.id),

  ...timestamps,
});

export const PriorityRelations = relations(Priority, ({ many, one }) => ({
  tickets: many(Ticket),
  organization: one(Organization, {
    fields: [Priority.organizationId],
    references: [Organization.id],
  }),
}));

export type PrioritySelect = typeof Priority.$inferSelect;
export type PriorityInsert = typeof Priority.$inferInsert;
