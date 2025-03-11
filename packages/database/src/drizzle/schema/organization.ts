import { relations } from "drizzle-orm";
import { integer, pgTable as table, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "../columns.helpers";
import { MemberShip } from "./membership";
import { Ticket } from "./ticket";

export const Organization = table("organization", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).unique().notNull(),
  logoUrl: varchar({ length: 255 }),
  description: varchar({ length: 255 }),

  ...timestamps,
});

export const OrganizationRelations = relations(Organization, ({ many }) => ({
  memberships: many(MemberShip),
  tickets: many(Ticket)
}));

export type OrganizationSelect = typeof Organization.$inferSelect
export type OrganizationInsert = typeof Organization.$inferInsert