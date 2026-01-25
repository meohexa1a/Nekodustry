import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, GitCommitHorizontal } from 'lucide-react'
import { AbstractBackground } from '@/components/app/abstract-background'

export const metadata: Metadata = {
  title: 'About Me | Nekodustry Portal',
  description: 'Builder. Maintainer. System Thinker.',
}

export default function AboutNekoPage() {
  return (
    <div className="relative w-full font-mono">
      <AbstractBackground />

      <div className="relative mx-auto max-w-4xl space-y-32 px-6 py-24 md:py-32">
        <header className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both space-y-8 duration-1000">
          <div className="space-y-4 text-3xl leading-tight font-light tracking-tight md:text-5xl">
            <h1 className="text-muted-foreground">
              Hi, I'm{' '}
              <span className="text-primary font-medium">meohexa1a</span>.
            </h1>
            <p className="text-muted-foreground text-2xl md:text-4xl">
              I build and operate systems that are meant to outlive their
              builders.
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
              This role exists to design, operate, and eventually step away from
              systems without causing structural collapse.
            </p>
          </div>
          <div className="border-primary/20 h-full space-y-4 border-l-2 pl-6">
            <span className="text-primary text-xxs tracking-widest-2xl mb-4 block font-bold uppercase">
              Core Focus
            </span>
            <ul className="text-muted-foreground space-y-2">
              <li>Sustainable systems over short-term velocity.</li>
              <li>Replaceability as a first-class constraint.</li>
              <li>Minimal dependency on any single individual.</li>
            </ul>
          </div>
        </section>

        {/* Section: Approach */}
        <section className="animate-in fade-in slide-in-from-bottom-8 fill-mode-both space-y-12 delay-300 duration-1000">
          <div className="flex items-center gap-4">
            <div className="bg-border h-px max-w-[50px] flex-1" />
            <h2 className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
              // system_design_principles
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="group space-y-4">
              <h3 className="text-foreground group-hover:text-primary text-base font-medium transition-colors duration-300">
                Abstraction over implementation
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Every project is treated as a system first, a feature set
                second. Service boundaries and abstraction layers are
                prioritized over early optimization.
              </p>
            </div>

            <div className="group space-y-4">
              <h3 className="text-foreground group-hover:text-primary text-base font-medium transition-colors duration-300">
                Service over authority
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Infrastructure exists to serve, not to rule. If a system
                attracts attention to itself, it has failed to remain invisible.
              </p>
            </div>

            <div className="group space-y-4">
              <h3 className="text-foreground group-hover:text-primary text-base font-medium transition-colors duration-300">
                Design for replacement
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                All components are designed with the assumption that they will
                be replaced — including the operator.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Relationships */}
        <section className="animate-in fade-in slide-in-from-bottom-8 fill-mode-both space-y-12 delay-500 duration-1000">
          <div className="flex items-center gap-4">
            <div className="bg-border h-px max-w-[50px] flex-1" />
            <h2 className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
              // runtime_topology
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative rounded-lg border border-zinc-200/50 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 dark:border-zinc-800/50 dark:hover:bg-zinc-800/20">
              <span className="text-muted-foreground/50 absolute top-2 right-2 text-xs tracking-widest uppercase">
                Service
              </span>
              <h3 className="mb-3 text-xl font-medium">Nekodustry</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Provides infrastructure, framework, and operational substrate.
                Does not define culture, identity, or community direction.
              </p>
            </div>

            <div className="relative rounded-lg border border-zinc-200/50 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 dark:border-zinc-800/50 dark:hover:bg-zinc-800/20">
              <span className="text-muted-foreground/50 absolute top-2 right-2 text-xs tracking-widest uppercase">
                Community
              </span>
              <h3 className="mb-3 text-xl font-medium">Mindustry Tool</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Where culture, voice, and representation naturally emerge on top
                of the provided infrastructure.
              </p>
            </div>

            <div className="relative rounded-lg border border-zinc-200/50 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 dark:border-zinc-800/50 dark:hover:bg-zinc-800/20">
              <span className="text-muted-foreground/50 absolute top-2 right-2 text-xs tracking-widest uppercase">
                Operator
              </span>
              <h3 className="mb-3 text-xl font-medium">Me</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Operates and maintains the system. Speaks only for personal
                decisions, never on behalf of the ecosystem.
              </p>
            </div>
          </div>
        </section>

        <section className="animate-in fade-in slide-in-from-bottom-8 fill-mode-both space-y-8 delay-700 duration-1000">
          <div className="flex items-center gap-4">
            <div className="bg-border h-px max-w-[50px] flex-1" />
            <h2 className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
              // engineering_contributions
            </h2>
          </div>

          <div className="grid gap-4">
            <ProjectLog
              href="/mintymdt"
              name="MintyMDT"
              role="Lead Architect"
              action="Designing the DI container & Service Layer."
              detail="Decoupling infrastructure from logic to ensure the framework remains stable while game content evolves."
            />

            <ProjectLog
              href="/game-modes/catali-io"
              name="Catali"
              role="Maintainer"
              action="Refactored legacy logic to v2 API."
              detail="Eliminated technical debt by rewriting the core loop, enforcing strict state management standards."
            />

            <ProjectLog
              href="/game-modes/ranked"
              name="Ranked"
              role="Game Mode Designer"
              action="Designing a deterministic 1v1 competitive game mode."
              detail="Focused on fairness, clear win conditions, and minimizing systemic variance in player outcomes."
            />

            <ProjectLog
              href="/game-modes/onslaught-protocol"
              name="Onslaught Protocol"
              role="Systems Researcher"
              action="Exploring high-complexity PvP & PvE system design."
              detail="Used to experiment with layered mechanics, scaling difficulty, and long-term balance under system pressure."
            />
          </div>
        </section>
      </div>
    </div>
  )
}

function ProjectLog({
  href,
  name,
  role,
  action,
  detail,
}: {
  href: string
  name: string
  role: string
  action: string
  detail: string
}) {
  return (
    <Link
      href={href}
      className="group bg-background/40 hover:bg-background/80 border-border/40 hover:border-primary/50 relative block w-full rounded-lg border p-6 transition-all duration-300"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
        {/* Icon & Connector line visual */}
        <div className="hidden flex-col items-center gap-2 sm:flex">
          <div className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-full">
            <GitCommitHorizontal size={16} />
          </div>
          <div className="bg-border/50 h-full w-px" />
        </div>

        <div className="flex-1 space-y-2">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h3 className="text-foreground text-lg font-medium tracking-tight">
                {name}
              </h3>
              <span className="text-muted-foreground/60 text-xs font-light tracking-wider uppercase">
                — {role}
              </span>
            </div>
            <ArrowUpRight
              className="text-muted-foreground/30 group-hover:text-primary transition-colors"
              size={18}
            />
          </div>

          {/* Core Action (The "Short Description") */}
          <p className="text-foreground font-mono text-sm font-medium">
            {action}
          </p>

          {/* Detail (Optional context) */}
          <p className="text-muted-foreground line-clamp-2 text-xs leading-relaxed">
            {detail}
          </p>
        </div>
      </div>
    </Link>
  )
}
