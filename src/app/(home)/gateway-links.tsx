import Link from "next/link";
import { ArrowRight, Layers, LayoutDashboard, Calendar, Gamepad2 } from "lucide-react";

interface NodeLinkProps {
  href: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
}

function NodeLink({ href, title, subtitle, icon: Icon }: NodeLinkProps) {
  return (
    <Link href={href} className="group block w-full">
      <div className="relative flex items-center justify-between border-b border-border py-8 transition-all duration-300 hover:border-foreground group-hover:pl-4">
        <div className="flex items-center gap-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
            <Icon size={20} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-mono text-lg text-foreground">{title}</h3>
            <p className="text-sm font-light text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        <ArrowRight className="text-muted-foreground/50 transition-transform duration-300 group-hover:-translate-x-2 group-hover:text-foreground" />
      </div>
    </Link>
  );
}

export function GatewayLinks() {
  return (
    <section className="px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-4xl space-y-4">
        <div className="mb-12 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Available Service Nodes
        </div>

        <NodeLink href="/" title="Dashboard" subtitle="Operational overview" icon={LayoutDashboard} />
        <NodeLink href="/events" title="Events" subtitle="Managed temporal services" icon={Calendar} />
        <NodeLink href="/mintymdt" title="MintyMDT" subtitle="Framework service integration" icon={Layers} />
        <NodeLink
          href="/game-modes/common"
          title="Game Modes"
          subtitle="Gameplay service instances"
          icon={Gamepad2}
        />
      </div>
    </section>
  );
}
