import { HandMetal, Trophy, Users, Zap, Sword } from "lucide-react";
import { SystemFooter } from "@/components/app/system-footer";

export default function CataliIoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground font-sans selection:bg-pink-500 selection:text-white relative overflow-hidden transition-colors duration-300">
      <div className="flex-1 relative">
        {/* Background noise/texture that works in both modes - slightly different opacity */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="inline-block animate-bounce">
              <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(236,72,153,0.5)]">
                MAINTENANCE: PREPARING ARENA
              </span>
            </div>

            <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 drop-shadow-sm dark:drop-shadow-2xl">
              catali.io
            </h1>

            <p className="text-2xl md:text-3xl font-medium text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The next generation <span className="text-pink-500 dark:text-pink-400 font-bold">RPG IO</span>{" "}
              experience. Level up, evolve, and dominate the arena.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-12">
              {[
                {
                  icon: Sword,
                  title: "Epic RPG Battles",
                  desc: "Customize your build with infinite combinations.",
                },
                { icon: Zap, title: "Fast-Paced IO", desc: "Jump in instantly. No accounts, pure action." },
                { icon: Trophy, title: "Global Leaderboards", desc: "Climb the ranks and become a legend." },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="bg-white/50 dark:bg-white/5 backdrop-blur-lg border border-black/5 dark:border-white/10 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 shadow-sm dark:shadow-none">
                  <feature.icon className="w-12 h-12 text-pink-500 mb-6 mx-auto" />
                  <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-20">
              <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Coming Soon</p>
              <div className="flex justify-center gap-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-pink-500 rounded-full animate-ping"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SystemFooter />
    </div>
  );
}
