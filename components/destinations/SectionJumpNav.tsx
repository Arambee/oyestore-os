interface SectionJumpNavProps {
  sections: { id: string; label: string }[];
}

export default function SectionJumpNav({ sections }: SectionJumpNavProps) {
  return (
    <nav className="scrollbar-none -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="shrink-0 rounded-full bg-white/5 px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
}
