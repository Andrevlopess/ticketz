"use client";

import {
  AudioWaveform,
  Cog,
  Command,
  GalleryVerticalEnd,
  Home,
  Inbox,
  Search,
  Sparkles,
  Ticket,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavHeaderMain } from "./nav-header";
import { NavUser } from "./nav-user";

const navHeader = [
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Ask AI",
    url: "#",
    icon: Sparkles,
  },
  {
    title: "Home",
    url: "#",
    icon: Home,
    // isActive: true,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
    badge: "10",
  },
];
const navMain = [
  {
    id: 1,
    title: "Tickets",
    // icon: Ticket,
    items: [
      {
        title: "All tickets",
        url: "/tickets",
        icon: Ticket,
        isActive: true,
      },
      {
        title: "My tickets",
        icon: Ticket,
        url: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Users",
    // icon: Ticket,
    isActive: true,
    items: [
      {
        title: "All tickets",
        url: "/tickets",
        icon: Ticket,
      },
      {
        title: "My tickets",
        icon: Ticket,
        url: "#",
      },
    ],
  },
];

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://ui.shadcn.com/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavHeaderMain items={navHeader} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuButton asChild>
            <a href="/settings">
              <Cog />
              <span>Settings</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenu>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
