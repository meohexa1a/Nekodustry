import { AbstractBackground } from '@/components/app/abstract-background'
import Link from 'next/link'
import {
  ArrowRight,
  Layers,
  LayoutDashboard,
  Calendar,
  Gamepad2,
} from 'lucide-react'

function HeroSection() {
  return (
    <section className="relative flex w-full flex-col justify-center px-6 pt-24 sm:px-12 md:pt-32">
      <div className="space-y-8">
        <div className="group relative inline-block">
          {/* Subtle System Annotation */}
          <div className="text-xxs tracking-widest-xl text-muted-foreground mb-6 font-mono leading-relaxed uppercase opacity-70">
            <span className="block">Operating as a service layer</span>
            <span className="block">within a larger community system</span>
          </div>

          <h1 className="leading-tighter text-foreground max-w-4xl text-5xl font-light tracking-tight sm:text-7xl lg:text-8xl">
            Experimental <br />
            <span className="text-muted-foreground font-serif italic">
              Ecosystem
            </span>
          </h1>
        </div>

        <p className="text-muted-foreground max-w-xl text-lg leading-relaxed font-light sm:text-xl">
          Nekodustry provides systems, not direction.
          <span className="mt-4 block opacity-70">
            Structure for the community to inhibit.
          </span>
        </p>
      </div>
    </section>
  )
}

interface NodeLinkProps {
  href: string
  title: string
  subtitle: string
  icon: React.ElementType
}

function NodeLink({ href, title, subtitle, icon: Icon }: NodeLinkProps) {
  return (
    <Link href={href} className="group block w-full">
      <div className="border-border hover:border-foreground relative flex items-center justify-between border-b py-8 transition-all duration-300 group-hover:pl-4">
        <div className="flex items-center gap-6">
          <div className="bg-secondary text-muted-foreground group-hover:bg-foreground group-hover:text-background flex h-12 w-12 items-center justify-center rounded-full transition-colors">
            <Icon size={20} strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-foreground font-mono text-lg">{title}</h3>
            <p className="text-muted-foreground text-sm font-light">
              {subtitle}
            </p>
          </div>
        </div>
        <ArrowRight className="text-muted-foreground group-hover:text-foreground transition-transform duration-300 group-hover:-translate-x-2" />
      </div>
    </Link>
  )
}

function GatewayLinks() {
  return (
    <section className="px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-4xl space-y-4">
        <div className="tracking-widest-2xl text-muted-foreground mb-12 font-mono text-xs uppercase">
          Available Service Nodes
        </div>

        <NodeLink
          href="/"
          title="Dashboard"
          subtitle="Operational overview"
          icon={LayoutDashboard}
        />
        <NodeLink
          href="/events"
          title="Events"
          subtitle="Managed temporal services"
          icon={Calendar}
        />
        <NodeLink
          href="/mintymdt"
          title="MintyMDT"
          subtitle="Framework service integration"
          icon={Layers}
        />
        <NodeLink
          href="/game-modes/common"
          title="Game Modes"
          subtitle="Gameplay service instances"
          icon={Gamepad2}
        />
      </div>
    </section>
  )
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
  )
}
