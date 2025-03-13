import { relations } from "drizzle-orm";
import { integer, pgTable as table, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "../columns.helpers";
import { Category } from "./category";
import { Group } from "./group";
import { Organization } from "./organization";
import { Priority } from "./priority";
import { Status } from "./status";
import { Tag } from "./tag";
import { TicketAssignments } from "./ticket-assignment";
import { TicketNote } from "./ticket-note";
import { User } from "./user";

export const Ticket = table("ticket", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  subject: varchar().notNull(),
  content: varchar(),

  organizationId: integer()
    .notNull()
    .references(() => Organization.id),

  createdById: integer()
    .notNull()
    .references(() => User.id),

  statusId: integer()
    .notNull()
    .references(() => Status.id),

  groupId: integer()
    // .notNull()
    .references(() => Group.id),

  priorityId: integer()
    .notNull()
    .references(() => Priority.id),

  categoryId: integer()
    // .notNull()
    .references(() => Category.id),

  ...timestamps,
});

export const TicketRelations = relations(Ticket, ({ one, many }) => ({
  organization: one(Organization, {
    fields: [Ticket.organizationId],
    references: [Organization.id],
  }),
  createdBy: one(User, { fields: [Ticket.createdById], references: [User.id] }),

  tags: many(Tag),
  notes: many(TicketNote),
  assignees: many(TicketAssignments),

  status: one(Status, { fields: [Ticket.statusId], references: [Status.id] }),
  group: one(Group, { fields: [Ticket.groupId], references: [Group.id] }),
  priority: one(Priority, {
    fields: [Ticket.priorityId],
    references: [Priority.id],
  }),
  category: one(Category, {
    fields: [Ticket.categoryId],
    references: [Category.id],
  }),
}));


export type TicketSelect = typeof Ticket.$inferSelect;
export type TicketInsert = typeof Ticket.$inferInsert;
