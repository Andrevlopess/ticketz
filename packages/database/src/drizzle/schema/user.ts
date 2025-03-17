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
import { Organization } from "./organization";
import { z } from "zod";

export const RoleEnum = pgEnum("role", ["MASTER", "ADMIN", "USER"]);

const RoleEnumSchema = z.enum(RoleEnum.enumValues);
export type Role = z.infer<typeof RoleEnumSchema>;

export const User = table("user", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull().unique(),

  password: varchar(),
  role: RoleEnum().$defaultFn(() => "USER"),
  defaultOrganizationId: integer()
    .notNull()
    .default(1)
    .references(() => Organization.id),

  ...timestamps,
});

export const UserRelations = relations(User, ({ one, many }) => ({
  // profile: one(Profile),
  memberships: many(MemberShip),
  notes: many(TicketNote, { relationName: "notesOnTicket" }),
  usersOnGroup: many(UsersOnGroup),
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
