import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/theme/mode-toggle";

export function AppNavbar() {
  return (
    <nav
      className="mx-auto sticky top-0 z-50 flex h-12 w-full items-center gap-2 
        backdrop-blur-sm transition-all ease-linear supports-backdrop-filter:bg-background/60 max-w-5xl
        rounded-none lg:rounded-b-xl border">
      <div className="flex w-full items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />

        <span>Nekodustry</span>

        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
