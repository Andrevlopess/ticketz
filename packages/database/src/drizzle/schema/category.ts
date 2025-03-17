import { relations } from "drizzle-orm";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "../columns.helpers";
import { Ticket } from "./ticket";
import { Organization } from "./organization";

export const Category = pgTable("category", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar().unique().notNull(),
  description: varchar(),

  organizationId: integer()
    .notNull()
    .references(() => Organization.id),

  ...timestamps,
});

export const CategoryRelations = relations(Category, ({ many, one }) => ({
  tickets: many(Ticket),
  organization: one(Organization, {
    fields: [Category.organizationId],
    references: [Organization.id],
  }),
}));

export type CategorySelect = typeof Category.$inferSelect;
export type CategoryInsert = typeof Category.$inferInsert;
