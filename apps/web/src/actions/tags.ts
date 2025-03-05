"use server";

import { prisma } from "@/lib/prisma";

export default async function fetchTicketAvaliableTags(
  search: string,
  ticketId?: number
) {
  try {
    const res = await prisma.tag.findMany({
      where: {
        name: {
          contains: search,
          mode: "insensitive",
        },
        NOT: {
          Ticket: {
            some: {
              id: ticketId,
            },
          },
        },
      },
      select: {
        id: true,
        name: true,
      },
    });

    return res;
  } catch (error) {
    throw error;
  }
}

// select * from tags a where name like '%name%' and not exists (select null from tags aa where a.name = aa.name)
