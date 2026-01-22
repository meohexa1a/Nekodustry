"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Rocket, MoreHorizontal, LogOut, ChevronRight } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Import config của bạn
import { sidebarData } from "@/config/sidebar"

export function AppSidebar() {
  const pathname = usePathname()
  const { state } = useSidebar()

  // Helper để render menu item (tránh lặp code)
  const renderMenuItem = (item: any) => {
    const isActive = pathname === item.url
    return (
      <SidebarMenuItem key={item.url}>
        <SidebarMenuButton
          asChild
          tooltip={item.title}
          isActive={isActive}
          className={`
            h-9 rounded-md transition-all duration-200 group/item
            ${isActive 
              ? "bg-primary text-primary-foreground font-medium shadow-sm" 
              : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            }
          `}
        >
          <Link href={item.url}>
            <item.icon className={`${isActive ? "text-primary-foreground" : "text-muted-foreground group-hover/item:text-foreground"}`} />
            <span>{item.title}</span>
            {/* Hiệu ứng mũi tên nhỏ khi hover (chỉ hiện khi mở sidebar) */}
            {state === "expanded" && !isActive && (
              <ChevronRight className="ml-auto h-4 w-4 opacity-0 transition-opacity group-hover/item:opacity-50" />
            )}
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border bg-sidebar font-sans">
      {/* --- HEADER --- */}
      <SidebarHeader className="h-16 justify-center border-b border-sidebar-border/50 px-4">
        <div className="flex items-center gap-3 transition-all group-data-[collapsible=icon]:justify-center">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/20">
            <Rocket size={18} />
          </div>
          <div className="flex flex-col overflow-hidden group-data-[collapsible=icon]:hidden">
            <span className="truncate font-bold text-lg leading-none">Nekodustry</span>
            <span className="truncate text-xs text-muted-foreground font-medium mt-0.5">Hub</span>
          </div>
        </div>
      </SidebarHeader>

      {/* --- CONTENT --- */}
      <SidebarContent className="gap-0 py-2">
        
        {/* GROUP 1: MAIN (Tổng quan & Info) */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarData.navMain.map(renderMenuItem)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* GROUP 2: GAMEMODES (Phần quan trọng nhất nên làm nổi bật) */}
        <SidebarGroup>
          <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden px-4 py-2 text-xs font-semibold text-primary/80 uppercase tracking-wider">
            Chế độ chơi
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarData.navGamemodes.map(renderMenuItem)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="mx-4 my-2 opacity-50" />

        {/* GROUP 3: RESOURCES (Gộp Framework & Events vào nhóm Development) */}
        <SidebarGroup>
          <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden px-4 text-xs font-medium text-muted-foreground/60">
            Hệ thống & Sự kiện
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Kết hợp 2 mảng nhỏ Framework và Events để tiết kiệm không gian */}
              {[...sidebarData.navFramework, ...sidebarData.navEvents].map(renderMenuItem)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>

      {/* --- FOOTER --- */}
      <SidebarFooter className="border-t border-sidebar-border/50 p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:bg-sidebar-accent/50 rounded-lg"
                >
                  <Avatar className="h-8 w-8 rounded-lg border bg-background">
                    <AvatarImage src="/neko-avatar.png" />
                    <AvatarFallback>NK</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                    <span className="truncate font-semibold">Neko Admin</span>
                    <span className="truncate text-xs text-muted-foreground">dev@nekodustry.com</span>
                  </div>
                  <MoreHorizontal className="ml-auto size-4 group-data-[collapsible=icon]:hidden" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuItem className="text-red-500 focus:text-red-500">
                  <LogOut className="mr-2 h-4 w-4" />
                  Đăng xuất
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}