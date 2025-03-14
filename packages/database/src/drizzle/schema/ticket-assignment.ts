import { integer } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { User } from "./user";
import { Ticket } from "./ticket";
import { timestamps } from "../columns.helpers";
import { primaryKey } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const TicketAssignments = pgTable(
  "ticketAssignments",
  {
    assigneeId: integer()
      .notNull()
      .references(() => User.id),
    assignerId: integer()
      .notNull()
      .references(() => User.id),
    ticketId: integer()
      .notNull()
      .references(() => Ticket.id),

    ...timestamps,
  },
  (t) => [primaryKey({ columns: [t.ticketId, t.assigneeId] })]
);


export const TicketAssignmentsRelations = relations(TicketAssignments, ({ one }) => ({
  assigneeId: one(User, {
    relationName: 'assigneesOnTicket',
    fields: [TicketAssignments.assigneeId],
    references: [User.id],
  }),
  assignerId: one(User, {
    relationName: 'assignersOnTicket',
    fields: [TicketAssignments.assignerId],
    references: [User.id],
  }),
  ticket: one(Ticket, {
    fields: [TicketAssignments.ticketId],
    references: [Ticket.id],
  }),
}));


export type TicketAssignmentsInsert = typeof TicketAssignments.$inferInsert
export type TicketAssignmentsSelect = typeof TicketAssignments.$inferSelect 