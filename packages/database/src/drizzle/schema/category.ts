import { relations } from "drizzle-orm";
import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core";
import { Ticket } from "./ticket";
import { Organization } from "./organization";
import { primaryKey } from "drizzle-orm/pg-core";
import { unique } from "drizzle-orm/pg-core";

export const Category = pgTable(
  "category",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar().notNull(),
    description: varchar(),

    organizationId: integer()
      .notNull()
      .references(() => Organization.id),

    createdAt: timestamp().defaultNow().notNull(),
  },
  (t) => [
    unique().on(t.name, t.organizationId),
  ]
);

export const CategoryRelations = relations(Category, ({ many, one }) => ({
  tickets: many(Ticket),
  organization: one(Organization, {
    fields: [Category.organizationId],
    references: [Organization.id],
  }),
}));

export type CategorySelect = typeof Category.$inferSelect;
export type CategoryInsert = typeof Category.$inferInsert;
