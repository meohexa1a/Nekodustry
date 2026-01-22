import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app/app-sidebar";
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
  title: "Nekodustry",
  description: "MintyMDT Game Server Software & Mindustry Tool collaboration, and more",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider>
          <div className="flex min-w-screen min-h-screen">
            <AppSidebar />

            <main className="relative flex-1">
              <div className="absolute top-5 right-5">
                <SidebarTrigger />
              </div>

              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
