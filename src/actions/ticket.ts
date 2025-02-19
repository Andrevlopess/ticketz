"use server";
import { formSchema } from "@/components/ticket/new-ticket-form/schema";
import { prisma } from "@/lib/prisma";
import { FormState } from "@/types/form-state";
import { error } from "console";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import "server-only";
import { z } from "zod";

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

    const fields: Record<string, string> = {};

    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }

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

  // revalidatePath("/tickets");
  redirect("/tickets");

  // return {
  //   success: true,
  // };
}

export async function deleteTicket(
  prevState: any,
  payload: FormData
): Promise<FormState> {
  const schema = z.object({
    id: z.string().nonempty(),
  });

  if (!(payload instanceof FormData)) {
    return {
      success: false,
      errors: { error: ["Invalid Form Data"] },
    };
  }

  const formData = Object.fromEntries(payload);
  const parsed = schema.safeParse(formData);

  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;

    const fields: Record<string, string> = {};

    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }

    return {
      success: false,
      fields,
      errors,
    };
  }

  try {
    await prisma.ticket.delete({
      where: {
        id: parseInt(parsed.data?.id),
      },
    });

    revalidatePath("/tickets");

    return {
      success: true,
    };
  } catch (e) {
    return {
      success: false,
      errors: {
        error: [String(e)],
      },
    };
  }
}
