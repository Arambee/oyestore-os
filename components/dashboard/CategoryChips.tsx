import { categoryChips } from "@/lib/data/dashboard";

export default function CategoryChips() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {categoryChips.map(({ label, icon: Icon }) => (
        <button
          key={label}
          className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition hover:bg-muted"
        >
          <Icon size={16} />
          {label}
        </button>
      ))}
    </div>
  );
}
