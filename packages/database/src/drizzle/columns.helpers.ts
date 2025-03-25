import { timestamp } from 'drizzle-orm/pg-core';

export const softDeleteTimestamps = {
  updatedAt: timestamp(),
  createdAt: timestamp().defaultNow().notNull(),
  deletedAt: timestamp(),
};
