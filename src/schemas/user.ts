import { z } from "zod";

export const UserSchema = z.object({
    id: z.number(),
    first_name: z.string(),
    last_name: z.string(),
    photo: z.string().nullable(),
    email: z.string().email(),
})