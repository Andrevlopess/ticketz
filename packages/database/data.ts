import { Prisma } from "./generated/client";

const users: Prisma.UserCreateManyInput[] = [
  {
    email: "john.doe@example.com",
    password: "hashed_password_123",
    role: 'MASTER',
  },
  {
    email: "jane.smith@example.com",
    password: "hashed_password_456",
    role: "ADMIN",
  },
  {
    email: "michael.johnson@example.com",
    password: "hashed_password_789",
    role: "USER",
  },
  {
    email: "emily.wilson@example.com",
    password: "hashed_password_101",
    role: "USER",
  },
  {
    email: "robert.brown@example.com",
    password: "hashed_password_202",
    role: "USER",
  },
];


const profiles: Prisma.ProfileCreateManyInput[] = [
  {
    first_name: "John",
    last_name: "Doe",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    phone: "+1-555-1234",
    userId: 1
  },
  {
    first_name: "Jane",
    last_name: "Smith",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
    phone: "+1-555-5678",
    userId: 2, // Corresponds to the second user (Jane)
  },
  {
    first_name: "Michael",
    last_name: "Johnson",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    phone: "+1-555-9101",
    userId: 3, // Corresponds to the third user (Michael)
  },
  {
    first_name: "Emily",
    last_name: "Wilson",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    phone: "+1-555-1122",
    userId: 4, // Corresponds to the fourth user (Emily)
  },
  {
    first_name: "Robert",
    last_name: "Brown",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    phone: "+1-555-2233",
    userId: 5, // Corresponds to the fifth user (Robert)
  }
];



const tickets: Prisma.TicketCreateManyInput[] = [
  {
    subject: "System Crash on Login",
    content:
      "Users are experiencing crashes when attempting to log in. The issue occurs on both web and mobile platforms.",
    organizationId: 1,
    createdById: 1,
    groupId: 2,
    priorityId: 2,
    statusId: 1,
    categoryId: 3,
  },
  {
    subject: "Email Notifications Not Working",
    content:
      "Customers are not receiving email notifications for ticket updates. This affects all email domains.",
    organizationId: 1,
    createdById: 2,
    groupId: 1,
    priorityId: 3,
    statusId: 2,
    categoryId: 4,
  },
  {
    subject: "Feature Request: Dark Mode",
    content:
      "Users have requested a dark mode option for better accessibility and reduced eye strain at night.",
    organizationId: 2,
    createdById: 3,
    groupId: 3,
    priorityId: 4,
    statusId: 1,
    categoryId: 2,
  },
  {
    subject: "Payment Gateway Error",
    content:
      "Several users report payment failures when using credit cards. The issue seems to be related to 3D Secure authentication.",
    organizationId: 2,
    createdById: 4,
    groupId: 2,
    priorityId: 1,
    statusId: 3,
    categoryId: 1,
  },
  {
    subject: "App Freezing on iOS 16",
    content:
      "The mobile app becomes unresponsive after a few minutes of usage on iOS 16 devices.",
    organizationId: 3,
    createdById: 5,
    groupId: 4,
    priorityId: 2,
    statusId: 2,
    categoryId: 5,
  },
];

const organizations: Prisma.OrganizationCreateManyInput[] = [
  {
    name: "Tech Solutions Inc.",
    logo: "https://example.com/logos/techsolutions.png",
    description: "A leading provider of IT solutions and software development.",
  },
  {
    name: "FinTech Innovators",
    logo: "https://example.com/logos/fintech.png",
    description:
      "A financial technology company specializing in digital payments.",
  },
  {
    name: "HealthTech Systems",
    logo: "https://example.com/logos/healthtech.png",
    description: "Developing cutting-edge healthcare software solutions.",
  },
];

const groups: Prisma.GroupCreateManyInput[] = [
  { name: "Support Team" },
  { name: "Development Team" },
  { name: "Product Management" },
  { name: "Sales & Marketing" },
];

const categories: Prisma.CategoryCreateManyInput[] = [
  {
    name: "Bug Report",
    description: "Issues related to software bugs and errors.",
  },
  {
    name: "Feature Request",
    description: "Suggestions for new features and improvements.",
  },
  {
    name: "Payment Issues",
    description: "Problems related to billing and transactions.",
  },
  {
    name: "Account Management",
    description: "Issues related to user accounts and authentication.",
  },
  {
    name: "Performance",
    description: "Concerns regarding system performance and speed.",
  },
];

const statuses: Prisma.StatusCreateManyInput[] = [
  { name: "Open" },
  { name: "In Progress" },
  { name: "Resolved" },
  { name: "Closed" },
  { name: "Reopened" },
];

const priorities: Prisma.PriorityCreateManyInput[] = [
  { name: "Low" },
  { name: "Medium" },
  { name: "High" },
  { name: "Critical" },
];

const tags: Prisma.TagCreateManyInput[] = [
  { name: "Bug" },
  { name: "UI/UX" },
  { name: "Backend" },
  { name: "Database" },
  { name: "Security" },
  { name: "Performance" },
];


export {
  users,
  profiles,
  tickets,
  organizations,
  groups,
  categories,
  statuses,
  priorities,
  tags,
};
