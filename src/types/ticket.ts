import type { User } from "@prisma/client";
import { PublicUser } from "./users";



export type TicketWithDetails = {
  id: number;
  subject: string;
  content: string | null;
  Creator: PublicUser
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
  Solvers: PublicUser[] | null;
  createdAt: Date;
};
