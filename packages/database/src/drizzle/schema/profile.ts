import { relations } from "drizzle-orm";
import { integer, pgTable as table, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "../columns.helpers";
import { User } from "./user";

export const Profile = table("profile", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  firstName: varchar({ length: 50 }).notNull(),
  lastName: varchar({ length: 50 }).notNull(),

  photoUrl: varchar(),
  phone: varchar(),

  userId: integer()
    .unique()
    .notNull()
    .references(() => User.id),

  ...timestamps,
});

export const ProfileRelations = relations(Profile, ({ one }) => ({
  user: one(User, { fields: [Profile.userId], references: [User.id] }),
}));

export type ProfileSelect = typeof Profile.$inferSelect;
export type ProfileInsert = typeof Profile.$inferInsert;
