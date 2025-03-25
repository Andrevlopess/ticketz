import { relations } from "drizzle-orm";
import { integer, pgTable, primaryKey, timestamp } from "drizzle-orm/pg-core";
import { Ticket } from "./ticket";
import { User } from "./user";

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

    createdAt: timestamp().defaultNow().notNull(),
  },
  (t) => [primaryKey({ columns: [t.ticketId, t.assigneeId] })]
);

export const TicketAssignmentsRelations = relations(
  TicketAssignments,
  ({ one }) => ({
    assigneeId: one(User, {
      relationName: "assigneesOnTicket",
      fields: [TicketAssignments.assigneeId],
      references: [User.id],
    }),
    assignerId: one(User, {
      relationName: "assignersOnTicket",
      fields: [TicketAssignments.assignerId],
      references: [User.id],
    }),
    ticket: one(Ticket, {
      fields: [TicketAssignments.ticketId],
      references: [Ticket.id],
    }),
  })
);

export type TicketAssignmentsInsert = typeof TicketAssignments.$inferInsert;
export type TicketAssignmentsSelect = typeof TicketAssignments.$inferSelect;
