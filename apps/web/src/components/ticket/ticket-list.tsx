import { prisma } from "@/lib/prisma";
import type { Ticket } from "@prisma/client";
import { TicketPreview } from "./ticket-preview-card";

interface Props {
  tickets: Ticket[];
}

export default async function TicketsList() {
  const tickets: Ticket[] = await prisma.ticket.findMany();

  console.log(tickets);

  return (
    <div className="gap-2 grid grid-cols-3 border border-white">
      {tickets.map((ticket) => (
        <TicketPreview key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}
