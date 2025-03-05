import { TicketPreviewDetails } from "@/schemas/ticket";
import { Suspense } from "react";
import { BadgeList } from "../badges-list";
import { Separator } from "../ui/separator";
import TicketViewOptionsMenu, {
  TicketViewOptionsMenuSkeleton,
} from "./ticket-options-menu";
import TicketViewHeader from "./ticket-view-header";

interface Props {
  ticket: TicketPreviewDetails;
}

export default function TicketView({ ticket }: Props) {
  return (
    <div className="flex gap-12">
      <div className="flex-col ">
        <TicketViewHeader ticket={ticket} />
        <div className="flex flex-col mt-4 gap-2">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            #{ticket.id}
          </h1>

          <div className="flex space-x-2">
            <p className="leading-7 text-muted-foreground">
              {ticket.Status?.name}
            </p>
            <Separator variant="dot" className="bg-muted-foreground" />
            <p className="leading-7 text-muted-foreground">
              {ticket.createdAt.toLocaleString("pt-br", {
                dateStyle: "long",
              })}
              {", "} 
              {ticket.createdAt.toLocaleTimeString("pt-br", {
                timeStyle: "short",
              })}
            </p>
          </div>

          <BadgeList items={ticket.Tags} maxBadges={6} />

          <h2 className="mt-8 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            {ticket.subject}
          </h2>

          <p className="leading-7">{ticket.content}</p>
        </div>
      </div>
      {/* <TicketViewOptionsMenuSkeleton /> */}
      <Suspense fallback={<TicketViewOptionsMenuSkeleton />}>
        <TicketViewOptionsMenu ticket={ticket} />
      </Suspense>
    </div>
  );
}
