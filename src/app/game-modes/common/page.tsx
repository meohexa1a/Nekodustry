import {
  ArrowRight,
  ArrowUpRight,
  Terminal,
  Cpu,
  MessageSquare,
  Target,
  Sword,
  Swords,
  Box,
} from 'lucide-react'
import { AbstractBackground } from '@/components/app/abstract-background'

export default function CommonGameModePage() {
  return (
    <div className="bg-background text-foreground relative min-h-screen w-full font-sans">
      <AbstractBackground />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 md:py-32">
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
            <FeatureNode
              title="Command Interface"
              subtitle="GUI-based interaction layer. No chat commands required."
              icon={Terminal}
              code="SYS_UI_V2"
            />
            <FeatureNode
              title="Smart Idle State"
              subtitle="Dynamic resource conservation via micro-map swapping."
              icon={Cpu}
              code="MEM_OPT_01"
            />
            <FeatureNode
              title="Terminal RPG"
              subtitle="Text-based entertainment subsystem integrated in-menu."
              icon={MessageSquare}
              code="GAME_IN_GAME"
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
            <ModeLog
              name="Survival Protocol"
              difficulty="MEDIUM"
              action="Defensive Operations."
              detail="Standard wave defense. Build intricate supply chains to withstand progressively hostile entities."
              icon={Target}
            />
            <ModeLog
              name="Attack Simulation"
              difficulty="HARD"
              action="Offensive Strategy."
              detail="Unit production focus. Breach enemy containment zones and neutralize their core infrastructure."
              icon={Sword}
            />
            <ModeLog
              name="PvP Ranked"
              difficulty="EXTREME"
              action="Competitive Determinism."
              detail="1v1 or Team vs Team. Symmetrical resource allocation. Pure skill-based outcome."
              icon={Swords}
            />
            <ModeLog
              name="Sandbox"
              difficulty="CREATIVE"
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

// --- SUB COMPONENTS ---

// Style giống NodeLink trong ví dụ 1
function FeatureNode({ title, subtitle, icon: Icon, code }: any) {
  return (
    <div className="group border-border relative flex w-full cursor-pointer items-center justify-between border-b py-8 transition-all duration-300 hover:pl-4">
      <div className="flex items-center gap-6">
        <div className="bg-secondary text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground flex h-12 w-12 items-center justify-center rounded-full transition-colors">
          <Icon size={20} strokeWidth={1.5} />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-foreground font-mono text-lg">{title}</h3>
            <span className="bg-secondary text-muted-foreground group-hover:text-primary rounded px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase transition-colors">
              {code}
            </span>
          </div>
          <p className="text-muted-foreground mt-1 text-sm font-light">
            {subtitle}
          </p>
        </div>
      </div>
      <ArrowRight
        className="text-muted-foreground group-hover:text-foreground transition-transform duration-300 group-hover:-translate-x-2"
        strokeWidth={1.5}
      />
    </div>
  )
}

// Style giống ProjectLog trong ví dụ 2
function ModeLog({ name, difficulty, action, detail, icon: Icon }: any) {
  return (
    <div className="group border-border/40 bg-background/40 hover:border-primary/50 hover:bg-secondary/50 relative block w-full rounded-lg border p-6 transition-all duration-300">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
        {/* Icon Line Visual */}
        <div className="hidden flex-col items-center gap-2 sm:flex">
          <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-full">
            <Icon size={16} />
          </div>
          <div className="bg-border/50 group-hover:bg-primary/20 h-full w-px transition-colors" />
        </div>

        <div className="flex-1 space-y-2">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h3 className="text-foreground text-lg font-medium tracking-tight">
                {name}
              </h3>
              <span className="text-muted-foreground/60 font-mono text-xs font-light tracking-wider uppercase">
                — {difficulty}
              </span>
            </div>
            <ArrowUpRight
              className="text-muted-foreground/30 group-hover:text-primary transition-colors"
              size={18}
            />
          </div>

          {/* Core Action */}
          <p className="text-foreground font-mono text-sm font-medium">
            {action}
          </p>

          {/* Detail */}
          <p className="text-muted-foreground line-clamp-2 text-xs leading-relaxed">
            {detail}
          </p>
        </div>
      </div>
    </div>
  )
}
