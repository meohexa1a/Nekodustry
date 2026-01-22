export default function Home() {
  return (
    <div className="animated-gradient flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Chào mừng đến với Nekodustry!
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Nekodustry là một dự án mới hợp tác với cộng đồng Mindustry Tool.
            Chúng tôi mong muốn cung cấp các công cụ, sự kiện và bảng xếp hạng
            để nâng cao trải nghiệm Mindustry của bạn.
          </p>
        </div>
      </main>
    </div>
  );
}
