import { prisma } from "@/lib/prisma";
import { TicketPreviewDetails } from "@/schemas/ticket";
import TicketStatusForm from "./ticket-options-form";
import { Skeleton } from "../ui/skeleton";

interface TicketOptionsMenuProps {
  ticket: TicketPreviewDetails;
}

export default async function TicketViewOptionsMenu({
  ticket,
}: TicketOptionsMenuProps) {
  const [statuses, priorities, groups] = await prisma.$transaction((prisma) => {
    return Promise.all([
      prisma.status.findMany({
        where: {
          deletedAt: null,
        },
        select: {
          id: true,
          name: true,
        },
      }),

      prisma.priority.findMany({
        select: {
          id: true,
          name: true,
        },
      }),

      prisma.group.findMany({
        select: {
          id: true,
          name: true,
        },
      }),
    ]);
  });

  return (
    <div className="space-y-4">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Properties
      </h4>

      <TicketStatusForm
        ticket={ticket}
        priorities={priorities}
        groups={groups}
        statuses={statuses}
      />
    </div>
  );
}

export function TicketViewOptionsMenuSkeleton() {
  return (
      <div className="space-y-6">
        {new Array(5).fill(null).map((_, i) => (
          <>
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-8 w-64" />
          </>
        ))}
      <Skeleton className="w-64 h-10" />
      </div>
  );
}
