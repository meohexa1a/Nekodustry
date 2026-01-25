import { Calendar, Clock } from 'lucide-react'

export default function LunarNewYearEventPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-8 md:p-12 lg:p-16">
      <div className="mx-auto w-full max-w-2xl space-y-8 text-center">
        <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
          <Calendar size={40} />
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Lunar New Year
        </h1>

        <div className="flex items-center justify-center gap-2 text-xl text-zinc-600 dark:text-zinc-400">
          <Clock size={24} />
          <span>Feb 05, 2026</span>
        </div>

        <div className="mt-8 rounded-2xl bg-zinc-100 p-8 dark:bg-zinc-800">
          <h2 className="mb-4 text-2xl font-semibold text-amber-500">
            Status: Updating
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            The details for this event are currently being updated. Please check
            back later for more information about the Lunar New Year
            festivities.
          </p>
        </div>
      </div>
    </div>
  )
}
