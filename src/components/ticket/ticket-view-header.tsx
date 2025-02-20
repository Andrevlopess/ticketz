import { TicketPreviewDetails } from "@/types/ticket";
import { Button } from "../ui/button";

interface Props {
  ticket: TicketPreviewDetails;
}

export default function TicketViewMenu({ ticket }: Props) {
  return (
    <div className="flex items-start w-full gap-2">
      <Button variant="outline">Answer</Button>
      <Button variant="outline">Close</Button>
      <Button variant="outline">Add Note</Button>
      <Button variant="destructive" className="ml-auto">
        Edit
      </Button>
    </div>
  );
}
