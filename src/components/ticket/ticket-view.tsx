import { TicketPreviewDetails } from "@/types/ticket";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

interface Props {
  ticket: TicketPreviewDetails;
}

export default function TicketView({ ticket }: Props) {
  return (
    <div className="space-y-6 mt-4">
      <div className="flex space-x-4 items-start ">
        <Avatar className="h-12 w-12 transition-transform">
          {ticket.Creator.photo && (
            <AvatarImage
              src={ticket.Creator.photo}
              alt={ticket.Creator.first_name}
            />
          )}
          <AvatarFallback>
            {`${ticket.Creator.first_name[0].toUpperCase()}
            ${ticket.Creator.last_name[0].toUpperCase()}`}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="text-primary-foreground mr-4 capitalize font-medium  tracking-tight">
            {ticket.Creator.first_name} {ticket.Creator.last_name}
          </p>
          <p className="text-muted-foreground mr-4">{ticket.Creator.email}</p>
        </div>
      </div>

      <div className="flex space-x-8">
        <div className="flex flex-col">
          <div className="flex space-x-1">
            {ticket.Tags?.map((tag) => (
              <Badge key={tag.id} variant="default">
                {tag.name}
              </Badge>
            ))}
          </div>
          <h2 className="mt-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            {ticket.subject}
          </h2>
        </div>
      </div>
    </div>
  );
}
