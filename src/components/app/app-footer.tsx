import { ArrowUpRight, Terminal } from 'lucide-react'
import { FaGithub, FaDiscord, FaInstagram, FaReddit } from 'react-icons/fa6'

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
    <footer className="relative z-10 mx-4 rounded-t-2xl border px-2 backdrop-blur-sm md:px-6">
      {/* Grid Pattern Background */}
      <div className="layout-grid-overlay" />

      {/* Grid Layout */}
      <div className="relative grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
        {/* Column 1: Identity & About */}
        <div className="space-y-6">
          <div className="text-primary flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            <span className="text-foreground font-mono text-base font-bold tracking-tighter">
              NEKODUSTRY
            </span>
          </div>

          <p className="text-muted-foreground font-mono text-xs leading-relaxed">
            Service layer for Nekodustry <br />
            Server, events, framework, and more!
          </p>

          <div className="flex gap-3 pt-2">
            {[
              {
                icon: FaGithub,
                href: 'https://github.com/meohexa1a/Nekodustry',
                label: 'Github',
              },
              { icon: FaDiscord, href: '#', label: 'Discord' },
              { icon: FaInstagram, href: '#', label: 'Instagram' },
              { icon: FaReddit, href: '#', label: 'Reddit' },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="bg-muted/30 hover:bg-primary/10 hover:text-primary hover:border-primary/20 rounded-md border border-transparent p-2 transition-all"
              >
                <social.icon className="h-4 w-4" />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Mindustry Tool */}
        <div className="space-y-6">
          <h3 className="text-foreground font-mono text-xs font-bold tracking-widest uppercase">
            Mindustry Tool
          </h3>
          <div className="flex flex-col gap-3">
            <FooterLink href="#">Official Website</FooterLink>
            <FooterLink href="#">Official Discord</FooterLink>
            <FooterLink href="#">Mindustry Subreddit</FooterLink>
            <FooterLink href="#">Community Wiki</FooterLink>
          </div>
        </div>

        {/* Column 3: Ecosystem */}
        <div className="space-y-6">
          <h3 className="text-foreground font-mono text-xs font-bold tracking-widest uppercase">
            Ecosystem
          </h3>
          <div className="flex flex-col gap-3">
            <FooterLink href="/mintymdt">MintyMDT Framework</FooterLink>
            <FooterLink href="/game-modes">Game Modes</FooterLink>
            <FooterLink href="#">Modding Docs</FooterLink>
            <FooterLink href="#">Asset Library</FooterLink>
          </div>
        </div>

        {/* Column 4: Project */}
        <div className="space-y-6">
          <h3 className="text-foreground font-mono text-xs font-bold tracking-widest uppercase">
            Project
          </h3>
          <div className="flex flex-col gap-3">
            <FooterLink href="/about-neko">About Nekodustry</FooterLink>
            <FooterLink href="#">Changelog</FooterLink>
            <FooterLink href="#">Contributing</FooterLink>
            <FooterLink href="#">Status</FooterLink>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-border/40 bg-muted/5 -mx-6 border-t px-6 md:-mx-12 md:px-12">
        <div className="text-2xs text-muted-foreground flex flex-col items-center justify-between gap-4 py-6 font-mono tracking-widest md:flex-row">
          <p>
            © 2026 NEKODUSTRY. Made with{' '}
            <span className="text-primary">❤️</span> by meohexa1a.
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
