import { deleteTicket } from "@/actions/ticket";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FormState } from "@/types/form-state";
import { Loader2 } from "lucide-react";
import { useActionState, useEffect } from "react";

const initialState: FormState = {
  success: false,
};

export default function DeleteTicketForm({
  ticketId,
  closeModal,
}: {
  ticketId: number;
  closeModal: () => void;
}) {
  const [formState, formAction, isPending] = useActionState(
    deleteTicket,
    initialState
  );

  const { toast } = useToast();

  useEffect(() => {
    if (formState.success) {
      closeModal();
      toast({
        title: "Ticket deleted",
        description: "Ticket was deleted successfully",
        variant: "destructive",
      });
    }
  }, [formState]);

  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={ticketId} />
      <Button variant="destructive" disabled={isPending}>
        {isPending ? <Loader2 className="animate-spin" /> : "Delete"}
      </Button>

      <p aria-live="polite" className="" role="status">
        {formState.errors?.error}
      </p>
    </form>
  );
}
