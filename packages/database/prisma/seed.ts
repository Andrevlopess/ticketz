import {
  categories,
  groups,
  organizations,
  priorities,
  profiles,
  statuses,
  tags,
  tickets,
  users,
} from "../data";
import { PrismaClient } from "../generated/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.organization.createMany({
    data: organizations,
  });

  await prisma.status.createMany({
    data: statuses,
  });

  await prisma.group.createMany({
    data: groups,
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.priority.createMany({
    data: priorities,
  });

  await prisma.tag.createMany({
    data: tags,
  });

  await prisma.user.createMany({
    data: users,
  });

  await prisma.profile.createMany({
    data: profiles,
  });

  await prisma.ticket.createMany({
    data: tickets,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
