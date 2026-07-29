export default function RightPanel() {
  return (
    <aside className="hidden w-[320px] shrink-0 rounded-3xl bg-neutral-900 xl:block">
      <div className="p-6">
        <h2 className="text-xl font-bold text-white">Join Oyestore</h2>
        <p className="mt-2 text-sm text-white/60">
          Sign in to save experiences and book your next season.
        </p>
        <button className="mt-6 w-full rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-105">
          Sign In
        </button>
      </div>
    </aside>
  );
}