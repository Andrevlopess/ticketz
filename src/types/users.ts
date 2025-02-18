import type { User } from "@prisma/client";


export type PublicUser = Pick<User, "id" | "first_name" | "last_name" | "email" | "photo">; 
