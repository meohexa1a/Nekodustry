"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, Settings, LogOut, Rocket } from "lucide-react"
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
} from "@/components/ui/sidebar"

import { sidebarItems } from "@/config/sidebar"

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r border-sidebar-border bg-sidebar/50 backdrop-blur-xl">
      {/* Header: Logo và Tên dự án */}
      <SidebarHeader className="py-4 px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Rocket size={20} />
          </div>
          <span className="font-bold text-xl tracking-tight">Nekodustry</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-6 text-xs font-semibold uppercase tracking-widest opacity-50">
            Menu Chính
          </SidebarGroupLabel>
          <SidebarGroupContent className="px-3">
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    className={`transition-all duration-200 hover:bg-accent/10 ${
                      pathname === item.href 
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:translate-x-1"
                    }`}
                  >
                    <Link href={item.href}>
                      <item.icon className={`mr-2 h-5 w-5 ${pathname === item.href ? "text-primary" : ""}`} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer: Thông tin User hoặc Settings */}
      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton className="w-full justify-start gap-3 p-2 rounded-xl hover:bg-destructive/10 hover:text-destructive transition-colors">
                    <LogOut size={18} />
                    <span>Đăng xuất</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}