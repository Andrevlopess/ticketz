"use server";

import { prisma } from "@/lib/prisma";
import { formSchema } from "./schema";

export type FormState = {
    message: string;
    fields?: Record<string, string>;
    issues?: string[];
  };

export async function onSubmitAction(data: FormData) {
  const formData = Object.fromEntries(data);
  const parsed = formSchema.safeParse(formData);

  console.log(formData);
  

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }


  // await prisma.ticket.create({
  //   data: {
  //       subject: formData.get('subject') as string ,
  //   //   subject: formData.subject,
  //   //   content: formData.content,
  //   //   priority: formData.priority,
  //   //   tags: formData.tags,
  //   //   group: formData.group,
  //   //   solver: formData.solver,
  //   },
  // })


}
