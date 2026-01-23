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
      <div className="relative flex items-center justify-between border-b border-zinc-200 py-8 transition-all duration-300 hover:border-zinc-900 group-hover:pl-4 dark:border-zinc-800 dark:hover:border-zinc-100">
        <div className="flex items-center gap-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-400 transition-colors group-hover:bg-zinc-900 group-hover:text-zinc-50 dark:bg-zinc-900 dark:text-zinc-600 dark:group-hover:bg-zinc-100 dark:group-hover:text-zinc-900">
            <Icon size={20} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-mono text-lg text-zinc-900 dark:text-zinc-100">{title}</h3>
            <p className="text-sm font-light text-zinc-500 dark:text-zinc-500">{subtitle}</p>
          </div>
        </div>
        <ArrowRight className="text-zinc-300 transition-transform duration-300 group-hover:-translate-x-2 group-hover:text-zinc-900 dark:text-zinc-700 dark:group-hover:text-zinc-100" />
      </div>
    </Link>
  );
}

export function GatewayLinks() {
  return (
    <section className="px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-4xl space-y-4">
        <div className="mb-12 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600">
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
