import { AbstractBackground } from "@/components/home/abstract-background";
import { GatewayLinks } from "@/components/home/gateway-links";
import { HeroSection } from "@/components/home/hero-section";
import { SystemFooter } from "@/components/home/system-footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-transparent">
      <AbstractBackground />

      <div className="relative z-10 flex flex-col gap-12 pb-32 sm:gap-24">
        <HeroSection />
        <GatewayLinks />
      </div>

      <SystemFooter />
    </main>
  );
}
