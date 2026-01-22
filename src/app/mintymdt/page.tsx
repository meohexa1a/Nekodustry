import { Layers, Zap, Code, Shield } from "lucide-react";

export default function MintyMDTPage() {
  const features = [
    {
      icon: <Zap className="text-yellow-500" />,
      title: "Hiệu năng cao",
      description: "Được tối ưu hóa tối đa để đảm bảo sự mượt mà trong quá trình vận hành.",
    },
    {
      icon: <Code className="text-blue-500" />,
      title: "Dễ dàng mở rộng",
      description: "Cấu trúc module cho phép các nhà phát triển dễ dàng tùy biến theo ý thích.",
    },
    {
      icon: <Shield className="text-green-500" />,
      title: "Bảo mật & Tin cậy",
      description: "Xây dựng trên nền tảng vững chắc, đảm bảo dữ liệu và hệ thống luôn an toàn.",
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col p-8 md:p-12 lg:p-16">
      <div className="mx-auto max-w-5xl space-y-16">
        <header className="text-center space-y-4">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 mb-4">
            <Layers size={32} />
          </div>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">MintyMDT Framework</h1>
          <p className="mx-auto max-w-2xl text-xl text-zinc-600 dark:text-zinc-400">
            Khung phát triển hiện đại nhất dành cho hệ sinh thái Nekodustry, giúp bạn xây dựng các ứng dụng Mindustry nhanh hơn bao giờ hết.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group flex flex-col p-8 rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all hover:border-emerald-500/50 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/40"
            >
              <div className="mb-4 h-10 w-10">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </section>

        <section className="relative overflow-hidden rounded-[3rem] bg-zinc-900 px-8 py-16 dark:bg-zinc-800/50">
          <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Sẵn sàng để bắt đầu?</h2>
              <p className="text-lg text-zinc-400">
                MintyMDT cung cấp đầy đủ các thư viện và công cụ để bạn có thể tập trung vào việc sáng tạo ý tưởng thay vì lo lắng về hạ tầng.
              </p>
              <button className="rounded-full bg-emerald-500 px-8 py-4 font-bold text-zinc-950 transition-transform hover:scale-105 active:scale-95">Xem Tài Liệu Ngay</button>
            </div>
            <div className="rounded-2xl bg-zinc-800 p-6 font-mono text-sm text-emerald-400 dark:bg-zinc-950">
              <div className="flex gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <p>{"// Install MintyMDT"}</p>
              <p className="text-zinc-500">npm install @neko/minty-mdt</p>
              <br />
              <p>{"import { createNeko } from '@neko/core';"}</p>
              <p>{"const app = createNeko();"}</p>
              <p>{"app.start();"}</p>
            </div>
          </div>
          {/* Decorative background element */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-[100px]" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />
        </section>
      </div>
    </div>
  );
}
