"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import "server-only";
import { formSchema } from "../schema";

type FormState = {
  success: boolean;
  fields?: Record<string, string | string[]>;
  errors?: Record<string, string[]>;
};

export async function newTaskAction(
  prevState: FormState,
  payload: FormData
): Promise<FormState> {
  if (!(payload instanceof FormData)) {
    return {
      success: false,
      errors: { error: ["Invalid Form Data"] },
    };
  }

  const formData = Object.fromEntries(payload);
  const parsed = formSchema.safeParse(formData);

  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    console.log("🚀 ~ errors:", errors);

    const fields: Record<string, string> = {};

    console.log("🚀 ~ fields:", fields);
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    console.log("error returned data", formData);
    console.log("error returned error", errors);

    return {
      success: false,
      fields,
      errors,
    };
  }
  console.log(parsed);

  await prisma.ticket.create({
    data: {
      // subject: formData.get("subject") as string,
      subject: parsed.data.subject,
      content: parsed.data.content,
      priorityId: 1,
      companyId: 1,
      creatorId: 7,
      statusId: 1,
      groupId: 1,
    },
  });

  revalidatePath("/tickets");
  redirect("/tickets");

  // return {
  //   success: true,
  // };
}
// import { formSchema } from "./schema";

// export type FormState = {
//   success: boolean;
//   fields?: Record<string, string>;
//   errors?: Record<string, string[]>;
// };

// export async function onSubmitAction(
//   previousState: FormState,
//   payload: FormData
// ): Promise<FormState> {
//   const formData = Object.fromEntries(payload);
//   const parsed = formSchema.safeParse(formData);

//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   console.log(formData);
//   if (!(payload instanceof FormData)) {
//     return {
//       success: false,
//       errors: { error: ["Invalid Form Data"] },
//     };
//   }

//   if (!parsed.success) {
//     const fields: Record<string, string> = {};
//     for (const key of Object.keys(formData)) {
//       fields[key] = formData[key].toString();
//     }
//     return {
//       success: false,
//       fields,
//       issues: parsed.error.issues.map((issue) => issue.message),
//     };
//   }

//   return {
//     success: true,
//     // message: 'Ticket created successfully!'
//   };

//   // if (!parsed.success) {
//   //   const fields: Record<string, string> = {};
//   //   for (const key of Object.keys(formData)) {
//   //     fields[key] = formData[key].toString();
//   //   }
//   //   return {
//   //     message: "Invalid form data",
//   //     fields,
//   //     issues: parsed.error.issues.map((issue) => issue.message),
//   //   };
//   // }

//   // await prisma.ticket.create({
//   //   data: {
//   //       subject: formData.get('subject') as string ,
//   //   //   subject: formData.subject,
//   //   //   content: formData.content,
//   //   //   priority: formData.priority,
//   //   //   tags: formData.tags,
//   //   //   group: formData.group,
//   //   //   solver: formData.solver,
//   //   },
//   // })
// }
