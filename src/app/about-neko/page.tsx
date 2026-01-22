import { User } from "lucide-react";

export default function AboutNekoPage() {
  return (
    <div className="flex min-h-screen w-full flex-col p-8 md:p-12 lg:p-16">
      <div className="mx-auto max-w-4xl space-y-12">
        <header className="space-y-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400">
            <User size={24} />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Về Nekodustry</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">Khám phá câu chuyện đằng sau dự án và tầm nhìn của chúng tôi.</p>
        </header>

        <section className="grid gap-8 sm:grid-cols-2">
          <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-2xl hover:shadow-pink-500/10 dark:border-zinc-800 dark:bg-zinc-900/50">
            <h3 className="mb-3 text-2xl font-semibold">Tầm nhìn</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Nekodustry được xây dựng với mục tiêu mang lại một làn gió mới cho cộng đồng Mindustry, kết hợp giữa công nghệ hiện đại và niềm đam mê trò chơi.
            </p>
          </div>
          <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-2xl hover:shadow-purple-500/10 dark:border-zinc-800 dark:bg-zinc-900/50">
            <h3 className="mb-3 text-2xl font-semibold">Cộng đồng</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Chúng tôi không chỉ là một dự án đơn lẻ, mà là sự nỗ lực chung của Mindustry Tool và những người yêu mến hệ sinh thái này.
            </p>
          </div>
        </section>

        <section className="rounded-3xl bg-gradient-to-br from-pink-500 to-purple-600 p-1">
          <div className="rounded-[calc(1.5rem-1px)] bg-white p-8 dark:bg-zinc-950 md:p-12">
            <h2 className="mb-6 text-3xl font-bold">Tại sao là "Neko"?</h2>
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              "Neko" tượng trưng cho sự nhanh nhẹn, linh hoạt và sự thân thiện. Trong thế giới Mindustry đầy những cỗ máy logic và băng chuyền, Nekodustry mang đến một góc nhìn mềm
              mại hơn nhưng không kém phần mạnh mẽ.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
