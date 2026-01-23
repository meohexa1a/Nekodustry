import { HeroSection } from "@/components/about/hero-section";
import { TechStackSection } from "@/components/about/tech-stack-section";
import { ExperienceSection } from "@/components/about/experience-section";
import { ConnectSection } from "@/components/about/connect-section";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <TechStackSection />
      <ExperienceSection />
      <ConnectSection />
    </main>
  );
}
