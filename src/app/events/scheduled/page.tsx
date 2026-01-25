import { CalendarClock, Trophy } from "lucide-react";
import Link from "next/link";

export default function ScheduledEventsPage() {
  const events = [
    {
      title: "Lunar New Year",
      slug: "lunar-new-year",
      status: "Upcoming",
      date: "Feb 20, 2026",
      type: "Holiday",
      color: "red",
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col p-8 md:p-12 lg:p-16">
      <div className="mx-auto max-w-6xl w-full space-y-8">
        <header>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl flex items-center gap-4">
            <CalendarClock className="text-blue-500" size={40} />
            Scheduled Events
          </h1>
          <p className="text-xl text-muted-foreground mt-4">Upcoming tournaments and community gatherings.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, idx) => (
            <Link
              href={`/events/${event.slug}`}
              key={idx}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div
                className={`h-32 bg-gradient-to-br ${event.color === "red" ? "from-red-500 to-orange-600" : "from-zinc-400 to-zinc-600"} p-6 flex items-start justify-between`}>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                  {event.type}
                </span>
                <Trophy size={20} className="text-white/50" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-sm text-muted-foreground font-medium">{event.date}</div>
                <h3 className="mb-4 text-xl font-bold leading-tight">{event.title}</h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    Scheduled
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
