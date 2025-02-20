import { TicketPreviewDetails } from "@/types/ticket";
import { BadgeList } from "../badges-list";
import { Separator } from "../ui/separator";
import TicketViewMenu from "./ticket-view-header";

interface Props {
  ticket: TicketPreviewDetails;
}

export default function TicketView({ ticket }: Props) {
  return (
    <div className="gap-4 flex flex-col mt-4">
      <TicketViewMenu ticket={ticket} />

      <div className="flex flex-col gap-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          #{ticket.id}
        </h1>
        <div className="flex space-x-2">
          <p className="leading-7 text-muted-foreground">
            {ticket.Status?.name}
          </p>
          <Separator orientation="vertical" />
          <p className="leading-7 text-muted-foreground">
            {ticket.createdAt.toLocaleDateString("pt-br", {
              dateStyle: "long",
            })}
          </p>
        </div>

        <BadgeList items={ticket.Tags} maxBadges={2} />
        <h2 className="mt-4 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          {ticket.subject}
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">{ticket.content}</p>
      </div>
    </div>
  );
}
