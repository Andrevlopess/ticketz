import React, { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { deleteTicket } from "@/actions/ticket";
import { FormState } from "@/types/form-state";
import { Loader2 } from "lucide-react";

const initialState: FormState = {
  success: false,
};

export default function DeleteTicketForm({ ticketId }: { ticketId: number }) {
  const [formState, formAction, isPending] = useActionState(
    deleteTicket,
    initialState
  );
  console.log(ticketId);

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

// hook.js:608
//  async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server. Error Component Stack
//     at DeleteTicketButton (<anonymous>)
