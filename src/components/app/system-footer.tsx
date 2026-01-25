"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(new Date().toISOString().split("T")[0]);
  }, []);

  // Return empty or skeleton during SSR/hydration to match hydration
  // Or just return null on server and content on client (safe for this case)
  if (!time) return <span className="opacity-0">Loading...</span>; // Placeholder to avoid layout shift if possible, or just null

  return <span>Sys_Time: {time}</span>;
}

interface StatusIndicatorProps {
  label: string;
  value: string;
  className?: string;
  active?: boolean;
}

function StatusIndicator({ label, value, className, active = true }: StatusIndicatorProps) {
  return (
    <div className={cn("flex flex-col gap-1 font-mono text-xxs", className)}>
      <span className="text-muted-foreground uppercase tracking-wider">{label}</span>
      <div className="flex items-center gap-2 text-primary">
        {active && <span className="h-1.5 w-1.5 rounded-full bg-status-success/80 animate-pulse" />}
        <span className="tracking-widest">{value}</span>
      </div>
    </div>
  );
}

export function SystemFooter() {
  return (
    <footer className="relative z-10 mx-6 mt-24 border-t border-border/50">
      {/* Decorative corner markers */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-muted-foreground -translate-x-px -translate-y-px" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-muted-foreground translate-x-px -translate-y-px" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
        {/* Column 1: Identity */}
        <div className="space-y-4">
          <div className="font-mono font-bold text-sm tracking-tighter text-foreground">NEKODUSTRY_PORTAL</div>
          <p className="text-xs text-muted-foreground max-w-[200px] leading-relaxed">
            Infrastructure provisioning and service management layer for the Mindustry Tool ecosystem.
          </p>
        </div>

        {/* Column 2: System Status */}
        <div className="space-y-4">
          <StatusIndicator label="Operational Status" value="NOMINAL" />
          <StatusIndicator label="Service Uptime" value="99.98%" />
        </div>

        {/* Column 3: Build Metadata */}
        <div className="space-y-4">
          <StatusIndicator label="System Version" value="v0.1.0-alpha" active={false} />
          <StatusIndicator label="Build Hash" value="8f3a2c9" active={false} />
        </div>

        {/* Column 4: Legal / Protocol */}
        <div className="space-y-4">
          <div className="font-mono text-xxs text-muted-foreground uppercase tracking-wider">Protocol</div>
          <div className="text-xs text-muted-foreground font-mono space-y-2">
            <p>MIT Licensed</p>
            <p>Community Operated</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-center py-6 border-t border-border/50 text-xxs text-muted-foreground font-mono uppercase tracking-widest">
        <span>© 2026 Nekodustry Network</span>
        <Clock />
      </div>
    </footer>
  );
}
