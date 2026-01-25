import { AbstractBackground } from "@/components/app/abstract-background";
import Link from "next/link";
import { ArrowRight, Layers, LayoutDashboard, Calendar, Gamepad2 } from "lucide-react";

function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center w-full px-6 pt-24 sm:px-12 md:pt-32">
      <div className="space-y-8">
        <div className="group relative inline-block">
          {/* Subtle System Annotation */}
          <div className="mb-6 font-mono text-xxs uppercase leading-relaxed tracking-widest-xl text-muted-foreground opacity-70">
            <span className="block">Operating as a service layer</span>
            <span className="block">within a larger community system</span>
          </div>

          <h1 className="max-w-4xl text-5xl font-light leading-tighter tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            Experimental <br />
            <span className="font-serif italic text-muted-foreground">Ecosystem</span>
          </h1>
        </div>

        <p className="max-w-xl text-lg font-light leading-relaxed text-muted-foreground sm:text-xl">
          Nekodustry provides systems, not direction.
          <span className="block mt-4 opacity-70">Structure for the community to inhibit.</span>
        </p>
      </div>
    </section>
  );
}

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
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
            <Icon size={20} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-mono text-lg text-foreground">{title}</h3>
            <p className="text-sm font-light text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        <ArrowRight className="text-muted-foreground transition-transform duration-300 group-hover:-translate-x-2 group-hover:text-foreground" />
      </div>
    </Link>
  );
}

function GatewayLinks() {
  return (
    <section className="px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-4xl space-y-4">
        <div className="mb-12 font-mono text-xs uppercase tracking-widest-2xl text-muted-foreground">
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

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-transparent">
      <AbstractBackground />

      {/* Nội dung chính */}
      <div className="relative z-10 flex flex-col gap-12 pb-32 sm:gap-24">
        <HeroSection />
        <GatewayLinks />
      </div>

    </div>
  );
}
