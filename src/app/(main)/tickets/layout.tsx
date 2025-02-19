import AppBreadcrumbs from "@/components/app-breadcrumb";
import { SidebarRight } from "@/components/sidebar-right";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
  id: string;
}
export default async function Page({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <>
      <SidebarInset>
        <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <AppBreadcrumbs />
          </div>
          <div className="px-3 flex gap-2 items-center">
            <Input type="search" placeholder="Search" className="w-full" />
            <Button className="" asChild>
              <Link href={"/tickets/new"}>New Ticket</Link>
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 border-t ">
          {children}
        </div>
      </SidebarInset>
      <SidebarRight />
    </>
  );
}
