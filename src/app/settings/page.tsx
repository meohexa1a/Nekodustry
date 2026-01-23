import { ThemeToggle } from "./theme-toggle";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your interface and system preferences.</p>
      </div>

      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-row items-center justify-between p-6">
          <div className="space-y-0.5">
            <h2 className="text-base font-semibold">Appearance</h2>
            <p className="text-sm text-muted-foreground">Customize the look and feel of the application.</p>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
