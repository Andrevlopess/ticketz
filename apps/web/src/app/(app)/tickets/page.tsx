import { ticketsColumns } from "@/components/ticket/data-table/columns";
import { TicketsDataTable } from "@/components/ticket/data-table/data-table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { prisma } from "@/lib/prisma";
import { unstable_cache } from "next/cache";

export const revalidate = 15;

const getTickets = unstable_cache(
  async () => {
    return await prisma.ticket.findMany({
      take: 4,
      orderBy: {
        createdAt: "desc",
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
        Tags: {
          select: {
            id: true,
            name: true,
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
        createdAt: true,
      },
    });
  },
  ["tickets"],
  { revalidate: 60 * 60, tags: ["tickets"] }
);

export default async function Page() {
  // const tickets = await prisma.ticket.findMany({
  //   take: 4,
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  //   select: {
  //     id: true,
  //     subject: true,
  //     content: true,
  //     Creator: {
  //       select: {
  //         id: true,
  //         first_name: true,
  //         last_name: true,
  //         email: true,
  //         photo: true,
  //       },
  //     },
  //     Company: {
  //       select: {
  //         name: true,
  //         id: true,
  //       },
  //     },
  //     Priority: {
  //       select: {
  //         name: true,
  //         id: true,
  //       },
  //     },
  //     Group: {
  //       select: {
  //         name: true,
  //         id: true,
  //       },
  //     },
  //     Status: {
  //       select: {
  //         name: true,
  //         id: true,
  //       },
  //     },
  //     Tags: {
  //       select: {
  //         id: true,
  //         name: true,
  //       },
  //     },
  //     Solvers: {
  //       select: {
  //         id: true,
  //         first_name: true,
  //         last_name: true,
  //         email: true,
  //         photo: true,
  //       },
  //     },
  //     createdAt: true,
  //   },
  // });

  const tickets = await getTickets();


  return (
    <>
      <TicketsDataTable data={tickets} columns={ticketsColumns} />
    </>
  );
}
