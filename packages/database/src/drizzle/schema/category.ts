import { relations } from "drizzle-orm";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "../columns.helpers";
import { Ticket } from "./ticket";

export const Category = pgTable("category", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar().unique().notNull(),
  description: varchar(),

  ...timestamps,
});


export const CategoryRelations = relations(Category, ({many}) => ({
    tickets: many(Ticket)
}))

export type CategorySelect = typeof Category.$inferSelect
export type CategoryInsert = typeof Category.$inferInsert
