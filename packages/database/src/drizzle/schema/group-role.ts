import { pgEnum } from "drizzle-orm/pg-core";
import z from "zod";
import { RoleEnum } from "./role";

export const GroupRoleEnum = pgEnum("group_role", ["MEMBER", "GROUP_MANAGER"]);

export const GroupRoleEnumSchema = z.enum(GroupRoleEnum.enumValues);
export type GroupRole = z.infer<typeof GroupRoleEnumSchema>;
