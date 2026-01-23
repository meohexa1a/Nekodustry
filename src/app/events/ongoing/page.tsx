import { PlayCircle } from "lucide-react";

export default function OngoingEventsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col p-8 md:p-12 lg:p-16">
      <div className="mx-auto max-w-6xl w-full space-y-8">
        <header>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl flex items-center gap-4">
            <PlayCircle className="text-green-500" size={40} />
            Ongoing Events
          </h1>
          <p className="text-xl text-muted-foreground mt-4">Events happening right now.</p>
        </header>

        <div className="rounded-[2rem] border border-dashed border-zinc-300 dark:border-zinc-700 p-12 text-center bg-zinc-50 dark:bg-zinc-900/50">
          <p className="text-muted-foreground">No active events at the moment.</p>
        </div>
      </div>
    </div>
  );
}
