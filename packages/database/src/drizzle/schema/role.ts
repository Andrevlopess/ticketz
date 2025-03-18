import { pgEnum } from "drizzle-orm/pg-core";
import z from "zod";

export const RoleEnum = pgEnum("role", ["MASTER", "ADMIN", "USER"]);

export const RoleEnumSchema = z.enum(RoleEnum.enumValues);
export type Role = z.infer<typeof RoleEnumSchema>;