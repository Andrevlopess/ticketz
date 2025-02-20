import type { User } from "@prisma/client";
import { PublicUser } from "./users";
import { z } from "zod";
import { TicketPreviewDetailsSchema } from "@/schemas/ticket";

export type TicketPreviewDetails = z.infer<typeof TicketPreviewDetailsSchema>;

export interface TicketDetails extends TicketPreviewDetails {
  updatedAt: Date;
  // deletedAt: Date | null;
  // deletedBy: User | null;
}
