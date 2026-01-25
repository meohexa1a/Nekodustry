import {
  Swords,
  Box,
  Terminal,
  Cpu,
  MessageSquare,
  Target,
  Sword,
} from 'lucide-react'
import { FeatureItem } from '@/components/common/feature-item'
import { FeatureCard } from '@/components/common/feature-card'
import { AbstractBackground } from '@/components/app/abstract-background'

export default function CommonGameModePage() {
  return (
    <div className="relative w-full font-sans">
      <AbstractBackground />

      <div className="relative mx-auto max-w-4xl space-y-32 px-6 py-24 md:py-32">
        {/* HERO HEADER */}
        <header className="animate-in fade-in slide-in-from-bottom-4 mb-24 space-y-8 duration-1000">
          <div className="group relative inline-block">
            <div className="text-muted-foreground mb-6 flex items-center gap-3 font-mono text-xs font-medium tracking-widest uppercase opacity-70">
              <span className="bg-primary/50 h-px w-8" />
              <span>Nekodustry // Server_Instance_01</span>
            </div>

            <h1 className="text-foreground max-w-3xl text-5xl font-light tracking-tight sm:text-7xl">
              Core Operation <br />
              <span className="text-muted-foreground font-serif italic">
                Modules.
              </span>
            </h1>

            <p className="text-muted-foreground mt-8 max-w-xl text-lg leading-relaxed font-light">
              Standard gameplay environments integrated with enhanced UX
              protocols. Optimized for performance and player interaction.
            </p>
          </div>
        </header>

        {/* SECTION 1: SERVER FEATURES (QoL) - Style: NodeLink */}
        <section className="animate-in fade-in slide-in-from-bottom-8 mb-32 delay-200 duration-1000">
          <div className="mb-12 flex items-center gap-4">
            <div className="bg-border h-px max-w-[50px] flex-1" />
            <h2 className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
              // system_enhancements
            </h2>
          </div>

          <div className="border-border border-t">
            <FeatureItem
              title="Command Interface"
              subtitle="GUI-based interaction layer. Reduce maximum chat commands required."
              icon={Terminal}
              badge="SYS_UI_V3"
            />
            <FeatureItem
              title="Smart Idle State"
              subtitle="Dynamic resource conservation via micro-map swapping."
              icon={Cpu}
              badge="MEM_OPT_V3"
            />
            <FeatureItem
              title="Menu Mini Game"
              subtitle="Text-based entertainment subsystem integrated in-menu."
              icon={MessageSquare}
              badge="GAME_IN_GAME"
            />
          </div>
        </section>

        {/* SECTION 2: GAME MODES - Style: ProjectLog */}
        <section className="animate-in fade-in slide-in-from-bottom-8 delay-500 duration-1000">
          <div className="mb-12 flex items-center gap-4">
            <div className="bg-border h-px max-w-[50px] flex-1" />
            <h2 className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
              // runtime_modes
            </h2>
          </div>

          <div className="grid gap-4">
            <FeatureCard
              name="Survival"
              label="MEDIUM"
              action="Defensive Operations."
              detail="Standard wave defense. Build intricate supply chains to withstand progressively hostile entities."
              icon={Target}
            />
            <FeatureCard
              name="Attack"
              label="HARD"
              action="Offensive Strategy."
              detail="Unit production focus. Breach enemy containment zones and neutralize their core infrastructure."
              icon={Sword}
            />
            <FeatureCard
              name="PvP"
              label="EXTREME"
              action="Competitive Determinism."
              detail="1v1 or Team vs Team. Symmetrical resource allocation. Pure skill-based outcome."
              icon={Swords}
            />
            <FeatureCard
              name="Sandbox"
              label="CREATIVE"
              action="Unrestricted Simulation."
              detail="Infinite resources enabled. Test schematics and logic processors without survival pressure."
              icon={Box}
            />
          </div>
        </section>
      </div>
    </div>
  )
}
