import { Gamepad2, Sword, Shield, Target } from "lucide-react";

export default function CommonGameModePage() {
  const modes = [
    {
      title: "Chế độ Sống còn (Survival)",
      description: "Xây dựng phòng thủ và chống lại các đợt tấn công của kẻ thù ngày càng mạnh.",
      icon: <Target className="text-red-500" />,
      difficulty: "Trung bình",
    },
    {
      title: "Chế độ Tấn công (Attack)",
      description: "Xây dựng quân đội và tiêu diệt căn cứ của đối phương để giành chiến thắng.",
      icon: <Sword className="text-orange-500" />,
      difficulty: "Khó",
    },
    {
      title: "Chế độ Sandbox",
      description: "Sáng tạo không giới hạn với nguồn tài nguyên vô tận.",
      icon: <Shield className="text-blue-500" />,
      difficulty: "Dễ",
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col p-8 md:p-12 lg:p-16">
      <div className="mx-auto max-w-5xl space-y-16">
        <header className="space-y-4">
          <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-zinc-500">
            <div className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
            Game Modes
          </div>
          <h1 className="text-4xl font-black sm:text-6xl flex items-center gap-4">Common Game Modes</h1>
          <p className="max-w-2xl text-xl text-zinc-600 dark:text-zinc-400 font-medium">
            Những chế độ chơi cơ bản và quen thuộc nhất trong vũ trụ Mindustry được Nekodustry tinh chỉnh lại.
          </p>
        </header>

        <div className="grid gap-12">
          {modes.map((mode, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white p-8 md:p-12 dark:border-zinc-800 dark:bg-zinc-900/30">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="h-20 w-20 rounded-3xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">{mode.icon}</div>
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-4">
                    <h3 className="text-3xl font-bold">{mode.title}</h3>
                    <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-bold text-zinc-500 uppercase tracking-tighter">{mode.difficulty}</span>
                  </div>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">{mode.description}</p>
                  <button className="flex items-center gap-2 font-bold text-zinc-950 dark:text-white group-hover:gap-4 transition-all uppercase text-sm tracking-wide">
                    Khám phá ngay <span className="text-xl">→</span>
                  </button>
                </div>
              </div>

              {/* Background blur decoration */}
              <div className="absolute -right-4 -bottom-4 h-32 w-32 bg-zinc-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
