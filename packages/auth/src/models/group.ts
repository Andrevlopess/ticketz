import { Group } from "@ticketz/database";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

// export const groupSchema = z.object({
//   __typename: z.literal('Group').default('Group'),
//   id: z.number(),
//   ownerId: z.number(),
// })

export const groupSchema = createSelectSchema(Group).extend({
  __typename: z.literal("Group").default("Group"),
});

export type Group = z.infer<typeof groupSchema>;
