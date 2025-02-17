import { SidebarRight } from "@/components/sidebar-right";
import { ticketsColumns } from "@/components/ticket/data-table/columns";
import { TicketsDataTable } from "@/components/ticket/data-table/data-table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Page() {
  const tickets = await prisma.ticket.findMany({
    take: 10,
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      subject: true,
      content: true,
      Creator: {
        select: {
          id: true,
          first_name: true,
          last_name: true,
          email: true,
          photo: true,
        },
      },
      Company: {
        select: {
          name: true,
          id: true,
        },
      },
      Priority: {
        select: {
          name: true,
          id: true,
        },
      },
      Group: {
        select: {
          name: true,
          id: true,
        },
      },
      Status: {
        select: {
          name: true,
          id: true,
        },
      },
      createdAt: true,
    },
  });

  console.log(tickets);

  return (
    <>
      <SidebarInset>
        <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    Tickets
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="px-3 flex gap-2 items-center">
            <Input type="search" placeholder="Search" className="w-full" />
            <Button className="" asChild>
              <Link href={"/tickets/new"}>New Ticket</Link>
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <TicketsDataTable data={tickets} columns={ticketsColumns} />
        </div>
      </SidebarInset>
      <SidebarRight />
    </>
  );
}
