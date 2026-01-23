import Link from "next/link";
import { Calendar, CalendarClock, PlayCircle, History, ArrowRight } from "lucide-react";

export default function EventsPage() {
  const categories = [
    {
      title: "Scheduled Events",
      description: "Upcoming tournaments and community gatherings.",
      icon: CalendarClock,
      href: "/events/scheduled",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      title: "Ongoing Events",
      description: "Events happening right now.",
      icon: PlayCircle,
      href: "/events/ongoing",
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
    },
    {
      title: "Past Events",
      description: "Archive of previous tournaments and seasons.",
      icon: History,
      href: "/events/past",
      color: "text-zinc-500",
      bg: "bg-zinc-500/10",
      border: "border-zinc-500/20",
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col p-8 md:p-12 lg:p-16">
      <div className="mx-auto max-w-6xl w-full space-y-12">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl flex items-center gap-4">
            <Calendar className="text-primary" size={40} />
            Events Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">Join the community. Compete in tournaments. Check out what's coming next.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category, idx) => (
            <Link
              href={category.href}
              key={idx}
              className={`group relative flex flex-col p-8 rounded-[2.5rem] border ${category.border} bg-card hover:bg-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className={`mb-6 h-16 w-16 rounded-2xl ${category.bg} flex items-center justify-center ${category.color}`}>
                <category.icon size={32} />
              </div>

              <h2 className="text-2xl font-bold mb-3">{category.title}</h2>
              <p className="text-muted-foreground mb-8 flex-1">{category.description}</p>

              <div className="flex items-center gap-2 font-bold text-sm group-hover:gap-4 transition-all">
                Explore <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
