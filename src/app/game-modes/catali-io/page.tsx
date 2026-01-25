import {
  Zap,
  Shield,
  Crosshair,
  Gem,
  Cpu,
  Activity,
  Users,
  Trophy,
  Skull,
  Ghost,
  Hexagon,
  Sparkles,
} from 'lucide-react'
import { AbstractBackground } from '@/components/app/abstract-background'

export default function CataliGameModePage() {
  return (
    // Force dark theme background manually for the "Cyberpunk" vibe
    <div className="relative min-h-screen w-full overflow-x-hidden font-sans selection:bg-fuchsia-500/30">
      {/* Background layer */}
        <AbstractBackground />

      {/* Ambient Glow Effects (Catali Theme: Pink/Cyan) */}
      <div className="pointer-events-none fixed top-20 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-fuchsia-600/20 blur-[120px]" />
      <div className="pointer-events-none fixed right-0 bottom-0 -z-10 h-[600px] w-[600px] rounded-full bg-cyan-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl space-y-32 px-6 py-24 md:py-32">
        {/* HERO HEADER */}
        <header className="animate-in fade-in slide-in-from-bottom-4 mb-24 space-y-8 duration-1000">
          <div className="group relative inline-block">
            {/* System Status Tag */}
            <div className="mb-6 flex items-center gap-3 font-mono text-xs font-bold tracking-[0.2em] text-fuchsia-500 uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-500"></span>
              </span>
              <span>Project_Catali // Version_2.0</span>
            </div>

            {/* Main Title */}
            <h1 className="max-w-4xl bg-gradient-to-br from-white via-zinc-200 to-zinc-600 bg-clip-text text-6xl font-black tracking-tighter text-transparent sm:text-8xl">
              Tactical RPG <br />
              <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text pr-4 font-serif text-transparent italic">
                Warfare.
              </span>
            </h1>

            <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-center">
              <p className="max-w-xl border-l-2 border-fuchsia-500/50 pl-6 text-lg leading-relaxed font-medium text-zinc-400">
                A high-octane PvPvE environment. Level up your unit, unlock
                abilities, and dominate the neural battlefield.
              </p>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <StatBadge label="TICK RATE" value="60 TPS" icon={Activity} />
                <StatBadge label="MAX PLAYERS" value="24 VS 24" icon={Users} />
              </div>
            </div>
          </div>
        </header>

        {/* SECTION 1: CORE MECHANICS (Tech Specs) */}
        <section className="animate-in fade-in slide-in-from-bottom-8 mb-32 delay-200 duration-1000">
          <SectionHeader title="// system_mechanics" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <TechModule
              title="Class Progression"
              subtitle="Dynamic XP & Skill Trees"
              icon={Trophy}
              theme="fuchsia"
              badge="RPG_CORE"
            />
            <TechModule
              title="Economy Layer"
              subtitle="Gold generation & Item Shop"
              icon={Gem}
              theme="amber"
              badge="ECO_SYS"
            />
            <TechModule
              title="Ability Engine"
              subtitle="Custom castable skills (Q/W/E)"
              icon={Zap}
              theme="cyan"
              badge="ABILITY_V2"
            />
          </div>
        </section>

        {/* SECTION 2: CLASSES (The "Meat" of the mode) */}
        <section className="animate-in fade-in slide-in-from-bottom-8 delay-500 duration-1000">
          <SectionHeader title="// deployable_units" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <UnitCard
              name="The Vanguard"
              role="TANK / CROWD CONTROL"
              description="Frontline heavy unit equipped with kinetic shielding and seismic slam generators."
              icon={Shield}
              theme="orange"
            />
            <UnitCard
              name="The Phantom"
              role="ASSASSIN / BURST"
              description="Stealth operative capable of phase-shifting and high-velocity critical strikes."
              icon={Ghost}
              theme="violet"
            />
            <UnitCard
              name="The Marksman"
              role="DPS / RANGE"
              description="Long-range artillery support with precision targeting algorithms and armor piercing."
              icon={Crosshair}
              theme="red"
            />
            <UnitCard
              name="The Architect"
              role="SUPPORT / UTILITY"
              description="Battlefield manipulation specialist. Constructs temporary fortifications and healing nodes."
              icon={Hexagon}
              theme="emerald"
            />
          </div>
        </section>

        {/* FOOTER DECORATION */}
        <div className="mt-32 flex items-center justify-between border-t border-white/10 pt-8 font-mono text-xs text-zinc-600">
          <span>NEKODUSTRY SYSTEMS INC.</span>
          <span>EST. 2026</span>
        </div>
      </div>
    </div>
  )
}

// --- STYLED COMPONENTS ---

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <div className="h-px max-w-[50px] flex-1 bg-gradient-to-r from-fuchsia-500 to-transparent" />
      <h2 className="font-mono text-xs font-bold tracking-widest text-zinc-500 uppercase">
        {title}
      </h2>
      <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent opacity-20" />
    </div>
  )
}

function StatBadge({ label, value, icon: Icon }: any) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 px-4 py-3">
      <Icon size={16} className="text-zinc-500" />
      <div>
        <div className="text-[10px] font-bold tracking-wider text-zinc-500">
          {label}
        </div>
        <div className="font-mono text-sm font-bold text-zinc-200">{value}</div>
      </div>
    </div>
  )
}

// Module for Core Mechanics
function TechModule({ title, subtitle, icon: Icon, theme, badge }: any) {
  // Theme mapping for borders/glows
  const themeStyles: any = {
    fuchsia:
      'group-hover:border-fuchsia-500/50 group-hover:bg-fuchsia-500/5 text-fuchsia-400',
    amber:
      'group-hover:border-amber-500/50 group-hover:bg-amber-500/5 text-amber-400',
    cyan: 'group-hover:border-cyan-500/50 group-hover:bg-cyan-500/5 text-cyan-400',
  }

  const style = themeStyles[theme] || themeStyles.cyan

  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${style}`}
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/40 ring-1 ring-white/10 transition-colors duration-500">
          <Icon
            size={24}
            strokeWidth={1.5}
            className="transition-all group-hover:drop-shadow-[0_0_8px_currentColor]"
          />
        </div>
        <span className="font-mono text-[10px] font-bold tracking-widest text-zinc-600 uppercase opacity-70 group-hover:text-current">
          [{badge}]
        </span>
      </div>
      <div>
        <h3 className="text-lg font-bold text-zinc-200 transition-colors group-hover:text-white">
          {title}
        </h3>
        <p className="mt-1 text-sm font-medium text-zinc-500 transition-colors group-hover:text-zinc-400">
          {subtitle}
        </p>
      </div>
    </div>
  )
}

// Unit Cards (Similar to HoloCard but wider content)
function UnitCard({ name, role, description, icon: Icon, theme }: any) {
  const colors: any = {
    orange:
      'text-orange-400 hover:border-orange-500/50 hover:shadow-[0_0_30px_-10px_rgba(251,146,60,0.3)] bg-gradient-to-br from-orange-500/5 to-transparent',
    violet:
      'text-violet-400 hover:border-violet-500/50 hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)] bg-gradient-to-br from-violet-500/5 to-transparent',
    red: 'text-red-400 hover:border-red-500/50 hover:shadow-[0_0_30px_-10px_rgba(248,113,113,0.3)] bg-gradient-to-br from-red-500/5 to-transparent',
    emerald:
      'text-emerald-400 hover:border-emerald-500/50 hover:shadow-[0_0_30px_-10px_rgba(52,211,153,0.3)] bg-gradient-to-br from-emerald-500/5 to-transparent',
  }
  const themeClass = colors[theme]

  return (
    <div
      className={`group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-white/5 p-8 transition-all duration-500 hover:bg-zinc-900/80 sm:flex-row ${themeClass}`}
    >
      {/* Icon Area */}
      <div className="shrink-0 self-start">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black/40 ring-1 ring-white/10 backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          <Icon
            size={32}
            strokeWidth={1.5}
            className="transition-all duration-500 group-hover:drop-shadow-[0_0_8px_currentColor]"
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col justify-center">
        <div className="mb-2">
          <h3 className="mb-1 text-2xl font-black tracking-tight text-zinc-100 group-hover:text-white">
            {name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 animate-pulse rounded-full bg-current" />
            <span className="text-[10px] font-bold tracking-widest uppercase opacity-80">
              {role}
            </span>
          </div>
        </div>
        <p className="text-sm leading-relaxed font-medium text-zinc-500 transition-colors group-hover:text-zinc-300">
          {description}
        </p>
      </div>

      {/* Holographic noise texture (optional fancy detail) */}
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />

      {/* Corner Sparkle */}
      <div className="absolute top-0 right-0 p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <Sparkles size={14} className="animate-pulse text-white/30" />
      </div>
    </div>
  )
}
