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
    <footer className="relative z-10 mx-4 rounded-t-2xl border backdrop-blur-sm">
      <div className="layout-grid-overlay" />

      <div className="relative grid w-full grid-cols-1 gap-6 px-4 py-8 md:grid-cols-2 md:gap-2 md:px-12 lg:grid-cols-4">
        <div className="space-y-6">
          <div className="text-primary flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            <span className="text-foreground font-mono text-base tracking-tighter">
              NEKODUSTRY
            </span>
          </div>

          <p className="text-muted-foreground font-mono text-xs leading-relaxed">
            Service layer for Nekodustry <br />
            Server game modes, events, framework, and more!
          </p>

          <div className="flex gap-3 pt-2">
            {[
              {
                icon: FaGithub,
                href: 'https://github.com/meohexa1a/Nekodustry',
                label: 'Github',
              },
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
          <h3 className="text-foreground font-mono text-xs tracking-widest uppercase">
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
          <h3 className="text-foreground font-mono text-xs tracking-widest uppercase">
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

        {/* Column 4: Project */}
        <div className="space-y-6">
          <h3 className="text-foreground font-mono text-xs tracking-widest uppercase">
            Related
          </h3>
          <div className="flex flex-col gap-3">
            <FooterLink href="/about-neko">About Me</FooterLink>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-border/50 bg-muted/5 border-t px-6 md:px-12">
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
