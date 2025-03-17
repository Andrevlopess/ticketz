import { relations } from "drizzle-orm";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "../columns.helpers";
import { Ticket } from "./ticket";
import { Organization } from "./organization";

export const Status = pgTable("status", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar().unique().notNull(),

  organizationId: integer()
    .notNull()
    .references(() => Organization.id),

  ...timestamps,
});

export const StatusRelations = relations(Status, ({ many, one }) => ({
  tickets: many(Ticket),
  organization: one(Organization, {
    fields: [Status.organizationId],
    references: [Organization.id],
  }),
}));

export type StatusSelect = typeof Status.$inferSelect;
export type StatusInsert = typeof Status.$inferInsert;
