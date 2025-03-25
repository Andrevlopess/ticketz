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

  password: varchar(),
  defaultOrganizationId: integer()
    .notNull()
    .default(1)
    .references(() => Organization.id),

  ...softDeleteTimestamps,
});

export const UserRelations = relations(User, ({ one, many }) => ({
  // profile: one(Profile),
  memberships: many(MemberShip),
  notes: many(TicketNote, { relationName: "notesOnTicket" }),
  usersOnGroup: many(GroupMembership),
  assignees: many(TicketAssignments, { relationName: "assigneesOnTicket" }),
  assigner: many(TicketAssignments, { relationName: "assignersOnTicket" }),
  createdTickets: many(Ticket),
  defaultOrganization: one(Organization, {
    fields: [User.defaultOrganizationId],
    references: [Organization.id],
  }),
}));

export type UserSelect = typeof User.$inferSelect;
export type UserInsert = typeof User.$inferInsert;
