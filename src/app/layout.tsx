import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app/app-sidebar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { AbstractBackground } from "@/components/app/abstract-background";
import { SystemFooter } from "@/components/app/system-footer";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nekodustry Portal",
  description: "MintyMDT Game Server Software & Mindustry Tool collaboration, and more",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <div className="flex">
              <AppSidebar />

              <main className="relative flex-1 w-full mx-auto flex flex-col min-h-screen">
                <AbstractBackground />

                <div className="sticky left-0 top-0 w-fit p-2 z-50">
                  <SidebarTrigger />
                </div>

                <div className="flex-1">
                  {children}
                </div>

                <SystemFooter />
              </main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
