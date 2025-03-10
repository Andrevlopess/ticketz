"use server";
import { prisma } from "@/lib/prisma";
import {
  NewTicketFormSchema,
  TicketPreviewDetails,
  TicketProperties,
  TicketPropertiesSchema,
} from "@/schemas/ticket";
import { FormState } from "@/types/form-state";
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
  const parsed = NewTicketFormSchema.safeParse(formData);

  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;

    const fields: Record<string, string> = {};

    // for (const key of Object.keys(formData)) {
    //   fields[key] = formData[key]?.toString();
    // }

    return {
      success: false,
      fields,
      errors,
    };
  }

  await prisma.ticket.create({
    data: {
      subject: parsed.data.subject,
      content: parsed.data.content,
      priorityId: 1,
      organizationId: 1,
      createdById: 7,
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
  prevState: FormState,
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

    // for (const key of Object.keys(formData)) {
    //   fields[key] = formData[key].toString();
    // }

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

export async function updateTicketProperties(
  ticket: TicketPreviewDetails,
  prevState: FormState,
  payload: TicketProperties
): Promise<FormState> {
  try {
    // if (!(payload instanceof FormData)) {
    //   return {
    //     success: false,
    //     errors: { error: ["Invalid Form Data"] },
    //   };
    // }

    // const formData = Object.fromEntries(payload);
    const parsed = TicketPropertiesSchema.safeParse(payload);

    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;

      // const fields: Record<string, string> = {};
      // Object.keys(formData).forEach(
      //   (key) => (fields[key] = formData[key]?.toString())
      // );

      return {
        success: false,
        fields: {},
        errors,
      };
    }

    const existingTags = ticket.Tags.map((tag) => tag.name) || [];
    const newTags = parsed.data.tags.map((tag) => tag.name);

    const tagsToDisconnect = existingTags
      .filter((tagName) => !newTags.includes(tagName))
      .map((tagName) => ({ name: tagName }));

    console.log(ticket.Tags, parsed.data.tags, tagsToDisconnect);

    await prisma.ticket.update({
      where: {
        id: ticket.id,
      },
      data: {
        statusId: +parsed.data.statusId,
        priorityId: +parsed.data.priorityId,
        organizationId: +parsed.data.companyId,
        groupId: +parsed.data.groupId,
        // Tags: {
        //   disconnect: tagsToDisconnect,
        //   connectOrCreate: parsed.data.tags.map((tag) => ({
        //     where: { name: tag.name },
        //     create: { name: tag.name },
        //   })),
        // },
      },
    });

    revalidatePath(`tickets/${ticket.id}`);

    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      errors: {
        error: [String(error)],
      },
    };
  }
}
