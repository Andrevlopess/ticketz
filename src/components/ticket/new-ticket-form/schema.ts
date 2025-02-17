import { z } from "zod";

export const formSchema = z.object({
  subject: z.string().trim().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  content: z.string().trim().min(2, {
    message: "Content must be at least 2 characters.",
  }),
  priority: z.string(),
  tags: z.array(z.string()).optional(),
  group: z.string().optional(),
  solver: z.string().optional(),
});