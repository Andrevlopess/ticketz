import type { User } from "@prisma/client";

export type TicketWithDetails = {
  id: number;
  subject: string;
  content: string | null;
  Creator: Pick<User, "id" | "first_name" | "last_name" | "email" | "photo">;
  Company: {
    name: string;
    id: number;
  } | null;
  Priority: {
    name: string;
    id: number;
  } | null;
  Group: {
    name: string;
    id: number;
  } | null;
  Status: {
    name: string;
    id: number;
  } | null;
  createdAt: Date;
};
