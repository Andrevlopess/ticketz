import { varchar } from "drizzle-orm/pg-core";
import { integer } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { timestamps } from "../columns.helpers";
import { relations } from "drizzle-orm";
import { Ticket } from "./ticket";

export const Status = pgTable('status', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar().unique().notNull(),

    ...timestamps
} )

export const StatusRelations = relations(Status, ({many}) => ({
    tickets: many(Ticket)
}))

export type StatusSelect = typeof Status.$inferSelect;
export type StatusInsert = typeof Status.$inferInsert;
