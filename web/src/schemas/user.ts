import { z } from "zod";

export const PublicUserSchema = z.object({
  id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  photo: z.string().nullable(),
  email: z.string().email(),
});

export type PublicUser = z.infer<typeof PublicUserSchema>;
