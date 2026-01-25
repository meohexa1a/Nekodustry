import { Trophy, Swords, Calendar, Scale } from 'lucide-react'

export default function RankedPage() {
  return (
    <div className="bg-background text-foreground relative flex min-h-screen flex-col overflow-hidden font-sans transition-colors duration-300 selection:bg-cyan-500 selection:text-white">
      <div className="relative flex-1">
        {/* Background noise/texture */}
        <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay brightness-100 contrast-150 dark:opacity-20"></div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="mx-auto max-w-4xl space-y-12 text-center">
            {/* Status Badge */}
            <div className="inline-block animate-bounce">
              <span className="rounded-full bg-cyan-500 px-4 py-1 text-sm font-bold text-white shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                STATUS: IN DEVELOPMENT
              </span>
            </div>

            {/* Main Title */}
            <h1 className="bg-linear-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-7xl font-black tracking-tighter text-transparent drop-shadow-sm md:text-9xl dark:drop-shadow-2xl">
              RANKED
            </h1>

            {/* Subtitle */}
            <p className="text-muted-foreground mx-auto max-w-2xl text-2xl leading-relaxed font-medium md:text-3xl">
              The definitive{' '}
              <span className="font-bold text-cyan-500 dark:text-cyan-400">
                1v1 Competitive
              </span>{' '}
              experience. Pure skill, no RNG, no excuses.
            </p>

            {/* Features Grid */}
            <div className="grid gap-6 pt-12 md:grid-cols-3">
              {[
                {
                  icon: Scale,
                  title: 'True Fairness',
                  desc: 'Deterministic damage models. No random critical hits.',
                },
                {
                  icon: Trophy,
                  title: 'League System',
                  desc: 'Climb from Bronze to Grandmaster with our proven ELO system.',
                },
                {
                  icon: Calendar,
                  title: 'Seasonal Rewards',
                  desc: 'Quarterly resets with exclusive cosmetic trophies.',
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-black/5 bg-white/50 p-8 shadow-sm backdrop-blur-lg transition-transform duration-300 hover:-translate-y-2 dark:border-white/10 dark:bg-white/5 dark:shadow-none"
                >
                  <feature.icon className="mx-auto mb-6 h-12 w-12 text-cyan-500" />
                  <h3 className="text-foreground mb-2 text-xl font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Coming Soon Loader */}
            <div className="pt-20">
              <p className="text-muted-foreground mb-4 text-sm tracking-widest uppercase">
                Preparing Season 1
              </p>
              <div className="flex justify-center gap-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="h-3 w-3 animate-ping rounded-full bg-cyan-500"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
