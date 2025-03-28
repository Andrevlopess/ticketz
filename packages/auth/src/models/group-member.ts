import { GroupRoleEnumSchema } from "@ticketz/database";
import { z } from "zod";

export const memberSchema = z.object({
  id: z.number(),
  role: GroupRoleEnumSchema,
});

export type GroupMember = z.infer<typeof memberSchema>;
