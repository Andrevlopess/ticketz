"use client";

import { updateTicketProperties } from "@/actions/ticket";
import { toast } from "@/hooks/use-toast";
import {
  Company,
  Group,
  Priority,
  Status,
  Tag,
  TicketPreviewDetails,
  TicketProperties,
  TicketPropertiesSchema,
} from "@/schemas/ticket";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, X } from "lucide-react";
import { startTransition, useActionState, useEffect, useRef } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { FormState } from "../../types/form-state";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { ConnectOrCreateOption } from "@/schemas/ticket";

import TagsSelector from "../ui/tags-selector";

const initialState: FormState = {
  success: false,
};

interface TicketPropertiesFormProps {
  ticket: TicketPreviewDetails;
  statuses: Status[];
  priorities: Priority[];
  groups: Group[];
  tags: Tag[];
  companies: Company[]
}
export default function TicketStatusForm(props: TicketPropertiesFormProps) {

  const defaultValues = {
    statusId: props.ticket.Status.id.toString(),
    groupId: props.ticket.Group.id.toString(),
    priorityId: props.ticket.Priority.id.toString(),
    companyId: props.ticket.Company.id.toString(),
    // solvers: props.ticket.Solvers,
    tags: props.ticket.Tags
  };

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
    resolver: zodResolver(TicketPropertiesSchema), defaultValues
  });


  const tagsForm = useFieldArray({ control: form.control, name: "tags" })



  const onSubmit = (data: TicketProperties) => {
    console.log(data);

    // return

    // console.log(Object.fromEntries(data));
    startTransition(() => formAction(data))
    // startTransition(() => formAction(new FormData(ref.current!)));




  };

  const handleAddTag = (data: ConnectOrCreateOption) => {
    if (tagsForm.fields.some(tag => tag.name === data.name)) {
      toast({
        title: `The "${data.name}" tag is already included in this ticket!`,
        description: "Try adding another tag!",
        variant: 'destructive'
      })
      return
    };

    tagsForm.append(data)
  }




  useEffect(() => {

    if (formState.success) {
      toast({
        title: "Ticket updated successfully!",
        description: "Your ticket has been updated successfully.",
        // status: "success",
      });
    }
  }, [formState.success]);

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
                    defaultValue={field.value}
                    name="companyId"
                  >
                    <SelectTrigger className="w-64">
                      <SelectValue placeholder="Select an group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {/* <SelectLabel>Status</SelectLabel>; */}
                        {props.companies.map((priority) => (
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
                    defaultValue={field.value}
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

        <div className="w-64">
          <FormLabel>
            Tags
          </FormLabel>
          <FormDescription>
            Add tags to your ticket to increase the search performance
          </FormDescription>

          <div className="flex flex-wrap gap-2 my-2 ">

            {tagsForm.fields.map((field, index) => {
              return (
                <FormField
                  control={form.control}
                  key={field.id}
                  name={`tags.${index}.name`}
                  render={({ field }) => (
                    <FormItem>

                      <FormControl>
                        {/* todo add a truncated text if the badge exceed the maximum width */}
                        <Badge variant='secondary' className="">

                          {field.value}


                          <Button className="ml-2 size-4 p-2 " variant="ghost" onClick={() => tagsForm.remove(index)}>
                            <X className="size-2 shrink-0" />
                          </Button>

                        </Badge>

                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )
            })}
          </div>

          <TagsSelector ticketId={props.ticket.id} onSelect={handleAddTag} />

        </div>

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
