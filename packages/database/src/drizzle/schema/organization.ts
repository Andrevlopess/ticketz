import { relations } from "drizzle-orm";
import { integer, pgTable as table, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "../columns.helpers";
import { MemberShip } from "./membership";
import { Ticket } from "./ticket";
import { Group } from "./group";
import { Category } from "./category";
import { Status } from "./status";
import { Priority } from "./priority";
import { Tag } from "./tag";
import { Tenant } from "./tenant";

export const Organization = table("organization", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).unique().notNull(),
  logoUrl: varchar({ length: 255 }),
  description: varchar({ length: 255 }),

  tenantId: integer()
    .notNull()
    .references(() => Tenant.id),

  ...timestamps,
});

export const OrganizationRelations = relations(
  Organization,
  ({ many, one }) => ({
    tenant: one(Tenant, {
      fields: [Organization.tenantId],
      references: [Tenant.id],
    }),
    memberships: many(MemberShip),
    tickets: many(Ticket),
    groups: many(Group),
    categories: many(Category),
    statuses: many(Status),
    priorities: many(Priority),
    tags: many(Tag),
  })
);

export type OrganizationSelect = typeof Organization.$inferSelect;
export type OrganizationInsert = typeof Organization.$inferInsert;
