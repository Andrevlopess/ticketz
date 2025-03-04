import { TicketPreviewDetails } from "@/schemas/ticket";
import { Button } from "../ui/button";

interface Props {
  ticket: TicketPreviewDetails;
}

export default async function TicketViewHeader({ ticket }: Props) {
 
  return (
    <div className="flex items-start w-full gap-2">
      <Button>Answer</Button>
      {/* <Button variant="outline">Close</Button>
      <Button variant="outline">Add Note</Button> */}

      <div className="ml-auto flex gap-2">
       
        <Button variant="destructive">Edit</Button>
      </div>
    </div>
  );
}
