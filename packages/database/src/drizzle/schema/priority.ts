import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "../columns.helpers";
import { relations } from "drizzle-orm";
import { Ticket } from "./ticket";

export const Priority = pgTable("priority", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar().unique().notNull(),

  ...timestamps,
});

export const PriorityRelations = relations(Priority, ({many}) => ({
    tickets: many(Ticket)
}))

export type PrioritySelect = typeof Priority.$inferSelect
export type PriorityInsert = typeof Priority.$inferInsert