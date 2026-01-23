import { GatewayLinks } from "./gateway-links";
import { HeroSection } from "./hero-section";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden bg-transparent flex flex-col gap-12 pb-32 sm:gap-24">
      <HeroSection />
      <GatewayLinks />
    </div>
  );
}
