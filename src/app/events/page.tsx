import { Calendar, Trophy, Users, Clock } from "lucide-react";

export default function EventsPage() {
  const events = [
    {
      title: "Mindustry Championship 2024",
      status: "Sắp diễn ra",
      date: "15 Th05, 2024",
      type: "Giải đấu",
      color: "blue",
    },
    {
      title: "Neko Workshop: Logic Pro",
      status: "Đang diễn ra",
      date: "22 Th01, 2024",
      type: "Hướng dẫn",
      color: "green",
    },
    {
      title: "Community Creative Build",
      status: "Hết hạn",
      date: "10 Th01, 2024",
      type: "Sáng tạo",
      color: "zinc",
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col p-8 md:p-12 lg:p-16">
      <div className="mx-auto max-w-6xl w-full space-y-12">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl flex items-center gap-4">
              <Calendar className="text-blue-500" size={40} />
              Sự Kiện
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">Tham gia các hoạt động cộng đồng và giải đấu hấp dẫn.</p>
          </div>
          <div className="flex bg-zinc-100 dark:bg-zinc-800 p-1 rounded-xl">
            <button className="px-4 py-2 rounded-lg bg-white dark:bg-zinc-900 shadow-sm text-sm font-medium">Tất cả</button>
            <button className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-500">Phổ biến</button>
            <button className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-500">Gần đây</button>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-zinc-200 bg-white transition-all hover:-translate-y-1 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <div
                className={`h-32 bg-gradient-to-br ${
                  event.color === "blue" ? "from-blue-500 to-indigo-600" : event.color === "green" ? "from-emerald-500 to-teal-600" : "from-zinc-400 to-zinc-600"
                } p-6 flex items-start justify-between`}
              >
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">{event.type}</span>
                <Trophy size={20} className="text-white/50" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center gap-2 text-sm text-zinc-500">
                  <Clock size={14} />
                  {event.date}
                </div>
                <h3 className="mb-4 text-xl font-bold leading-tight group-hover:text-blue-500 transition-colors">{event.title}</h3>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-zinc-200 dark:border-zinc-900" />
                    ))}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-zinc-100 text-[10px] font-bold dark:border-zinc-900 dark:bg-zinc-800">
                      +12
                    </div>
                  </div>
                  <span
                    className={`text-sm font-bold ${event.status === "Đang diễn ra" ? "text-emerald-500" : event.status === "Sắp diễn ra" ? "text-blue-500" : "text-zinc-500"}`}
                  >
                    {event.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="rounded-[3rem] border border-dashed border-zinc-300 dark:border-zinc-700 p-12 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 mb-6">
            <Users className="text-zinc-400" />
          </div>
          <h2 className="mb-2 text-2xl font-bold">Tổ chức sự kiện của bạn?</h2>
          <p className="mb-8 text-zinc-500">Liên hệ với chúng tôi để đưa sự kiện của bạn lên Nekodustry.</p>
          <button className="rounded-full border border-zinc-200 bg-white px-8 py-3 font-semibold transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800">
            Gửi Yêu Cầu
          </button>
        </section>
      </div>
    </div>
  );
}
