"use client";

import { Layers, Zap, Code, Feather, GitBranch, ArrowRight, X, Check, Package, Server } from "lucide-react";
import { AbstractBackground } from "@/components/app/abstract-background";
import { SystemFooter } from "@/components/app/system-footer";

export default function MintyMDTPage() {
  const features = [
    {
      icon: <Feather className="text-purple-600 dark:text-purple-400" />,
      title: "Dependency Injection",
      description:
        "Powered by Feather for seamless dependency management. Eliminate static instances and spaghetti code for a cleaner, testable architecture.",
    },
    {
      icon: <Zap className="text-yellow-600 dark:text-yellow-400" />,
      title: "Ultra Lightweight",
      description:
        "~64KB footprint. No heavy reflection, no runtime magic. Optimized for both small private servers and massive networks.",
    },
    {
      icon: <Code className="text-blue-600 dark:text-blue-400" />,
      title: "Anti-Boilerplate",
      description:
        "Leverages Java 21 features (records, pattern matching) to slash verbose code. Focus on your logic, not the ceremony.",
    },
    {
      icon: <Server className="text-emerald-600 dark:text-emerald-400" />,
      title: "Built-in Ecosystem",
      description:
        "Includes State Manager, Event System, and Snapshot/Rollback capabilities out of the box. Use what you need, ignore what you don't.",
    },
    {
      icon: <Package className="text-orange-600 dark:text-orange-400" />,
      title: "Native Java 21 Utilities",
      description:
        "No reinventing the wheel. Built on standard Java APIs so new developers can hit the ground running without learning a custom DSL.",
    },
    {
      icon: <GitBranch className="text-zinc-600 dark:text-zinc-400" />,
      title: "100% Open Source",
      description:
        "Transparent, community-driven, and free from lock-in. Fork it, mod it, extend it—it's your infrastructure.",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-transparent text-zinc-900 dark:text-zinc-100 selection:bg-emerald-500/30">
      <AbstractBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 md:px-12 lg:pt-32">
        {/* Hero Section */}
        <header className="mb-32 flex flex-col items-center text-center">
          <div className="mb-8 flex items-center justify-center rounded-3xl bg-white/50 dark:bg-zinc-900/50 p-6 shadow-2xl shadow-emerald-500/20 backdrop-blur-xl ring-1 ring-zinc-200 dark:ring-white/10">
            <Layers size={48} className="text-emerald-600 dark:text-emerald-400" />
          </div>

          <h1 className="mb-8 max-w-4xl text-6xl font-black tracking-tight md:text-8xl text-zinc-900 dark:text-white">
            <span className="block">MintyMDT</span>
            <span className="bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Version 3
            </span>
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-xl font-medium text-zinc-600 dark:text-zinc-400 md:text-2xl">
            The ultra-lightweight server framework for Mindustry. <br />
            Engineered for{" "}
            <span className="text-zinc-900 dark:text-white underline decoration-emerald-500 decoration-4 underline-offset-4">
              Developer Experience
            </span>
            .
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <button className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-zinc-900 dark:bg-white px-10 py-4 font-bold text-white dark:text-zinc-950 transition-all hover:scale-105 hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-xl shadow-emerald-500/10">
              <span className="relative z-10">Get Started</span>
              <ArrowRight size={20} className="relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-linear-to-r from-emerald-400 to-cyan-400 opacity-0 transition-opacity group-hover:opacity-20" />
            </button>
            <button className="flex items-center justify-center gap-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 px-10 py-4 font-bold text-zinc-900 dark:text-white backdrop-blur-md transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800">
              <GitBranch size={20} />
              <span>View Source</span>
            </button>
          </div>
        </header>

        {/* The "Why" Section */}
        <section className="mb-32">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white/40 dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 p-8 md:p-16 shadow-2xl backdrop-blur-sm">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[128px]" />

            <div className="relative z-10 grid gap-16 lg:grid-cols-2">
              <div>
                <h2 className="mb-8 text-4xl font-bold leading-tight text-zinc-900 dark:text-white md:text-5xl">
                  Why define logic <br />
                  <span className="text-emerald-600 dark:text-emerald-400">the hard way?</span>
                </h2>
                <ul className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400">
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-500">
                      <X size={14} strokeWidth={3} />
                    </div>
                    <span>Spaghetti logic tangled in `Events.on` and `init()` blocks.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-500">
                      <X size={14} strokeWidth={3} />
                    </div>
                    <span>Global state everywhere. Impossible to test, harder to maintain.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-500">
                      <X size={14} strokeWidth={3} />
                    </div>
                    <span>Adding features = adding more static singletons.</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-center gap-6 rounded-2xl bg-white/60 dark:bg-zinc-950/50 p-8 ring-1 ring-zinc-200 dark:ring-white/5 backdrop-blur-md shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                    <Check size={24} strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">The Solution</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Modern Architecture</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                  MintyMDT acts as an organizational layer. It separates services, manages lifecycles, and
                  standardizes state without overwhelming the core game logic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-32">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-white/5 bg-white/40 dark:bg-zinc-900/40 p-8 backdrop-blur-sm transition-all hover:bg-white/60 dark:hover:bg-zinc-800/40 hover:scale-[1.02] shadow-sm hover:shadow-xl">
                <div className="absolute inset-0 bg-linear-to-br from-white/40 to-transparent dark:from-white/5 dark:to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white dark:bg-zinc-950 ring-1 ring-zinc-200 dark:ring-white/10 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-white">{feature.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Section (Code) */}
        <section className="mb-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1 relative rounded-2xl bg-zinc-900 p-6 shadow-2xl ring-1 ring-zinc-200 dark:ring-white/10 transform transition-transform hover:scale-[1.01] duration-500">
              <div className="absolute -top-12 -left-12 h-64 w-64 rounded-full bg-purple-500/10 blur-[80px]" />
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-4">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-zinc-500">PlayerService.java</span>
              </div>

              <pre className="overflow-x-auto text-sm font-mono leading-relaxed">
                <code className="text-zinc-300">
                  <span className="text-[#ff7b72]">public</span> <span className="text-[#ff7b72]">class</span>{" "}
                  <span className="text-[#d2a8ff]">PlayerService</span>{" "}
                  <span className="text-[#e6edf3]">{`{`}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#8b949e]">{`// Clean Dependency Injection`}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#d2a8ff]">@Inject</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#ff7b72]">public</span>{" "}
                  <span className="text-[#d2a8ff]">PlayerService</span>
                  <span className="text-[#e6edf3]">(</span>
                  {"\n"}
                  {"    "}
                  <span className="text-[#79c0ff]">EventBus</span> <span className="text-[#e6edf3]">events,</span>
                  {"\n"}
                  {"    "}
                  <span className="text-[#79c0ff]">StateManager</span>{" "}
                  <span className="text-[#e6edf3]">state</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#e6edf3]">) {`{`}</span>
                  {"\n"}
                  {"    "}
                  <span className="text-[#ff7b72]">this</span>
                  <span className="text-[#e6edf3]">.events = events;</span>
                  {"\n"}
                  {"    "}
                  <span className="text-[#ff7b72]">this</span>
                  <span className="text-[#e6edf3]">.state = state;</span>
                  {"\n"}
                  {"  "}
                  <span className="text-[#e6edf3]">{`}`}</span>
                  {"\n"}
                  <span className="text-[#e6edf3]">{`}`}</span>
                </code>
              </pre>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                  Paradigm Shift: <br />
                  <span className="text-purple-600 dark:text-purple-400">Dependency Injection</span>
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Stop calling{" "}
                  <code className="rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 text-zinc-700 dark:text-zinc-300 text-sm font-mono">
                    Vars.xxx
                  </code>{" "}
                  globally. With MintyMDT, every service requests exactly what it needs.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-white/50 dark:bg-zinc-900/50 p-4 ring-1 ring-zinc-200 dark:ring-white/5 backdrop-blur-sm">
                  <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Testability</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Mock dependencies effortlessly. Unit test your logic without booting up the entire game server.
                  </p>
                </div>
                <div className="rounded-xl bg-white/50 dark:bg-zinc-900/50 p-4 ring-1 ring-zinc-200 dark:ring-white/5 backdrop-blur-sm">
                  <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Clarity</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Constructor signatures tell you exactly what a component does and what it touches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-24 overflow-hidden rounded-3xl border border-zinc-200 dark:border-white/5 bg-white/40 dark:bg-zinc-900/30 backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-white/5 bg-white/50 dark:bg-white/5">
                  <th className="p-6 text-lg font-bold text-red-500 dark:text-red-400 w-1/2">Vanilla Mindustry</th>
                  <th className="p-6 text-lg font-bold text-emerald-600 dark:text-emerald-400 w-1/2">
                    MintyMDT v3
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-white/5">
                <tr>
                  <td className="p-6 text-zinc-600 dark:text-zinc-400">Boilerplate Heavy</td>
                  <td className="p-6 font-medium text-zinc-900 dark:text-white">Anti-boilerplate</td>
                </tr>
                <tr>
                  <td className="p-6 text-zinc-600 dark:text-zinc-400">Global Static State</td>
                  <td className="p-6 font-medium text-zinc-900 dark:text-white">Scope-managed DI</td>
                </tr>
                <tr>
                  <td className="p-6 text-zinc-600 dark:text-zinc-400">Tangled Logic</td>
                  <td className="p-6 font-medium text-zinc-900 dark:text-white">Decoupled Services</td>
                </tr>
                <tr>
                  <td className="p-6 text-zinc-600 dark:text-zinc-400">Hard to Scale</td>
                  <td className="p-6 font-medium text-zinc-900 dark:text-white">Scalable Architecture</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Footer Integration */}
      <SystemFooter />
    </div>
  );
}
