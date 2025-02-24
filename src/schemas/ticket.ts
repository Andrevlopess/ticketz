import { z } from "zod";
import { PublicUserSchema } from "./user";
import { group } from "console";

const StatusSchema = z.object({
  name: z.string(),
  id: z.number(),
});
export type Status = z.infer<typeof StatusSchema>;

const GroupSchema = z.object({
  name: z.string(),
  id: z.number(),
});
// .nullable();
export type Group = z.infer<typeof GroupSchema>;

const TagSchema = z.object({
  name: z.string(),
  id: z.number(),
});
export type Tag = z.infer<typeof TagSchema>;

const PrioritySchema = z.object({
  name: z.string(),
  id: z.number(),
});
export type Priority = z.infer<typeof PrioritySchema>;

const CompanySchema = z.object({
  name: z.string(),
  id: z.number(),
});
export type Company = z.infer<typeof CompanySchema>;

export const NewTicketFormSchema = z.object({
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

export type NewTicketForm = z.infer<typeof NewTicketFormSchema>;

export const TicketPreviewDetailsSchema = z.object({
  id: z.number(),
  subject: z.string(),
  content: z.string().nullable(),
  Creator: PublicUserSchema,
  Company: CompanySchema,
  Priority: PrioritySchema,
  Group: GroupSchema,
  Status: StatusSchema,
  Tags: z.array(TagSchema),
  Solvers: z.array(PublicUserSchema),
  createdAt: z.date(),
});

export type TicketPreviewDetails = z.infer<typeof TicketPreviewDetailsSchema>;

export const TicketPropertiesSchema = z.object({
  // ticketId: z.number(),
  statusId: z.string(),
  priorityId: z.string(),
  groupId: z.string(),
});

export type TicketProperties = z.infer<typeof TicketPropertiesSchema>;
