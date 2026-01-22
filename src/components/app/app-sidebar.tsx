"use client"

import Link from "next/link"
import {usePathname} from "next/navigation"
import {Rocket} from "lucide-react"

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
} from "@/components/ui/sidebar"

import type {ComponentType} from "react"
import {sidebarData} from "@/config/sidebar"

interface SidebarItem {
    title: string
    url: string
    icon: ComponentType<{ className?: string }>
}

export function AppSidebar() {
    const pathname = usePathname()

    const renderMenuItem = (item: SidebarItem) => {
        const isActive = pathname === item.url
        return (
            <SidebarMenuItem key={item.url}>
                <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={isActive}
                    className={`h-9 transition-colors duration-200 
                    ${isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                        : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                    }`}>
                    <Link href={item.url}>
                        <item.icon/>
                        <span>{item.title}</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        )
    }

    return (
        <Sidebar collapsible="icon" className="border-r bg-sidebar font-sans">
            <SidebarHeader className="h-16 justify-center border-b px-4">
                <div className="flex items-center gap-3">
                    <div
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Rocket size={18}/>
                    </div>
                    <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                        <span className="truncate font-semibold text-sm">Nekodustry</span>
                        <span className="truncate text-xs text-muted-foreground">Hub</span>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent className="p-2">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {sidebarData.navMain.map(renderMenuItem)}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel
                        className="group-data-[collapsible=icon]:hidden px-2 mt-2 text-xs font-medium text-muted-foreground/70">
                        Game Modes
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {sidebarData.navGameModes.map(renderMenuItem)}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel
                        className="group-data-[collapsible=icon]:hidden px-2 text-xs font-medium text-muted-foreground/70">
                        System
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {[...sidebarData.navFramework, ...sidebarData.navEvents].map(renderMenuItem)}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

            </SidebarContent>
        </Sidebar>
    )
}