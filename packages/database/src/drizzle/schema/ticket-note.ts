import { relations } from "drizzle-orm";
import { integer, pgEnum, pgTable as table, varchar } from "drizzle-orm/pg-core";
import { softDeleteTimestamps } from "../columns.helpers";
import { Ticket } from "./ticket";
import { User } from "./user";

export const noteTypeEnum = pgEnum("NoteType", ["PUBLIC", "PRIVATE"]);

export const TicketNote = table("ticketNotes", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  content: varchar().notNull(),

  noteType: noteTypeEnum().$defaultFn(() => "PRIVATE").notNull(),

  ticketId: integer().notNull().references(() => Ticket.id),
  creatorId: integer().notNull().references(() => User.id),

  ...softDeleteTimestamps,
});

export const TicketNotesRelations = relations(TicketNote, ({ one }) => ({
  ticket: one(Ticket, {
    relationName: 'notesOnTicket',
    fields: [TicketNote.ticketId],
    references: [Ticket.id],
  }),
  creator: one(User, { fields: [TicketNote.creatorId], references: [User.id] }),
}));

export type TicketNoteSelect = typeof TicketNote.$inferSelect;
export type TicketNoteInsert = typeof TicketNote.$inferInsert;
