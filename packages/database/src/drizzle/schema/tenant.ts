import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { softDeleteTimestamps } from "../columns.helpers";

export const Tenant = pgTable("tenant", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar().unique().notNull(),
  slug: varchar().unique().notNull(),
  domain: varchar().unique().notNull(),

  ...softDeleteTimestamps,
});

// export const TenantRelations = relations(Tenant, ({ many, one }) => ({
//   organization: one(Organization, {
//     fields: [Tenant.organizationId],
//     references: [Organization.id],
//   }),
// }));

export type TenantSelect = typeof Tenant.$inferSelect;
export type TenantInsert = typeof Tenant.$inferInsert;
