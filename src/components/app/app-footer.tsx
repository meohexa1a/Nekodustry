import { ArrowUpRight, Terminal } from "lucide-react";
import { FaGithub, FaDiscord, FaInstagram, FaReddit } from "react-icons/fa6";

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-2 text-xs text-muted-foreground/80 hover:text-primary transition-colors font-mono"
    >
      <span className="group-hover:translate-x-0.5 transition-transform">
        {children}
      </span>
      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
    </a>
  );
}

export function AppFooter() {
  return (
    <footer className="relative z-10 mx-4 rounded-t-2xl border backdrop-blur-sm px-2 md:px-6">
      {/* Grid Pattern Background */}
      <div className="layout-grid-overlay" />

      {/* Grid Layout */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 py-16">
        {/* Column 1: Identity & About */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-primary">
            <Terminal className="h-5 w-5" />
            <span className="font-mono font-bold text-base tracking-tighter text-foreground">
              NEKODUSTRY
            </span>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed font-mono">
            Service layer for Nekodustry <br />
            Server, events, framework, and more!
          </p>

          <div className="flex gap-3 pt-2">
            {[
              {
                icon: FaGithub,
                href: "https://github.com/meohexa1a/Nekodustry",
                label: "Github",
              },
              { icon: FaDiscord, href: "#", label: "Discord" },
              { icon: FaInstagram, href: "#", label: "Instagram" },
              { icon: FaReddit, href: "#", label: "Reddit" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md bg-muted/30 hover:bg-primary/10 hover:text-primary transition-all border border-transparent hover:border-primary/20"
              >
                <social.icon className="h-4 w-4" />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Mindustry Tool */}
        <div className="space-y-6">
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">
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
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">
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
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">
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
      <div className="border-t border-border/40 bg-muted/5 -mx-6 md:-mx-12 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4 text-2xs tracking-widest text-muted-foreground font-mono">
          <p>
            © 2026 NEKODUSTRY. Made with{" "}
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
  );
}
