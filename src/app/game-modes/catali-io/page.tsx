import { HandMetal, Trophy, Users, Zap, Sword } from 'lucide-react'

export default function CataliIoPage() {
  return (
    <div className="bg-background text-foreground relative flex min-h-screen flex-col overflow-hidden font-sans transition-colors duration-300 selection:bg-pink-500 selection:text-white">
      <div className="relative flex-1">
        {/* Background noise/texture that works in both modes - slightly different opacity */}
        <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay brightness-100 contrast-150 dark:opacity-20"></div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="mx-auto max-w-4xl space-y-12 text-center">
            <div className="inline-block animate-bounce">
              <span className="rounded-full bg-pink-500 px-4 py-1 text-sm font-bold text-white shadow-[0_0_20px_rgba(236,72,153,0.5)]">
                MAINTENANCE: PREPARING ARENA
              </span>
            </div>

            <h1 className="bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-7xl font-black tracking-tighter text-transparent drop-shadow-sm md:text-9xl dark:drop-shadow-2xl">
              catali.io
            </h1>

            <p className="text-muted-foreground mx-auto max-w-2xl text-2xl leading-relaxed font-medium md:text-3xl">
              The next generation{' '}
              <span className="font-bold text-pink-500 dark:text-pink-400">
                RPG IO
              </span>{' '}
              experience. Level up, evolve, and dominate the arena.
            </p>

            <div className="grid gap-6 pt-12 md:grid-cols-3">
              {[
                {
                  icon: Sword,
                  title: 'Epic RPG Battles',
                  desc: 'Customize your build with infinite combinations.',
                },
                {
                  icon: Zap,
                  title: 'Fast-Paced IO',
                  desc: 'Jump in instantly. No accounts, pure action.',
                },
                {
                  icon: Trophy,
                  title: 'Global Leaderboards',
                  desc: 'Climb the ranks and become a legend.',
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-black/5 bg-white/50 p-8 shadow-sm backdrop-blur-lg transition-transform duration-300 hover:-translate-y-2 dark:border-white/10 dark:bg-white/5 dark:shadow-none"
                >
                  <feature.icon className="mx-auto mb-6 h-12 w-12 text-pink-500" />
                  <h3 className="text-foreground mb-2 text-xl font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-20">
              <p className="text-muted-foreground mb-4 text-sm tracking-widest uppercase">
                Coming Soon
              </p>
              <div className="flex justify-center gap-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="h-3 w-3 animate-ping rounded-full bg-pink-500"
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
