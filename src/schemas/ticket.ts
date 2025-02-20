import { z } from "zod";
import { UserSchema } from "./user";

const NewTicketFormSchema = z.object({
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

const TicketPreviewDetailsSchema = z.object({
  id: z.number(),
  subject: z.string(),
  content: z.string().nullable(),
  Creator: UserSchema,
  Company: z
    .object({
      name: z.string(),
      id: z.number(),
    })
    .nullable(),
  Priority: z
    .object({
      name: z.string(),
      id: z.number(),
    })
    .nullable(),
  Group: z
    .object({
      name: z.string(),
      id: z.number(),
    })
    .nullable(),
  Status: z
    .object({
      name: z.string(),
      id: z.number(),
    })
    .nullable(),
  Tags: z.array(
    z.object({
      name: z.string(),
      id: z.number(),
    })
  ),
  Solvers: z.array(UserSchema),
  createdAt: z.date(),
});

export { TicketPreviewDetailsSchema, NewTicketFormSchema };
