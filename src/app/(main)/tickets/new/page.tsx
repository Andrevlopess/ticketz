import { SidebarRight } from "@/components/sidebar-right";
import { NewTicketForm } from "@/components/ticket/new-ticket-form/form";
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
import Link from "next/link";

export default function Page() {
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
          <NewTicketForm />
        </div>
      </SidebarInset>
      <SidebarRight />
    </>
  );
}
