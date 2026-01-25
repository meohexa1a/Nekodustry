export function AbstractBackground() {
  return (
    <div
      className="bg-background fixed inset-0 -z-50 overflow-hidden"
      aria-hidden="true"
    >
      <div className="layout-grid-overlay-big" />

      <div className="animate-blob absolute top-[-20%] left-[-10%] h-[50vh] w-[50vh] rounded-full bg-indigo-200 opacity-30 mix-blend-multiply blur-3xl filter transition-all duration-1000 dark:bg-indigo-900/30 dark:mix-blend-screen" />
      <div className="animation-delay-2000 animate-blob absolute top-[20%] right-[-10%] h-[60vh] w-[60vh] rounded-full bg-purple-200 opacity-30 mix-blend-multiply blur-3xl filter transition-all duration-1000 dark:bg-purple-900/30 dark:mix-blend-screen" />
      <div className="animation-delay-4000 animate-blob absolute bottom-[-20%] left-[20%] h-[50vh] w-[50vh] rounded-full bg-pink-200 opacity-30 mix-blend-multiply blur-3xl filter transition-all duration-1000 dark:bg-pink-900/30 dark:mix-blend-screen" />
    </div>
  )
}
