import TicketCreatorCard from "@/components/ticket/ticket-creator-card";
import TicketView from "@/components/ticket/ticket-view";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Suspense } from "react";

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

  // const ticket = {
  //   id: 15,
  //   subject:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ea itaque, perspiciatis necessitatibus magni ducimus sint odio dolores ipsa harum dolore labore, cum rem corrupti reiciendis accusantium non saepe laboriosam.",
  //   content:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ea itaque, perspiciatis necessitatibus magni ducimus sint odio dolores ipsa harum dolore labore, cum rem corrupti reiciendis accusantium non saepe laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ea itaque, perspiciatis necessitatibus magni ducimus sint odio dolores ipsa harum dolore labore, cum rem corrupti reiciendis accusantium non saepe laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ea itaque, perspiciatis necessitatibus magni ducimus sint odio dolores ipsa harum dolore labore, cum rem corrupti reiciendis accusantium non saepe laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ea itaque, perspiciatis necessitatibus magni ducimus sint odio dolores ipsa harum dolore labore, cum rem corrupti reiciendis accusantium non saepe laboriosam.",
  //   Creator: {
  //     id: 7,
  //     first_name: "andre",
  //     last_name: "lopes",
  //     email: "andrellopes021@gmail.com",
  //     photo: "https://github.com/andrevlopess.png",
  //   },
  //   Company: {
  //     name: "Ticket Corp",
  //     id: 1,
  //   },
  //   Priority: {
  //     name: "High",
  //     id: 1,
  //   },
  //   Group: {
  //     name: "Support",
  //     id: 1,
  //   },
  //   Status: {
  //     name: "Open",
  //     id: 1,
  //   },
  //   Solvers: [
  //     {
  //       id: 8,
  //       first_name: "rafa",
  //       last_name: "farina",
  //       email: "andrellopes0q21@gmail.com",
  //       photo: "https://ui.shadcn.com/avatars/03.png",
  //     },
  //     {
  //       id: 9,
  //       first_name: "John",
  //       last_name: "Doe",
  //       email: "user1@example.com",
  //       photo: null,
  //     },
  //     {
  //       id: 7,
  //       first_name: "andre",
  //       last_name: "lopes",
  //       email: "andrellopes021@gmail.com",
  //       photo: "https://github.com/andrevlopess.png",
  //     },
  //   ],
  //   Tags: [
  //     {
  //       id: 1,
  //       name: "Documentation",
  //     },
  //     {
  //       id: 2,
  //       name: "Bug",
  //     },
  //     {
  //       id: 3,
  //       name: "Feature",
  //     },
  //     {
  //       id: 4,
  //       name: "Dependents",
  //     },
  //     {
  //       id: 5,
  //       name: "Service",
  //     },
  //   ],
  //   createdAt: new Date("2025-02-17T20:33:46.088Z"),
  //   deletedAt: null,
  //   updatedAt: new Date("2025-02-25T19:43:52.877Z"),
  // };

  return (
    <div className="flex container mx-auto w-full gap-4">
      <div className="">
        <Suspense fallback={<p>loading</p>}>

          <TicketView ticket={ticket} />
        </Suspense>

      </div>
      <div className="md:hidden">
        <TicketCreatorCard creator={ticket.Creator} />
      </div>
    </div>
  );
}
