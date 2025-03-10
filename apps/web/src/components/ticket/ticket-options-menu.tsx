import { prisma } from "@/lib/prisma";
import { TicketPreviewDetails } from "@/schemas/ticket";
import TicketStatusForm from "./ticket-options-form";
import { Skeleton } from "../ui/skeleton";
import { Fragment } from "react";

interface TicketOptionsMenuProps {
  ticket: TicketPreviewDetails;
}

export default async function TicketViewOptionsMenu({
  ticket,
}: TicketOptionsMenuProps) {
  const [statuses, priorities, groups, companies, tags] = await prisma.$transaction((prisma) => {
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

      prisma.organization.findMany({
        select: {
          id: true,
          name: true,
        },
      }),

      prisma.tag.findMany({
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
        companies={companies}
        statuses={statuses}
        tags={tags}
      />
    </div>
  );
}

export function TicketViewOptionsMenuSkeleton() {
  return (
    <div className="space-y-6 z-0">
      {new Array(5).fill(null).map((_, i) => (
        <Fragment key={i}>
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-8 w-64" />
        </Fragment>
      ))}
      <Skeleton className="w-64 h-10" />
    </div>
  );
}
