import {
  Swords,
  Box,
  Terminal,
  Cpu,
  MessageSquare,
  Target,
  Sword,
  Sparkles,
  Zap,
} from 'lucide-react'
import { AbstractBackground } from '@/components/app/abstract-background'
import { cn } from '@/lib/utils' // Giả sử bạn có utility này, nếu không thì dùng template string thường

export default function CommonGameModePage() {
  return (
    <div className="text-foreground relative min-h-screen w-full overflow-x-hidden font-sans selection:bg-cyan-500/30">
      <AbstractBackground />

      {/* Ambient Glow Effects */}
      <div className="pointer-events-none fixed top-0 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/20 opacity-50 blur-[120px]" />
      <div className="pointer-events-none fixed right-0 bottom-0 -z-10 h-[600px] w-[600px] rounded-full bg-violet-500/10 opacity-30 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl space-y-32 px-6 py-24 md:py-32">
        {/* HERO HEADER */}
        <header className="animate-in fade-in slide-in-from-bottom-4 mb-24 space-y-8 duration-1000">
          <div className="group relative inline-block">
            {/* Tagline */}
            <div className="mb-6 flex items-center gap-3 font-mono text-xs font-bold tracking-widest-2xl text-cyan-500 uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
              </span>
              <span>Nekodustry // System_Override</span>
            </div>

            {/* Main Title with Gradient */}
            <h1 className="max-w-4xl bg-linear-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text pb-2 text-6xl font-black tracking-tight text-transparent sm:text-8xl">
              Core Operation <br />
              <span className="bg-linear-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text font-serif text-transparent italic">
                Modules.
              </span>
            </h1>

            <p className="mt-8 max-w-xl border-l-2 border-zinc-800 pl-6 text-lg leading-relaxed font-medium text-zinc-400">
              Standard gameplay environments integrated with{' '}
              <span className="text-cyan-400">enhanced UX protocols</span>.
              Optimized for high-performance combat.
            </p>
          </div>
        </header>

        {/* SECTION 1: SERVER FEATURES (QoL) */}
        <section className="animate-in fade-in slide-in-from-bottom-8 mb-32 delay-200 duration-1000">
          <SectionHeader title="// system_enhancements" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <SystemModule
              title="Command Interface"
              subtitle="GUI Interaction Layer"
              icon={Terminal}
              color="text-emerald-400"
              borderColor="group-hover:border-emerald-500/50"
              bgHover="group-hover:bg-emerald-500/10"
              badge="SYS_UI_V3"
            />
            <SystemModule
              title="Smart Idle State"
              subtitle="Resource Conservation"
              icon={Cpu}
              color="text-blue-400"
              borderColor="group-hover:border-blue-500/50"
              bgHover="group-hover:bg-blue-500/10"
              badge="MEM_OPT_V3"
            />
            <SystemModule
              title="Menu Mini Game"
              subtitle="Embedded Entertainment"
              icon={MessageSquare}
              color="text-pink-400"
              borderColor="group-hover:border-pink-500/50"
              bgHover="group-hover:bg-pink-500/10"
              badge="GAME_IN_GAME"
            />
          </div>
        </section>

        {/* SECTION 2: GAME MODES */}
        <section className="animate-in fade-in slide-in-from-bottom-8 delay-500 duration-1000">
          <SectionHeader title="// runtime_modes" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <HoloCard
              name="Survival"
              label="MEDIUM"
              description="Standard wave defense. Build intricate supply chains to withstand progressively hostile entities."
              icon={Target}
              theme="amber" // Màu Cam
            />
            <HoloCard
              name="Attack"
              label="HARD"
              description="Offensive Strategy. Breach enemy containment zones and neutralize their core infrastructure."
              icon={Sword}
              theme="rose" // Màu Đỏ
            />
            <HoloCard
              name="PvP"
              label="EXTREME"
              description="Competitive Determinism. 1v1 or Team vs Team. Pure skill-based outcome."
              icon={Swords}
              theme="violet" // Màu Tím
            />
            <HoloCard
              name="Sandbox"
              label="CREATIVE"
              description="Unrestricted Simulation. Infinite resources enabled. Test schematics without pressure."
              icon={Box}
              theme="cyan" // Màu Cyan
            />
          </div>
        </section>
      </div>
    </div>
  )
}

// --- STYLED COMPONENTS ---

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <div className="h-px max-w-[50px] flex-1 bg-linear-to-r from-zinc-800 to-zinc-500" />
      <h2 className="font-mono text-xs font-bold tracking-widest text-zinc-500 uppercase">
        {title}
      </h2>
      <div className="h-px flex-1 bg-linear-to-r from-zinc-800 to-transparent opacity-20" />
    </div>
  )
}

// Thay thế FeatureItem: Style gọn gàng nhưng có màu nhấn (accent)
function SystemModule({
  title,
  subtitle,
  icon: Icon,
  color,
  borderColor,
  bgHover,
  badge,
}: any) {
  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${borderColor} ${bgHover}`}
    >
      <div className="mb-4 flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-colors duration-500 ${color} group-hover:scale-110 group-hover:bg-white/10`}
        >
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <span className="font-mono text-[10px] font-bold tracking-widest text-zinc-600 uppercase group-hover:text-zinc-400">
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

// Thay thế FeatureCard: Style màu mè, hiệu ứng Holo/Neon
function HoloCard({ name, label, description, icon: Icon, theme }: any) {
  // Map màu sắc theo theme
  const colors: Record<string, string> = {
    amber:
      'text-amber-400 hover:border-amber-500/50 hover:shadow-[0_0_30px_-10px_rgba(251,191,36,0.3)] bg-gradient-to-br from-amber-500/5 to-transparent',
    rose: 'text-rose-400 hover:border-rose-500/50 hover:shadow-[0_0_30px_-10px_rgba(244,63,94,0.3)] bg-gradient-to-br from-rose-500/5 to-transparent',
    violet:
      'text-violet-400 hover:border-violet-500/50 hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)] bg-gradient-to-br from-violet-500/5 to-transparent',
    cyan: 'text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)] bg-gradient-to-br from-cyan-500/5 to-transparent',
  }

  const themeClass = colors[theme] || colors.cyan

  return (
    <div
      className={`group relative flex gap-6 overflow-hidden rounded-3xl border border-white/5 p-8 transition-all duration-500 hover:bg-zinc-900/80 ${themeClass}`}
    >
      {/* Icon Area */}
      <div className="shrink-0">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-950/50 ring-1 ring-white/10 backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Icon
            size={32}
            strokeWidth={1.5}
            className="transition-all duration-500 group-hover:drop-shadow-[0_0_8px_currentColor]"
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col justify-center">
        <div className="mb-2 flex items-center gap-3">
          <h3 className="text-2xl font-black tracking-tight text-zinc-100 group-hover:text-white">
            {name}
          </h3>
          <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-bold tracking-widest text-zinc-500 uppercase ring-1 ring-white/10 transition-colors group-hover:bg-white/10 group-hover:text-current">
            {label}
          </span>
        </div>
        <p className="text-sm leading-relaxed font-medium text-zinc-500 transition-colors group-hover:text-zinc-300">
          {description}
        </p>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <Sparkles size={16} className="text-white/20" />
      </div>
    </div>
  )
}
