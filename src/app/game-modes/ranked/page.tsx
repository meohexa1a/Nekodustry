import {
  Trophy,
  Swords,
  Calendar,
  Scale,
  Crown,
  Medal,
  TrendingUp,
} from 'lucide-react'
import { AbstractBackground } from '@/components/app/abstract-background'

export default function RankedPage() {
  return (
    // Dùng tông màu vàng/cam (Amber) làm chủ đạo cho sự vinh quang
    <div className="relative min-h-screen w-full overflow-x-hidden font-sans selection:bg-amber-500/30">
        <AbstractBackground />

      {/* Ambient Glow Effects (Ranked Theme: Gold/Amber) */}
      {/* Hiệu ứng ánh sáng chiếu từ trên xuống (God-ray simulation) */}
      <div className="pointer-events-none fixed top-[-20%] left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-amber-500/20 blur-[150px]" />
      <div className="pointer-events-none fixed bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-yellow-600/10 blur-[120px]" />

      <div className="relative container mx-auto px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl space-y-24 text-center">
          {/* HEADER SECTION */}
          <div className="animate-in fade-in zoom-in-95 space-y-8 duration-1000">
            {/* Status Badge - Gold Style */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
              </span>
              <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
                Season 0: Pre-Alpha
              </span>
            </div>

            {/* Main Title - Metallic Gradient */}
            <div className="relative">
              <h1 className="bg-gradient-to-b from-amber-100 via-amber-300 to-amber-600 bg-clip-text text-7xl leading-none font-black tracking-tighter text-transparent drop-shadow-[0_0_30px_rgba(245,158,11,0.3)] md:text-[10rem]">
                RANKED
              </h1>
              {/* Decorative text behind */}
              <span className="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-[10rem] font-black tracking-tighter text-amber-500/5 blur-sm select-none md:text-[14rem]">
                GLORY
              </span>
            </div>

            {/* Subtitle */}
            <p className="mx-auto max-w-2xl text-xl leading-relaxed font-medium text-zinc-400">
              The definitive{' '}
              <span className="font-bold text-amber-400">1v1 Competitive</span>{' '}
              experience. Pure skill, deterministic mechanics,{' '}
              <br className="hidden md:block" /> and no excuses.
            </p>
          </div>

          {/* FEATURES GRID - Metallic Cards */}
          <div className="animate-in fade-in slide-in-from-bottom-8 grid gap-6 delay-300 duration-1000 md:grid-cols-3">
            <RankedCard
              icon={Scale}
              title="True Fairness"
              desc="Deterministic damage models. No random crits. Your skill is the only variable."
            />
            <RankedCard
              icon={TrendingUp}
              title="ELO System"
              desc="Climb from Bronze to Grandmaster with our proprietary matchmaking algorithm."
            />
            <RankedCard
              icon={Crown}
              title="Seasonal Glory"
              desc="Quarterly resets. Top players receive exclusive cosmetic trophies and badges."
            />
          </div>

          {/* LEAGUE TEASER (Coming Soon) */}
          <div className="animate-in fade-in slide-in-from-bottom-8 pt-12 delay-500 duration-1000">
            <div className="relative mx-auto max-w-sm rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black px-4">
                <span className="text-xs font-bold tracking-[0.3em] text-zinc-500 uppercase">
                  Roadmap
                </span>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="flex gap-3">
                  <div className="h-2 w-2 rounded-full bg-zinc-700" />
                  <div className="h-2 w-2 rounded-full bg-zinc-700" />
                  <div className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />
                  <div className="h-2 w-2 rounded-full bg-zinc-700" />
                  <div className="h-2 w-2 rounded-full bg-zinc-700" />
                </div>
                <p className="font-mono text-sm text-zinc-400">
                  System Calibration in progress...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// --- COMPONENT: Ranked Feature Card ---
function RankedCard({ icon: Icon, title, desc }: any) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 text-left transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/50 hover:bg-amber-500/5">
      {/* Icon with Gold Glow */}
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-amber-500 shadow-[0_0_15px_-3px_rgba(245,158,11,0.2)] transition-all duration-500 group-hover:scale-110 group-hover:border-amber-500/50 group-hover:shadow-[0_0_20px_-3px_rgba(245,158,11,0.4)]">
        <Icon size={28} strokeWidth={1.5} />
      </div>

      <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-amber-100">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-400">
        {desc}
      </p>

      {/* Shine Effect Overlay */}
      <div className="group-hover:animate-shimmer absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000" />
    </div>
  )
}
