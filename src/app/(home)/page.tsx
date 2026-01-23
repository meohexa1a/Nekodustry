import { AbstractBackground } from "@/components/app/abstract-background";
import { GatewayLinks } from "./gateway-links";
import { HeroSection } from "./hero-section";
import { SystemFooter } from "@/components/app/system-footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-transparent">
      <AbstractBackground />

      {/* Nội dung chính */}
      <div className="relative z-10 flex flex-col gap-12 pb-32 sm:gap-24">
        <HeroSection />
        <GatewayLinks />
      </div>

      <SystemFooter />
    </div>
  );
}