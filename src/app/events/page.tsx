import Link from "next/link";
import { CalendarClock, PlayCircle, History, ArrowRight, Calendar } from "lucide-react";

export default function EventsPage() {
  const categories = [
    {
      title: "Scheduled Events",
      description: "Upcoming tournaments and community gatherings.",
      icon: CalendarClock,
      href: "/events/scheduled",
    },
    {
      title: "Ongoing Events",
      description: "Events happening right now.",
      icon: PlayCircle,
      href: "/events/ongoing",
    },
    {
      title: "Past Events",
      description: "Archive of previous tournaments and seasons.",
      icon: History,
      href: "/events/past",
    },
  ];

  return (
    <div className="flex w-full flex-col p-6 md:p-12 lg:p-16">
      <div className="mx-auto max-w-5xl w-full space-y-16">
        <header className="space-y-6">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600">
            System Events
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl flex items-center gap-4 font-mono text-zinc-900 dark:text-zinc-100">
            <Calendar className="text-zinc-900 dark:text-zinc-100" size={40} />
            Events Hub
          </h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl font-light leading-relaxed">
            Join the community. Compete in tournaments. Check out what&apos;s coming next in the timeline.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, idx) => (
            <Link
              href={category.href}
              key={idx}
              className="group relative flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-zinc-900 hover:shadow-xl hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-100 dark:hover:shadow-zinc-900/50"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-900 transition-colors duration-300 group-hover:bg-zinc-900 group-hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:group-hover:bg-zinc-100 dark:group-hover:text-zinc-900">
                <category.icon size={26} strokeWidth={1.5} />
              </div>

              <div className="space-y-2">
                <h2 className="font-mono text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition-colors">
                  {category.title}
                </h2>
                <p className="text-sm font-light text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:gap-4 transition-all">
                Explore <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
