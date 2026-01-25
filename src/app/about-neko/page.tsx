import type { Metadata } from 'next'
import { AbstractBackground } from '@/components/app/abstract-background'

export const metadata: Metadata = {
  title: 'About Me | Nekodustry Portal',
  description: 'Builder. Maintainer. System Thinker.',
}

export default function AboutNekoPage() {
  return (
    <main className="selection:bg-primary/20 selection:text-primary relative min-h-screen w-full overflow-hidden bg-transparent font-mono">
      {/* Reusing Home Page Background for consistency and depth */}
      <AbstractBackground />

      <div className="relative z-10 mx-auto max-w-4xl space-y-32 px-6 py-24 md:py-32">
        {/* Header / Identity */}
        <header className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both space-y-8 duration-1000">
          <span className="text-muted-foreground inline-block text-xs font-semibold tracking-widest uppercase opacity-50">
            // about_me
          </span>
          <div className="space-y-4 text-3xl leading-tight font-light tracking-tight md:text-5xl">
            <h1 className="text-foreground">
              Hi, I'm{' '}
              <span className="text-primary font-medium">meohexa1a</span>.
            </h1>
            <p className="text-muted-foreground/80 text-2xl md:text-4xl">
              I am a builder and system maintainer.
            </p>
          </div>
        </header>

        {/* Section: Identity */}
        <section className="animate-in fade-in slide-in-from-bottom-8 fill-mode-both grid grid-cols-1 gap-12 text-sm leading-relaxed delay-200 duration-1000 md:grid-cols-2">
          <div className="border-primary/20 h-full space-y-4 border-l-2 pl-6">
            <span className="text-primary text-xxs tracking-widest-2xl mb-4 block font-bold uppercase">
              Identity Protocol
            </span>
            <p className="text-foreground text-lg font-medium">
              Builder / Maintainer / System Thinker
            </p>
            <p className="text-muted-foreground">
              I am not a representative. I prefer infrastructure over the
              spotlight.
            </p>
          </div>
          <div className="border-primary/20 h-full space-y-4 border-l-2 pl-6">
            <span className="text-primary text-xxs tracking-widest-2xl mb-4 block font-bold uppercase">
              Core Focus
            </span>
            <ul className="text-muted-foreground space-y-2">
              <li>Sustainable systems.</li>
              <li>Replaceability.</li>
              <li>Minimal individual dependency.</li>
            </ul>
          </div>
        </section>

        {/* Section: Approach */}
        <section className="animate-in fade-in slide-in-from-bottom-8 fill-mode-both space-y-12 delay-300 duration-1000">
          <div className="flex items-center gap-4">
            <div className="bg-border h-px max-w-[50px] flex-1" />
            <h2 className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
              // how_i_think
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="group space-y-4">
              <h3 className="text-foreground group-hover:text-primary text-base font-medium transition-colors duration-300">
                Abstraction over implementation
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                I view every project as a system problem. Prioritizing service
                layer over features, abstraction over premature optimization.
              </p>
            </div>

            <div className="group space-y-4">
              <h3 className="text-foreground group-hover:text-primary text-base font-medium transition-colors duration-300">
                Service over authority
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Systems should serve, not rule. If infrastructure attracts too
                much attention, it fails to be invisible.
              </p>
            </div>

            <div className="group space-y-4">
              <h3 className="text-foreground group-hover:text-primary text-base font-medium transition-colors duration-300">
                Design for replacement
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Everything I build is designed to be replaceable — including
                myself.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Relationships */}
        <section className="animate-in fade-in slide-in-from-bottom-8 fill-mode-both space-y-12 delay-500 duration-1000">
          <div className="flex items-center gap-4">
            <div className="bg-border h-px max-w-[50px] flex-1" />
            <h2 className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
              // ecosystem_context
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative rounded-lg border border-zinc-200/50 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 dark:border-zinc-800/50 dark:hover:bg-zinc-800/20">
              <span className="text-xxs text-muted-foreground/50 absolute top-4 right-4 tracking-widest uppercase">
                Service
              </span>
              <h3 className="mb-3 text-xl font-medium">Nekodustry</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Provides infrastructure, framework, and operations. Does not
                define community meaning.
              </p>
            </div>

            <div className="relative rounded-lg border border-zinc-200/50 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 dark:border-zinc-800/50 dark:hover:bg-zinc-800/20">
              <span className="text-xxs text-muted-foreground/50 absolute top-4 right-4 tracking-widest uppercase">
                Community
              </span>
              <h3 className="mb-3 text-xl font-medium">Mindustry Tool</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Where culture, voice, and representation are formed.
              </p>
            </div>

            <div className="relative rounded-lg border border-zinc-200/50 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 dark:border-zinc-800/50 dark:hover:bg-zinc-800/20">
              <span className="text-xxs text-muted-foreground/50 absolute top-4 right-4 tracking-widest uppercase">
                Operator
              </span>
              <h3 className="mb-3 text-xl font-medium">Me</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Operating Nekodustry. Speaking for myself, not the community.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Anti-goals */}
        <section className="animate-in fade-in slide-in-from-bottom-8 fill-mode-both space-y-8 delay-700 duration-1000">
          <div className="flex items-center gap-4">
            <div className="bg-border h-px max-w-[50px] flex-1" />
            <h2 className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
              // null_pointers (avoid)
            </h2>
          </div>
          <ul className="text-muted-foreground grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
            <li className="flex items-center gap-3">
              <span className="bg-destructive/50 h-1.5 w-1.5 rounded-full" />
              No hype-chasing or marketing.
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-destructive/50 h-1.5 w-1.5 rounded-full" />
              Not "official", not a representative.
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-destructive/50 h-1.5 w-1.5 rounded-full" />
              No promising long-term roadmaps.
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-destructive/50 h-1.5 w-1.5 rounded-full" />
              No personal branding.
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
