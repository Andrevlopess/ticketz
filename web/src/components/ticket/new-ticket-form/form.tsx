"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2, X } from "lucide-react";
import { startTransition, useActionState, useEffect, useRef } from "react";
import { Textarea } from "../../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { newTaskAction } from "@/actions/ticket";
import { NewTicketFormSchema } from "@/schemas/ticket";

export function NewTicketForm() {
  const { toast } = useToast();

  const [formState, formAction, isPending] = useActionState(newTaskAction, {
    success: false,
  });

  const form = useForm<z.output<typeof NewTicketFormSchema>>({
    resolver: zodResolver(NewTicketFormSchema),
    defaultValues: {
      subject: "",
      content: "",
      priority: "3",
      tags: ["Documentation"],
      group: "1",
      solver: "10",
      // ...(formState?.fields ?? {}),
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  // if (formState.success) {
  //   toast({
  //     title: "Ticket created successfully!",
  //     description: "Your ticket has been created successfully.",
  //     // status: "success",
  //   });
  // }

  useEffect(() => {
    if (formState.success) {
      toast({
        title: "Ticket created successfully!",
        description: "Your ticket has been created successfully.",
        // status: "success",
      });

      formRef.current?.reset();
    }
  }, [formState.success]);

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        onSubmit={(evt) => {
          evt.preventDefault();
          form.handleSubmit(() => {
            startTransition(() => formAction(new FormData(formRef.current!)));
          })(evt);
        }}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Enter your subject" {...field} />
              </FormControl>
              <FormMessage>{formState.errors?.subject}</FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your content" {...field} />
              </FormControl>
              <FormMessage>{formState.errors?.content}</FormMessage>
            </FormItem>
          )}
        />
        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Priority</FormLabel>
                <Select {...field}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a priority" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">Low</SelectItem>
                    <SelectItem value="2">Medium</SelectItem>
                    <SelectItem value="3">High</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage>{formState.errors?.priority}</FormMessage>
              </FormItem>
              // <FormItem>
              //   <FormLabel>Priority</FormLabel>

              //   <FormControl>
              //     <Textarea placeholder="Enter your content" {...field} />
              //   </FormControl>

              //   <FormMessage>{formState.errors?.priority}</FormMessage>
              // </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="group"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Group</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your subject" {...field} />
                </FormControl>
                <FormMessage>{formState.errors?.group}</FormMessage>
              </FormItem>
            )}
          /> */}
          {/* <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Group</FormLabel>
                <FormControl>
                  <TagsSelector />
                </FormControl>
                <FormMessage>{formState.errors?.group}</FormMessage>
              </FormItem>
            )}
          /> */}
        </div>

        {formState.errors?.error && (
          <Alert variant="destructive">
            <X className="h-4 w-4" />
            <AlertTitle>An error occured!</AlertTitle>
            <AlertDescription>{formState.errors?.error}</AlertDescription>
          </Alert>
        )}

        <Button disabled={isPending} type="submit" className="">
          {isPending ? <Loader2 className="animate-spin" /> : "Create ticket"}
        </Button>
      </form>
    </Form>
  );
}
