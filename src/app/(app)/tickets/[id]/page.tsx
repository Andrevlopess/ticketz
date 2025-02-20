import TicketCreatorCard from "@/components/ticket/ticket-creator-card";
import TicketView from "@/components/ticket/ticket-view";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

interface Params {
  id: string;
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const id = (await params).id;

  console.log(parseInt(id));

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

    
    <div className="grid grid-cols-3 max-w-7xl mx-auto w-full gap-12">
      <div className=" col-span-2">
        <TicketView ticket={ticket} />
      </div>
      <div>
        <TicketCreatorCard creator={ticket.Creator} />
      </div>
    </div>
  );
}
