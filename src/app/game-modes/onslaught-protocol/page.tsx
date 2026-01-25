import { Crosshair, Skull, Activity, Cpu } from 'lucide-react'

export default function OnslaughtProtocolPage() {
  return (
    <div className="bg-background text-foreground relative flex min-h-screen flex-col font-mono transition-colors duration-300 selection:bg-red-600 selection:text-white">
      {/* Glitch Overlay Effect - Subtle in light mode, more prominent in dark */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-size-[100%_4px] opacity-5 dark:opacity-10"></div>

      <div className="relative container mx-auto flex flex-1 flex-col justify-center px-4 py-20">
        <div className="mb-12 border-l-4 border-red-600 pl-8">
          <div className="mb-2 flex items-center gap-3 text-red-600 dark:text-red-500">
            <Activity className="animate-pulse" />
            <span className="tracking-widest-3xl text-sm font-bold uppercase">
              System Status: Development
            </span>
          </div>
          <h1 className="text-foreground text-6xl leading-none font-black tracking-tighter uppercase italic md:text-8xl">
            Onslaught
            <br />
            <span className="text-red-600">Protocol</span>
          </h1>
        </div>

        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <p className="text-muted-foreground border-border border-t pt-8 text-xl leading-relaxed md:text-2xl">
              <strong className="text-foreground">
                High octane PVP warfare.
              </strong>{' '}
              Relentless combat where only the adaptive survive. Analyze.
              Engagement. Eliminate.
            </p>

            <div className="space-y-4">
              <div className="text-muted-foreground flex items-center gap-4">
                <Crosshair className="text-red-600 dark:text-red-500" />
                <span>Tactical Team-Based Combat</span>
              </div>
              <div className="text-muted-foreground flex items-center gap-4">
                <Skull className="text-red-600 dark:text-red-500" />
                <span>Permadeath Hardcore Modes</span>
              </div>
              <div className="text-muted-foreground flex items-center gap-4">
                <Cpu className="text-red-600 dark:text-red-500" />
                <span>AI-Assisted Chaos Events</span>
              </div>
            </div>

            <button className="mt-8 skew-x-[-10deg] bg-red-600 px-8 py-4 font-bold tracking-widest text-white uppercase shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all hover:scale-105 hover:bg-red-700 active:scale-95">
              <span className="inline-block skew-x-10">Join Waitlist</span>
            </button>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 rounded-full bg-red-600/10 blur-[100px] dark:bg-red-600/20"></div>
            <div className="relative rounded-lg border border-red-900/20 bg-white/50 p-8 shadow-xl backdrop-blur-sm dark:border-red-900/50 dark:bg-black/50">
              <div className="mb-8 flex items-end justify-between border-b border-red-900/10 pb-4 dark:border-red-900/30">
                <div>
                  <div className="mb-1 text-xs tracking-widest text-red-600 dark:text-red-500">
                    LIVE FEED
                  </div>
                  <div className="text-foreground text-2xl font-bold">
                    SECTOR 7
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-black text-red-600">8,492</div>
                  <div className="text-muted-foreground text-xs">
                    CASUALTIES
                  </div>
                </div>
              </div>
              <div className="text-foreground space-y-2 font-mono text-sm opacity-75 dark:opacity-50">
                <div className="flex justify-between">
                  <span>&gt; PROTOCOL_INIT</span>
                  <span className="text-green-600 dark:text-green-500">
                    COMPLETE
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>&gt; WEAPON_SYSTEMS</span>
                  <span className="text-yellow-600 dark:text-yellow-500">
                    ONLINE
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>&gt; TARGET_ACQUISITION</span>
                  <span className="animate-pulse text-red-600 dark:text-red-500">
                    SEARCHING...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
