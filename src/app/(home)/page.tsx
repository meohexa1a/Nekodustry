import { FeatureItem } from '@/components/common/feature-item'
import { AbstractBackground } from '@/components/app/abstract-background'
import Link from 'next/link'

import { Calendar, Gamepad2, Swords, Boxes, ShieldAlert } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative w-full">
      <AbstractBackground />

      <div className="relative mx-auto max-w-4xl space-y-32 px-6 py-24 md:py-32">
        {/* Hero Section */}
        <header className="relative flex w-full flex-col justify-center">
          <div className="space-y-8">
            <div className="group relative inline-block">
              <div className="tracking-widest-xl text-muted-foreground mb-6 font-mono text-xs leading-relaxed uppercase opacity-70">
                <span className="block">Operating as a service layer</span>
                <span className="block">within a larger community system</span>
              </div>

              <h1 className="leading-tighter text-foreground max-w-4xl text-5xl font-light tracking-tight sm:text-7xl lg:text-8xl">
                Experimental <br />
                <span className="text-muted-foreground font-serif italic">
                  Ecosystem.
                </span>
              </h1>
            </div>
          </div>
        </header>

        {/* Gateway Links */}
        <section>
          <div className="mx-auto max-w-4xl space-y-4">
            <div className="tracking-widest-2xl text-muted-foreground mb-12 font-mono text-xs uppercase">
              Available Service Nodes
            </div>

            <FeatureItem
              href="/mintymdt"
              title="MintyMDT"
              subtitle="Framework service integration"
              icon={Boxes}
            />

            <FeatureItem
              href="/events"
              title="Events"
              subtitle="Managed temporal services"
              icon={Calendar}
            />

            <FeatureItem
              href="/game-modes/catali-io"
              title="Catali.io"
              subtitle="RPG PvP Game Mode"
              icon={Swords}
            />

            <FeatureItem
              href="/game-modes/onslaught-protocol"
              title="Onslaught Protocol"
              subtitle="PvP & PvE Game Mode"
              icon={ShieldAlert}
            />

            <FeatureItem
              href="/game-modes/common"
              title="Game Modes"
              subtitle="Gameplay service instances"
              icon={Gamepad2}
            />
          </div>
        </section>
      </div>
    </div>
  )
}
