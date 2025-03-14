import { relations } from "drizzle-orm";
import {
  integer,
  pgEnum,
  pgTable as table,
  varchar,
} from "drizzle-orm/pg-core";
import { timestamps } from "../columns.helpers";
import { UsersOnGroup } from "./group";
import { MemberShip } from "./membership";
import { Profile } from "./profile";
import { Ticket } from "./ticket";
import { TicketAssignments } from "./ticket-assignment";
import { TicketNote } from "./ticket-note";

export const roleEnum = pgEnum("role", ["MASTER", "ADMIN", "USER"]);
export const User = table("user", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull().unique(),

  password: varchar(),
  role: roleEnum().$defaultFn(() => "USER"),

  ...timestamps,
});

export const UserRelations = relations(User, ({ one, many }) => ({
  // profile: one(Profile),
  memberships: many(MemberShip),
  notes: many(TicketNote, {relationName: "notesOnTicket"}),
  usersOnGroup: many(UsersOnGroup),
  assignees: many(TicketAssignments, { relationName: "assigneesOnTicket" }),
  assigner: many(TicketAssignments, { relationName: "assignersOnTicket" }),
  createdTickets: many(Ticket),
}));

export type UserSelect = typeof User.$inferSelect;
export type UserInsert = typeof User.$inferInsert;
