import { History } from "lucide-react";
import Link from "next/link";

export default function PastEventsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col p-8 md:p-12 lg:p-16">
      <div className="mx-auto max-w-6xl w-full space-y-8">
        <header>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl flex items-center gap-4">
            <History className="text-zinc-500" size={40} />
            Past Events
          </h1>
          <p className="text-xl text-muted-foreground mt-4">Archive of previous tournaments and seasons.</p>
        </header>

        <Link
          href="#"
          className="block rounded-[2rem] border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50 p-8 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div>
              <h3 className="text-lg font-bold">Winter Championship 2025</h3>
              <p className="text-sm text-muted-foreground">Ended on Dec 31, 2025</p>
            </div>
            <div className="px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm font-medium">
              Winner: Team Neko
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
