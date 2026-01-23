import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-24 px-4 sm:px-6 lg:px-8 relative z-10">

      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-24 animate-float">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-xs font-mono mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          SYSTEM ONLINE
        </div>

        <h1 className="text-6xl sm:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-zinc-800 to-zinc-400 dark:from-white dark:to-zinc-600 drop-shadow-sm">
          NEKODUSTRY
        </h1>

        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          The next generation infrastructure for Mindustry gaming and tool management.
          <span className="text-indigo-500 font-medium block sm:inline"> Fast. Secure. Scalable.</span>
        </p>
      </div>

      {/* Bento Grid Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">

        {/* Large Card: Game Modes */}
        <Link href="/game-modes" className="group relative col-span-1 md:col-span-2 row-span-2 overflow-hidden rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md p-8 transition-all duration-500 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 h-full flex flex-col justify-between min-h-[200px]">
            <div>
              <h3 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">Game Modes</h3>
              <p className="text-zinc-500 dark:text-zinc-400 max-w-md text-lg">Dive into custom gameplay experiences designed for maximum engagement and replayability.</p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium group-hover:translate-x-2 transition-transform">
              Explore Modes <span className="text-xl">→</span>
            </div>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/30 transition-all duration-500" />
        </Link>

        {/* Card: Events */}
        <Link href="/events" className="group relative overflow-hidden rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md p-6 transition-all duration-500 hover:border-pink-500/50 hover:shadow-2xl hover:shadow-pink-500/10">
           <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
           <div className="relative z-10">
             <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">Events</h3>
             <p className="text-sm text-zinc-500 dark:text-zinc-400">Join community tournaments and seasonal challenges.</p>
           </div>
           <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
        </Link>

        {/* Card: MintyMDT */}
        <Link href="/mintymdt" className="group relative overflow-hidden rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md p-6 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10">
           <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
           <div className="relative z-10">
             <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">MintyMDT</h3>
             <p className="text-sm text-zinc-500 dark:text-zinc-400">Advanced tools for server management and moderation.</p>
           </div>
        </Link>

        {/* Card: Settings */}
        <Link href="/settings" className="group relative md:col-span-2 lg:col-span-3 overflow-hidden rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-500 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10">
            <div className="flex flex-col relative z-10">
               <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">Settings & Config</h3>
               <p className="text-sm text-zinc-500 dark:text-zinc-400">Customize your portal experience and user preferences.</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:rotate-90 transition-transform duration-500 border border-zinc-200 dark:border-zinc-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600 dark:text-zinc-400"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.39a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Link>

      </div>
    </div>
  );
}
