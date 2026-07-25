import AppShell from "@/components/app-shell/AppShell";

export default function AppPage() {
  return (
    <AppShell>
      <div className="p-10">
        <h1 className="text-5xl font-bold text-white">
          Welcome to Oyestore OS
        </h1>

        <p className="mt-4 text-zinc-400">
          Your travel operating system starts here.
        </p>
      </div>
    </AppShell>
  );
}