import { integer, pgTable as table, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "./columns.helpers";
import { pgEnum } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { primaryKey } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["MASTER", "ADMIN", "USER"]);
export const noteTypeEnum = pgEnum("NoteType", ["PUBLIC", "PRIVATE"]);

// ! User table

export const User = table("user", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar({ length: 255 }).notNull().unique(),

  password: varchar(),
  role: roleEnum(),
  ...timestamps,
});

export const UserRelations = relations(User, ({ one, many }) => ({
  profile: one(Profile),
  memberships: many(MemberShip),
  // notes: many(TicketNotes)
  tags: many(Tag),
}));

export type UserSelect = typeof User.$inferSelect;
export type UserDto = typeof User.$inferInsert;

// ! Profile table

export const Profile = table("profile", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  firstName: varchar({ length: 50 }).notNull(),
  lastName: varchar({ length: 50 }).notNull(),

  photoUrl: varchar(),
  phone: varchar(),

  userId: integer().references(() => User.id),

  ...timestamps,
});

export const ProfileRelations = relations(Profile, ({ one }) => ({
  user: one(User, { fields: [Profile.userId], references: [User.id] }),
}));

export type ProfileSelect = typeof Profile.$inferSelect;
export type ProfileDto = typeof Profile.$inferInsert;

// ! Organization table

export const Organization = table("organization", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).unique().notNull(),
  logoUrl: varchar({ length: 255 }),
  description: varchar({ length: 255 }),

  ...timestamps,
});

export const OrganizationRelations = relations(Organization, ({ many }) => ({
  memberships: many(MemberShip),
}));

// ! MemberShip relation table
// todo: add a invitedBy column to save who added someone to a organization
export const MemberShip = table(
  "membership",
  {
    userId: integer()
      .notNull()
      .references(() => User.id),
    organizationId: integer()
      .notNull()
      .references(() => Organization.id),
    ...timestamps,
  },
  (t) => [primaryKey({ columns: [t.organizationId, t.userId] })]
);

export const MemberShipRelations = relations(MemberShip, ({ one }) => ({
  user: one(User, { fields: [MemberShip.userId], references: [User.id] }),
  organization: one(Organization, {
    fields: [MemberShip.userId],
    references: [Organization.id],
  }),
}));

// ! Tickets table

export const Ticket = table("ticket", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  subject: varchar().notNull(),
  content: varchar(),
  ...timestamps,
});

export const TicketRelations = relations(Ticket, ({ one, many }) => ({
  user: one(User),
  tags: many(Tag)
}));

// ! Ticket Notes table
export const TicketNote = table("ticketNotes", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  content: varchar(),

  noteType: noteTypeEnum().$defaultFn(() => "PRIVATE"),

  ticketId: integer().references(() => Ticket.id),
  creatorId: integer().references(() => User.id),

  ...timestamps,
});

export const TicketNotesRelations = relations(TicketNote, ({ one }) => ({
  ticket: one(Ticket, {
    fields: [TicketNote.ticketId],
    references: [Ticket.id],
  }),
  creator: one(User, { fields: [TicketNote.creatorId], references: [User.id] }),
}));

// ! Tags table

export const Tag = table("tag", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  content: varchar(),

  ...timestamps,
});

export const TagRelations = relations(Tag, ({ many }) => ({
  tickets: many(Ticket),
}));

export const TagsOnTicket = table(
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
    fields: [TagsOnTicket.tagId],
    references: [Ticket.id],
  }),
}));
