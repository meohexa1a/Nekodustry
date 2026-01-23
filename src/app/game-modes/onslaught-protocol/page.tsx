import { Crosshair, Skull, Activity, Cpu } from "lucide-react";
import { SystemFooter } from "@/components/app/system-footer";

export default function OnslaughtProtocolPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-mono selection:bg-red-600 selection:text-white relative overflow-hidden transition-colors duration-300">
      {/* Glitch Overlay Effect - Subtle in light mode, more prominent in dark */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]"></div>

      <div className="container mx-auto px-4 py-20 relative z-10 flex-1 flex flex-col justify-center">
        <div className="border-l-4 border-red-600 pl-8 mb-12">
          <div className="flex items-center gap-3 text-red-600 dark:text-red-500 mb-2">
            <Activity className="animate-pulse" />
            <span className="tracking-[0.5em] text-sm font-bold uppercase">System Status: Development</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none text-foreground">
            Onslaught
            <br />
            <span className="text-red-600">Protocol</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed border-t border-border pt-8">
              <strong className="text-foreground">High octane PVP warfare.</strong> Relentless combat where only
              the adaptive survive. Analyze. Engagement. Eliminate.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-muted-foreground">
                <Crosshair className="text-red-600 dark:text-red-500" />
                <span>Tactical Team-Based Combat</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <Skull className="text-red-600 dark:text-red-500" />
                <span>Permadeath Hardcore Modes</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <Cpu className="text-red-600 dark:text-red-500" />
                <span>AI-Assisted Chaos Events</span>
              </div>
            </div>

            <button className="mt-8 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest skew-x-[-10deg] transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(220,38,38,0.3)]">
              <span className="skew-x-[10deg] inline-block">Join Waitlist</span>
            </button>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-red-600/10 dark:bg-red-600/20 blur-[100px] rounded-full"></div>
            <div className="relative border border-red-900/20 dark:border-red-900/50 bg-white/50 dark:bg-black/50 backdrop-blur-sm p-8 rounded-lg shadow-xl">
              <div className="flex justify-between items-end mb-8 border-b border-red-900/10 dark:border-red-900/30 pb-4">
                <div>
                  <div className="text-xs text-red-600 dark:text-red-500 tracking-widest mb-1">LIVE FEED</div>
                  <div className="text-2xl font-bold text-foreground">SECTOR 7</div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-black text-red-600">8,492</div>
                  <div className="text-xs text-muted-foreground">CASUALTIES</div>
                </div>
              </div>
              <div className="space-y-2 font-mono text-sm opacity-75 dark:opacity-50 text-foreground">
                <div className="flex justify-between">
                  <span>&gt; PROTOCOL_INIT</span>
                  <span className="text-green-600 dark:text-green-500">COMPLETE</span>
                </div>
                <div className="flex justify-between">
                  <span>&gt; WEAPON_SYSTEMS</span>
                  <span className="text-yellow-600 dark:text-yellow-500">ONLINE</span>
                </div>
                <div className="flex justify-between">
                  <span>&gt; TARGET_ACQUISITION</span>
                  <span className="animate-pulse text-red-600 dark:text-red-500">SEARCHING...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SystemFooter />
    </div>
  );
}
