import { ticketsColumns } from "@/components/ticket/data-table/columns";
import { TicketsDataTable } from "@/components/ticket/data-table/data-table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { prisma } from "@/lib/prisma";
import { unstable_cache } from "next/cache";

// export const revalidate = 15;

// const getTickets = unstable_cache(
//   async () => {
//     return await prisma.ticket.findMany({
//       take: 4,
//       orderBy: {
//         createdAt: "desc",
//       },
//       select: {
//         id: true,
//         subject: true,
//         content: true,
//         CreatedBy: {
//           select: {
//             id: true,
//             Profile: true,
//             email: true,
//           },
//         },
//         Organization: {
//           select: {
//             name: true,
//             id: true,
//           },
//         },
//         Priority: {
//           select: {
//             name: true,
//             id: true,
//           },
//         },
//         Group: {
//           select: {
//             name: true,
//             id: true,
//           },
//         },
//         Status: {
//           select: {
//             name: true,
//             id: true,
//           },
//         },
//         Tags: {
//           select: {
//             Tag: {
//               select: {
//                 id: true,
//                 name: true
//               }
//             }
//           },
//         },
//         Assignees: {
//           select: {
//             Assignee: {
//               select: {
//                  id:true,
//                  email: true,
//                  Profile: true
//               }
//             }
//           },
//         },
//         createdAt: true,
//       },
//     });
//   },
//   ["tickets"],
//   { revalidate: 60 * 60, tags: ["tickets"] }
// );

export default async function Page() {


  // const tickets = await getTickets();


  return (
    <>
    <p>tickets page</p>
      {/* <TicketsDataTable data={tickets} columns={ticketsColumns} /> */}
    </>
  );
}
