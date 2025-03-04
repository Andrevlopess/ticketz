import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create some companies
  const company1 = await prisma.company.create({
    data: {
      name: 'Ticket Corp',
      logo: 'https://example.com/logo1.png',
      description: 'Description for Company One',
    },
  });

  const company2 = await prisma.company.create({
    data: {
      name: 'Company Two',
      logo: 'https://example.com/logo2.png',
      description: 'Description for Company Two',
    },
  });

  // Create some users
  const user1 = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      first_name: 'John',
      last_name: 'Doe',
      password: 'password1',
      role: 'USER',
      company: {
        connect: { id: company1.id },
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'user2@example.com',
      first_name: 'Jane',
      last_name: 'Doe',
      password: 'password2',
      role: 'ADMIN',
      company: {
        connect: { id: company2.id },
      },
    },
  });

  // Create some statuses
  const statusOpen = await prisma.status.create({
    data: {
      name: 'Open',
    },
  });

  const statusClosed = await prisma.status.create({
    data: {
      name: 'Closed',
    },
  });

  // Create some priorities
  const priorityHigh = await prisma.priority.create({
    data: {
      name: 'High',
    },
  });

  const priorityLow = await prisma.priority.create({
    data: {
      name: 'Low',
    },
  });

  // Create some groups
  const group1 = await prisma.group.create({
    data: {
      name: 'Support',
    },
  });

  const group2 = await prisma.group.create({
    data: {
      name: 'Development',
    },
  });

  // Create some tickets
  const ticket1 = await prisma.ticket.create({
    data: {
      subject: 'Issue with login',
      content: 'Cannot login to the system',
      statusId: statusOpen.id,
      priorityId: priorityHigh.id,
      companyId: company1.id,
      groupId: group1.id,
      creatorId: user1.id,
    },
  });

  const ticket2 = await prisma.ticket.create({
    data: {
      subject: 'Feature request',
      content: 'Add dark mode',
      statusId: statusClosed.id,
      priorityId: priorityLow.id,
      companyId: company2.id,
      groupId: group2.id,
      creatorId: user2.id,
    },
  });

  // Create some ticket notes
  await prisma.ticketNotes.create({
    data: {
      content: 'Investigating the issue',
      ticketId: ticket1.id,
      creatorId: user1.id,
      noteType: 'PRIVATE',
    },
  });

  await prisma.ticketNotes.create({
    data: {
      content: 'Feature implemented',
      ticketId: ticket2.id,
      creatorId: user2.id,
      noteType: 'PUBLIC',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
