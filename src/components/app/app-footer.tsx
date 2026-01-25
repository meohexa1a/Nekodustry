import { ArrowUpRight, Terminal } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      className="group text-muted-foreground/80 hover:text-primary flex items-center gap-2 font-mono text-xs transition-colors"
    >
      <span className="transition-transform group-hover:translate-x-0.5">
        {children}
      </span>
      <ArrowUpRight className="h-3 w-3 translate-x-0.5 -translate-y-0.5 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
    </a>
  )
}

export function AppFooter() {
  return (
    <footer className="bg-background/50 relative mx-4 rounded-t-2xl border border-b-0 backdrop-blur-sm">
      <div className="layout-grid-overlay" />

      <div className="relative grid w-full grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2 md:px-12 lg:grid-cols-9 lg:gap-4">
        <div className="col-span-1 space-y-6 md:col-span-2 lg:col-span-3">
          <div className="text-primary flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            <span className="text-foreground font-mono text-base font-bold tracking-tighter">
              NEKODUSTRY
            </span>
          </div>

          <p className="text-muted-foreground max-w-[280px] font-mono text-xs leading-relaxed">
            Service layer for Nekodustry <br />
            Server game modes, events, framework, and more!
          </p>

          <div className="flex gap-3 pt-2">
            <a
              href="https://github.com/meohexa1a/Nekodustry"
              target="_blank"
              rel="noreferrer"
              className="bg-muted/30 hover:bg-primary/10 hover:text-primary hover:border-primary/20 rounded-md border border-transparent p-2 transition-all"
            >
              <FaGithub className="h-4 w-4" />
              <span className="sr-only">Github</span>
            </a>
          </div>
        </div>

        {/* Column 2: Resources */}
        <div className="col-span-1 space-y-6 lg:col-span-2">
          <h3 className="text-foreground/50 font-mono text-xs tracking-widest uppercase">
            Resources
          </h3>
          <div className="flex flex-col gap-3">
            <FooterLink href="/mintymdt">MintyMDT</FooterLink>
            <FooterLink href="/game-modes/catali-io">Catali.io</FooterLink>
            <FooterLink href="/game-modes/onslaught-protocol">
              Onslaught Protocol
            </FooterLink>
          </div>
        </div>

        {/* Column 3: Mindustry Tool */}
        <div className="col-span-1 space-y-6 lg:col-span-2">
          <h3 className="text-foreground/50 font-mono text-xs tracking-widest uppercase">
            Mindustry Tool
          </h3>
          <div className="flex flex-col gap-3">
            <FooterLink href="#">Official Website</FooterLink>
            <FooterLink href="#">Official Discord</FooterLink>
            <FooterLink href="#">Mindustry Subreddit</FooterLink>
            <FooterLink href="#">Community Wiki</FooterLink>
          </div>
        </div>

        {/* Column 4: Project */}
        <div className="col-span-1 space-y-6 lg:col-span-2">
          <h3 className="text-foreground/50 font-mono text-xs tracking-widest uppercase">
            Related
          </h3>
          <div className="flex flex-col gap-3">
            <FooterLink href="/about-neko">About Me</FooterLink>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-border/50 bg-muted/5 border-t px-6 md:px-12">
        <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 py-8 font-mono text-xs tracking-widest md:flex-row">
          <p>
            © 2026 <span className="text-foreground">NEKODUSTRY</span>. Made
            with <span className="text-primary animate-pulse">❤️</span> by
            meohexa1a.
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
