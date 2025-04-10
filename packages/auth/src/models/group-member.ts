import { GroupRoleEnumSchema } from "@ticketz/database";
import { z } from "zod";

export const groupMemberSchema = z.object({
  id: z.number(),
  role: GroupRoleEnumSchema,
  // role: z.enum([...GroupRoleEnumSchema.options, "ANONYMOUS"]),
});

export type GroupMember = z.infer<typeof groupMemberSchema>;
