export function AbstractBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-background" aria-hidden="true">
      {/* Base Grid Layer - Static structure */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "4rem 4rem",
        }}
      />

      {/* Floating Blobs - Controlled Instability */}
      <div className="absolute top-[-20%] left-[-10%] h-[50vh] w-[50vh] animate-blob rounded-full bg-indigo-200 opacity-30 mix-blend-multiply blur-3xl filter transition-all duration-1000 dark:bg-indigo-900/30 dark:mix-blend-screen" />
      <div className="animation-delay-2000 absolute top-[20%] right-[-10%] h-[60vh] w-[60vh] animate-blob rounded-full bg-purple-200 opacity-30 mix-blend-multiply blur-3xl filter transition-all duration-1000 dark:bg-purple-900/30 dark:mix-blend-screen" />
      <div className="animation-delay-4000 absolute bottom-[-20%] left-[20%] h-[50vh] w-[50vh] animate-blob rounded-full bg-pink-200 opacity-30 mix-blend-multiply blur-3xl filter transition-all duration-1000 dark:bg-pink-900/30 dark:mix-blend-screen" />

      {/* Noise Overlay - Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
