import { relations } from "drizzle-orm";
import { integer, pgTable, primaryKey, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "../columns.helpers";
import { Ticket } from "./ticket";
import { Organization } from "./organization";

export const Tag = pgTable("tag", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar().unique().notNull(),

  organizationId: integer()
    .notNull()
    .references(() => Organization.id),

  ...timestamps,
});

export const TagRelations = relations(Tag, ({ many, one }) => ({
  tagsOnTicket: many(TagsOnTicket),
  organization: one(Organization, {
    fields: [Tag.organizationId],
    references: [Organization.id],
  }),
}));

export const TagsOnTicket = pgTable(
  "tagsOnTicket",
  {
    tagId: integer()
      .notNull()
      .references(() => Tag.id),
    ticketId: integer()
      .notNull()
      .references(() => Ticket.id),
  },
  (t) => [primaryKey({ columns: [t.ticketId, t.tagId] })]
);

export const TagsOnTicketRelations = relations(TagsOnTicket, ({ one }) => ({
  tag: one(Tag, {
    fields: [TagsOnTicket.tagId],
    references: [Tag.id],
  }),
  ticket: one(Ticket, {
    fields: [TagsOnTicket.ticketId],
    references: [Ticket.id],
  }),
}));

export type TagSelect = typeof Tag.$inferSelect;
export type TagInsert = typeof Tag.$inferInsert;
