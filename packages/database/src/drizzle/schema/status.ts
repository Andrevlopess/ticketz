import { relations } from "drizzle-orm";
import { integer, pgTable, primaryKey, timestamp, varchar } from "drizzle-orm/pg-core";
import { Organization } from "./organization";
import { Ticket } from "./ticket";

export const Status = pgTable("status", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar().notNull(),

  organizationId: integer()
    .notNull()
    .references(() => Organization.id),

  createdAt: timestamp().defaultNow().notNull(),
}
);

export const StatusRelations = relations(Status, ({ many, one }) => ({
  tickets: many(Ticket),
  organization: one(Organization, {
    fields: [Status.organizationId],
    references: [Organization.id],
  }),
}));

export type StatusSelect = typeof Status.$inferSelect;
export type StatusInsert = typeof Status.$inferInsert;
