import { Group } from "@ticketz/database";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";


export const groupSchema = createSelectSchema(Group).extend({
  __typename: z.literal("Group").default("Group"),
});

export type Group = z.infer<typeof groupSchema>;
