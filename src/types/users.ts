import { UserSchema } from "@/schemas/user";
import type { User } from "@prisma/client";
import {z} from 'zod';

export type PublicUser = z.infer<typeof UserSchema>

