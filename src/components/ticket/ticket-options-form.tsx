"use client";

import { updateTicketProperties } from "@/actions/ticket";
import { toast } from "@/hooks/use-toast";
import {
  Group,
  Priority,
  Status,
  TicketPreviewDetails,
  TicketProperties,
  TicketPropertiesSchema,
} from "@/schemas/ticket";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { startTransition, useActionState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { FormState } from "../../types/form-state";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import MultipleSelect from "../ui/multiple-select";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const initialState: FormState = {
  success: false,
};

interface TicketPropertiesFormProps {
  ticket: TicketPreviewDetails;
  statuses: Status[];
  priorities: Priority[];
  groups: Group[];
}
export default function TicketStatusForm(props: TicketPropertiesFormProps) {
  const updateTicketPropertiesWithId = updateTicketProperties.bind(
    null,
    props.ticket.id
  );

  const ref = useRef<HTMLFormElement>(null);
  const [formState, formAction, isPending] = useActionState(
    updateTicketPropertiesWithId,
    initialState
  );

  const form = useForm<TicketProperties>({
    resolver: zodResolver(TicketPropertiesSchema),
    defaultValues: {
      // ticketId: props.ticket.id,
      statusId: props.ticket.Status.id.toString(),
      groupId: props.ticket.Group.id.toString(),
      priorityId: props.ticket.Priority.id.toString(),
    },
  });

  const onSubmit = (data: TicketProperties) => {
    startTransition(() => formAction(new FormData(ref.current!)));
  };

  useEffect(() => {
    if (formState.success) {
      toast({
        title: "Ticket updated successfully!",
        description: "Your ticket has been updated successfully.",
        // status: "success",
      });
    }
  }, [formState.success]);

  console.log(
    "ta sujo:",
    form.formState.isDirty,
    props.ticket.Status.id.toString(),
    form.getValues("statusId"),
    typeof props.ticket.Status.id.toString(),
    typeof form.getValues("statusId")
  );

  return (
    <Form {...form}>
      <form
        ref={ref}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <FormField
          control={form.control}
          name="statusId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value.toString()}
                  name="statusId"
                >
                  <SelectTrigger className="w-64">
                    <SelectValue placeholder="Select an status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {/* <SelectLabel>Status</SelectLabel> */}
                      {props.statuses.map((status) => (
                        <SelectItem
                          value={status?.id.toString()}
                          key={status?.id.toString()}
                        >
                          <div className="flex items-center">
                            {/* <Circle className="size-4 shrink-0 mr-2" /> */}
                            {status?.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="priorityId"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Priority</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value.toString()}
                    name="priorityId"
                  >
                    <SelectTrigger className="w-64">
                      <SelectValue placeholder="Select an status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {/* <SelectLabel>Status</SelectLabel>; */}
                        {props.priorities.map((priority) => (
                          <SelectItem
                            value={priority?.id.toString()}
                            key={priority?.id.toString()}
                          >
                            <div className="flex items-center">
                              {/* <Circle className="size-4 shrink-0 mr-2" /> */}
                              {priority?.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name="companyId"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    // defaultValue={field.value.toString()}
                    name="companyId"
                  >
                    <SelectTrigger className="w-64">
                      <SelectValue placeholder="Select an group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {/* <SelectLabel>Status</SelectLabel>; */}
                        {props.groups.map((priority) => (
                          <SelectItem
                            value={priority?.id.toString()}
                            key={priority?.id.toString()}
                          >
                            <div className="flex items-center">
                              {/* <Circle className="size-4 shrink-0 mr-2" /> */}
                              {priority?.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name="groupId"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Group</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    // defaultValue={field.value.toString()}
                    name="groupId"
                  >
                    <SelectTrigger className="w-64">
                      <SelectValue placeholder="Select an group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {/* <SelectLabel>Status</SelectLabel>; */}
                        {props.groups.map((priority) => (
                          <SelectItem
                            value={priority?.id.toString()}
                            key={priority?.id.toString()}
                          >
                            <div className="flex items-center">
                              {/* <Circle className="size-4 shrink-0 mr-2" /> */}
                              {priority?.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Group</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    // defaultValue={field.value.toString()}
                    name="groupId"
                  >
                    <SelectTrigger className="w-64">
                      <SelectValue placeholder="Select an group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {/* <SelectLabel>Status</SelectLabel>; */}
                        {props.groups.map((priority) => (
                          <SelectItem
                            value={priority?.id.toString()}
                            key={priority?.id.toString()}
                          >
                            <div className="flex items-center">
                              {/* <Circle className="size-4 shrink-0 mr-2" /> */}
                              {priority?.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="solvers"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Group</FormLabel>
                <FormControl>
                  <MultipleSelect
                    options={[
                      {
                        label: "teste",
                        value: "teste",
                      },
                      {
                        label: "test",
                        value: "test",
                      },
                    ]}
                    title="faz o ele"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <Button
          disabled={isPending || !form.formState.isDirty}
          type="submit"
          className="mt-4 w-full"
          variant="secondary"
        >
          {isPending ? <Loader2 className="animate-spin" /> : "Update ticket"}
        </Button>
      </form>
    </Form>
  );
}
