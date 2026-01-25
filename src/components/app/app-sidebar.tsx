"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Rocket } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Settings } from "lucide-react";

import type { ComponentType } from "react";
import { sidebarData } from "@/config/sidebar";

interface SidebarItem {
  title: string;
  url: string;
  icon: ComponentType<{ className?: string }>;
}

export function AppSidebar() {
  const pathname = usePathname();

  const renderMenuItem = (item: SidebarItem) => {
    const isActive = pathname === item.url;
    return (
      <SidebarMenuItem key={item.url}>
        <SidebarMenuButton
          asChild
          tooltip={item.title}
          isActive={isActive}
          className={`h-9 transition-colors duration-200 
                    ${isActive ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : "text-muted-foreground"}`}>
          <Link href={item.url}>
            <item.icon />
            <span>{item.title}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader className="justify-center">
        <div className="flex items-center gap-2 group-data-[collapsible=icon]:hidden">
          <div className="flex p-1.5 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Rocket size={18} />
          </div>
          <div className="flex flex-col">
            <span className="truncate font-semibold text-sm">Nekodustry</span>
            <span className="truncate text-xs text-muted-foreground">Service Portal</span>
          </div>
        </div>

        <SidebarTrigger className="hidden group-data-[collapsible=icon]:flex" />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>{sidebarData.navMain.map(renderMenuItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground/70">
            Game Modes
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{sidebarData.navGameModes.map(renderMenuItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground/70">System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{sidebarData.navFramework.map(renderMenuItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground/70">Events</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{sidebarData.navEvents.map(renderMenuItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Settings"
              className="transition-colors duration-200 text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
              <Link href="/settings">
                <Settings />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
