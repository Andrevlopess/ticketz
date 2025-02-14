import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type { Ticket } from "@prisma/client";


interface Props {
    ticket: Ticket;
}

export function TicketPreview({ticket}: Props) {
  return (
    <Card >
      <CardHeader>
        <CardTitle>{ticket.subject}</CardTitle>
        <CardDescription>{ticket.creatorId}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{ticket.content}</p>
      </CardContent>
    </Card>
  );
}
