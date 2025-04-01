import { relations } from "drizzle-orm";
import { integer, pgTable as table, varchar } from "drizzle-orm/pg-core";
import { softDeleteTimestamps } from "../columns.helpers";
import { MemberShip } from "./membership";
import { Organization } from "./organization";
import { Ticket } from "./ticket";
import { TicketAssignments } from "./ticket-assignment";
import { TicketNote } from "./ticket-note";
import { GroupMembership } from "./group-membership";

export const User = table("user", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar().notNull(),

  name: varchar().notNull(),

  photoUrl: varchar(),
  phone: varchar(),
  jobTitle: varchar(),

  ...softDeleteTimestamps,
});

export const UserRelations = relations(User, ({ one, many }) => ({
  memberships: many(MemberShip),
  notes: many(TicketNote, { relationName: "notesOnTicket" }),
  groupMemberships: many(GroupMembership),
  assignees: many(TicketAssignments, { relationName: "assigneesOnTicket" }),
  assigner: many(TicketAssignments, { relationName: "assignersOnTicket" }),
  createdTickets: many(Ticket)
}));

export type UserSelect = typeof User.$inferSelect;
export type UserInsert = typeof User.$inferInsert;
