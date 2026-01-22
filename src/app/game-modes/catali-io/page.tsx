import { Gamepad2, Sparkles, Zap, Timer } from "lucide-react";

export default function CataliIoPage() {
  return (
    <div className="flex min-h-screen w-full flex-col p-8 md:p-12 lg:p-16">
      <div className="mx-auto max-w-6xl w-full">
        <div className="relative overflow-hidden rounded-[3rem] bg-indigo-600 p-8 md:p-20 text-white shadow-2xl">
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="space-y-6 flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-bold backdrop-blur-md">
                <Sparkles size={16} />
                Chế độ chơi mới nhất
              </div>
              <h1 className="text-5xl font-black md:text-7xl">Catali.io</h1>
              <p className="text-xl text-indigo-100 max-w-xl">Một trải nghiệm Mindustry tốc độ cao, phong cách IO, nơi sự phản xạ và chiến thuật được đẩy lên giới hạn cao nhất.</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button className="rounded-2xl bg-white px-8 py-4 font-bold text-indigo-600 transition-transform hover:scale-105 active:scale-95 shadow-lg">Chơi ngay</button>
                <button className="rounded-2xl bg-indigo-500 px-8 py-4 font-bold text-white transition-all hover:bg-indigo-400 border border-indigo-400/50">
                  Xem bảng xếp hạng
                </button>
              </div>
            </div>
            <div className="w-full max-w-md aspect-square bg-indigo-500/30 rounded-[2.5rem] border border-white/10 backdrop-blur-sm flex items-center justify-center">
              <Gamepad2 size={120} className="text-white/20" />
            </div>
          </div>

          {/* Animated background elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px]" />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="p-8 rounded-[2rem] bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600">
              <Timer size={24} />
            </div>
            <h3 className="text-xl font-bold">Trận đấu ngắn</h3>
            <p className="text-zinc-500">Mỗi trận chỉ kéo dài từ 5-10 phút, lý tưởng cho việc giải trí nhanh.</p>
          </div>
          <div className="p-8 rounded-[2rem] bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold">Nâng cấp tức thì</h3>
            <p className="text-zinc-500">Hệ thống nâng cấp động giúp bạn mạnh lên từng phút trong trận đấu.</p>
          </div>
          <div className="p-8 rounded-[2rem] bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 space-y-4">
            <div className="h-12 w-12 rounded-2xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600">
              <Gamepad2 size={24} />
            </div>
            <h3 className="text-xl font-bold">Thi đấu PvP</h3>
            <p className="text-zinc-500">Đối đầu trực tiếp với hàng chục người chơi khác trên một bản đồ khổng lồ.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
