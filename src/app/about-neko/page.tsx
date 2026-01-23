import React from "react";
import type { Metadata } from "next";
import { SystemFooter } from "@/components/app/system-footer";
import { AbstractBackground } from "@/components/app/abstract-background";

export const metadata: Metadata = {
  title: "About Me | Nekodustry Portal",
  description: "Builder. Maintainer. System Thinker.",
};

export default function AboutNekoPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-transparent font-mono selection:bg-primary/20 selection:text-primary">
      {/* Reusing Home Page Background for consistency and depth */}
      <AbstractBackground />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 md:py-32 space-y-32">
        {/* Header / Identity */}
        <header className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
          <span className="inline-block text-xs font-semibold tracking-widest text-muted-foreground uppercase opacity-50">
            // about_me
          </span>
          <div className="space-y-4 text-3xl md:text-5xl font-light tracking-tight leading-tight">
            <h1 className="text-foreground">
              Hi, I'm <span className="font-medium text-primary">meohexa1a</span>.
            </h1>
            <p className="text-muted-foreground/80 text-2xl md:text-4xl">I am a builder and system maintainer.</p>
          </div>
        </header>

        {/* Section: Identity */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
          <div className="space-y-4 border-l-2 border-primary/20 pl-6 h-full">
            <span className="block text-primary text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
              Identity Protocol
            </span>
            <p className="text-lg font-medium text-foreground">Builder / Maintainer / System Thinker</p>
            <p className="text-muted-foreground">
              I am not a representative. I prefer infrastructure over the spotlight.
            </p>
          </div>
          <div className="space-y-4 border-l-2 border-primary/20 pl-6 h-full">
            <span className="block text-primary text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
              Core Focus
            </span>
            <ul className="space-y-2 text-muted-foreground">
              <li>Sustainable systems.</li>
              <li>Replaceability.</li>
              <li>Minimal individual dependency.</li>
            </ul>
          </div>
        </section>

        {/* Section: Approach */}
        <section className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
          <div className="flex items-center gap-4">
            <div className="h-px bg-border flex-1 max-w-[50px]" />
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              // how_i_think
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="group space-y-4">
              <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                Abstraction over implementation
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                I view every project as a system problem. Prioritizing service layer over features, abstraction
                over premature optimization.
              </p>
            </div>

            <div className="group space-y-4">
              <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                Service over authority
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Systems should serve, not rule. If infrastructure attracts too much attention, it fails to be
                invisible.
              </p>
            </div>

            <div className="group space-y-4">
              <h3 className="text-base font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                Design for replacement
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Everything I build is designed to be replaceable — including myself.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Relationships */}
        <section className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
          <div className="flex items-center gap-4">
            <div className="h-px bg-border flex-1 max-w-[50px]" />
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              // ecosystem_context
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="relative p-6 rounded-lg border border-zinc-200/50 dark:border-zinc-800/50 bg-white/5 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-zinc-800/20 transition-all duration-300">
              <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-muted-foreground/50">
                Service
              </span>
              <h3 className="text-xl font-medium mb-3">Nekodustry</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Provides infrastructure, framework, and operations. Does not define community meaning.
              </p>
            </div>

            <div className="relative p-6 rounded-lg border border-zinc-200/50 dark:border-zinc-800/50 bg-white/5 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-zinc-800/20 transition-all duration-300">
              <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-muted-foreground/50">
                Community
              </span>
              <h3 className="text-xl font-medium mb-3">Mindustry Tool</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Where culture, voice, and representation are formed.
              </p>
            </div>

            <div className="relative p-6 rounded-lg border border-zinc-200/50 dark:border-zinc-800/50 bg-white/5 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-zinc-800/20 transition-all duration-300">
              <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-muted-foreground/50">
                Operator
              </span>
              <h3 className="text-xl font-medium mb-3">Me</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Operating Nekodustry. Speaking for myself, not the community.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Anti-goals */}
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-both">
          <div className="flex items-center gap-4">
            <div className="h-px bg-border flex-1 max-w-[50px]" />
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              // null_pointers (avoid)
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-destructive/50" />
              No hype-chasing or marketing.
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-destructive/50" />
              Not "official", not a representative.
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-destructive/50" />
              No promising long-term roadmaps.
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-destructive/50" />
              No personal branding.
            </li>
          </ul>
        </section>
      </div>

      <SystemFooter />
    </main>
  );
}
