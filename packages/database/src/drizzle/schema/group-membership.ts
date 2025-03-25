import { relations } from "drizzle-orm";
import { integer, timestamp, primaryKey } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";
import { Group } from "./group";
import { User } from "./user";
import { GroupRoleEnum } from "./group-role";

export const GroupMembership = pgTable(
  "group_membership",
  {
    userId: integer()
      .notNull()
      .references(() => User.id),
    groupId: integer()
      .notNull()
      .references(() => Group.id),
    role: GroupRoleEnum().notNull().default("MEMBER"),

    createdAt: timestamp().defaultNow().notNull(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.groupId] })]
);

export const GroupMembershipRelations = relations(
  GroupMembership,
  ({ one }) => ({
    user: one(User, {
      fields: [GroupMembership.userId],
      references: [User.id],
    }),
    group: one(Group, {
      fields: [GroupMembership.groupId],
      references: [Group.id],
    }),
  })
);
