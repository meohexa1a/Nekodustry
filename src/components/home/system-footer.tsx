import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  label: string;
  value: string;
  className?: string;
  active?: boolean;
}

function StatusIndicator({ label, value, className, active = true }: StatusIndicatorProps) {
  return (
    <div className={cn("flex flex-col gap-1 font-mono text-[10px]", className)}>
      <span className="text-zinc-500 uppercase tracking-wider">{label}</span>
      <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-300">
        {active && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80 animate-pulse" />}
        <span className="tracking-widest">{value}</span>
      </div>
    </div>
  );
}

export function SystemFooter() {
  return (
    <footer className="relative z-10 mx-6 mt-24 border-t border-zinc-200/50 dark:border-zinc-800/50">
      {/* Decorative corner markers */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-400 dark:border-zinc-500 -translate-x-px -translate-y-px" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-400 dark:border-zinc-500 translate-x-px -translate-y-px" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
        {/* Column 1: Identity */}
        <div className="space-y-4">
          <div className="font-mono font-bold text-sm tracking-tighter text-zinc-900 dark:text-zinc-100">NEKODUSTRY_SYS</div>
          <p className="text-xs text-zinc-500 max-w-[200px] leading-relaxed">Infrastructure provisioning and service management layer for the Mindustry Tool ecosystem.</p>
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
          <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">Protocol</div>
          <div className="text-xs text-zinc-600 dark:text-zinc-400 font-mono space-y-2">
            <p>MIT Licensed</p>
            <p>Community Operated</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-center py-6 border-t border-zinc-200/50 dark:border-zinc-800/50 text-[10px] text-zinc-400 font-mono uppercase tracking-widest">
        <span>© 2026 Nekodustry Network</span>
        <span>Sys_Time: {new Date().toISOString().split("T")[0]}</span>
      </div>
    </footer>
  );
}
