"use server";

import { prisma } from "@/lib/prisma";

export async function fetchTags() {
  const tags = await prisma.tag.findMany();
  console.log(tags);
  return tags;
}
