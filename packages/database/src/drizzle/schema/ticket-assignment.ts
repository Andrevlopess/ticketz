import { integer } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { User } from "./user";
import { Ticket } from "./ticket";
import { timestamps } from "../columns.helpers";
import { primaryKey } from "drizzle-orm/pg-core";

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
