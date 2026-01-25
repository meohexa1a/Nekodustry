import { SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import { ModeToggle } from '@/components/theme/mode-toggle'

export function AppNavbar() {
  return (
    <nav className="sticky top-0 z-50 mx-auto flex h-12 w-full max-w-5xl items-center gap-2 border backdrop-blur-sm lg:rounded-b-xl">
      <div className="flex w-full items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />

        <span>Nekodustry</span>

        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}
