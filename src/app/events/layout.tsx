import { AbstractBackground } from "@/components/app/abstract-background";
import { SystemFooter } from "@/components/app/system-footer";

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-transparent flex flex-col">
      <AbstractBackground />

      <div className="relative z-10 flex-1">
        {children}
      </div>

      <SystemFooter />
    </div>
  );
}
