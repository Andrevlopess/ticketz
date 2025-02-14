import { AppSidebar } from "@/components/app-sidebar";
import { SidebarRight } from "@/components/sidebar-right";
import TicketsList from "@/components/ticket/ticket-list";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
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
            <Button variant="outline" className="" asChild>
              <Link href={"/tickets/new"}>New Ticket</Link>
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <TicketsList />
          {/* <div className="mx-auto h-24 w-full max-w-5xl rounded-xl bg-muted/50" />
          <div className="mx-auto h-[100vh] w-full max-w-5xl rounded-xl bg-muted/50" /> */}
        </div>
      </SidebarInset>
      <SidebarRight />
    </SidebarProvider>
  );
}
