import { ShieldAlert, Cpu, Activity, Zap } from "lucide-react";

export default function OnslaughtProtocolPage() {
  return (
    <div className="flex min-h-screen w-full flex-col p-8 md:p-12 lg:p-16 bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl space-y-20">
        <header className="relative py-20 px-8 rounded-[3rem] overflow-hidden">
          <div className="absolute inset-0 bg-red-600/10 border border-red-500/20 rounded-[3rem]" />
          <div className="relative z-10 text-center space-y-6">
            <div className="inline-block animate-pulse mb-4">
              <ShieldAlert size={48} className="text-red-500 mx-auto" />
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic">
              Onslaught <span className="text-red-600">Protocol</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Chế độ thử thách tối thượng. Liệu bạn có thể sống sót trước cơn thịnh nộ của AI và những đợt tấn công không hồi kết?
            </p>
          </div>
          {/* Grid background effect */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #ef4444 1px, transparent 0)", backgroundSize: "40px 40px" }}
          />
        </header>

        <section className="grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Cpu className="text-red-500" /> Hệ thống AI Thích ứng
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Không giống như các đợt tấn công thông thường, AI trong Onslaught Protocol sẽ phân tích điểm yếu trong hệ thống phòng thủ của bạn và thay đổi chiến thuật theo thời
              gian thực.
            </p>
            <div className="space-y-4">
              {["Tăng cường độ khó động", "Đơn vị quân đặc chủng", "Bản đồ thay đổi cấu trúc"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative h-full bg-zinc-900 border border-white/10 rounded-3xl p-8 flex flex-col justify-center">
              <Activity className="text-red-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Chỉ số Sống sót</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Độ khó hiện tại</span>
                    <span className="text-red-500">Tier S+</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-red-600 w-[90%]" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl text-center">
                    <div className="text-sm text-zinc-500">Tỷ lệ thắng</div>
                    <div className="text-2xl font-black">2.4%</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl text-center">
                    <div className="text-sm text-zinc-500">Kỷ lục tuần</div>
                    <div className="text-2xl font-black">W-42</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center pb-20">
          <button className=" group relative px-12 py-6 overflow-hidden rounded-full bg-white text-zinc-950 font-black text-xl transition-all hover:scale-110 active:scale-95">
            <span className="relative z-10">KÍCH HOẠT GIAO THỨC</span>
            <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform" />
          </button>
        </footer>
      </div>
    </div>
  );
}
