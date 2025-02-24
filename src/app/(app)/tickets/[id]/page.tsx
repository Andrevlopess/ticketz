import TicketCreatorCard from "@/components/ticket/ticket-creator-card";
import TicketView from "@/components/ticket/ticket-view";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

interface Params {
  id: string;
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const id = (await params).id;

  if (!parseInt(id)) {
    return notFound();
  }

  const ticket = await prisma.ticket.findUnique({
    where: {
      id: parseInt(id),
    },
    select: {
      id: true,
      subject: true,
      content: true,
      Creator: {
        select: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
          photo: true,
        },
      },
      Company: {
        select: {
          name: true,
          id: true,
        },
      },
      Priority: {
        select: {
          name: true,
          id: true,
        },
      },
      Group: {
        select: {
          name: true,
          id: true,
        },
      },
      Status: {
        select: {
          name: true,
          id: true,
        },
      },
      Solvers: {
        select: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
          photo: true,
        },
      },
      Tags: {
        select: {
          id: true,
          name: true,
        },
      },
      createdAt: true,
      deletedAt: true,
      updatedAt: true,
    },
  });

  if (!ticket) {
    return notFound();
  }


  return (
    <div className="flex container mx-auto w-full gap-4">
      <div className="">
        <TicketView ticket={ticket} />
      </div>
      <div className="max-w-sm">
        <TicketCreatorCard creator={ticket.Creator} />
      </div>
    </div>
  );
}
