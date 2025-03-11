import { relations } from "drizzle-orm";
import { integer, primaryKey, pgTable as table } from "drizzle-orm/pg-core";
import { timestamps } from "../columns.helpers";
import { Organization } from "./organization";
import { User } from "./user";

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
    fields: [MemberShip.organizationId],
    references: [Organization.id],
  }),
}));

