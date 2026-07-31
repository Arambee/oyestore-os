import { ShieldAlert, Users2 } from "lucide-react";

interface SafetyAndCustomsProps {
  safetyNotes: string[];
  customsNotes: string[];
}

export default function SafetyAndCustoms({ safetyNotes, customsNotes }: SafetyAndCustomsProps) {
  if (safetyNotes.length === 0 && customsNotes.length === 0) return null;

  return (
    <section className="grid gap-4 sm:grid-cols-2">
      {safetyNotes.length > 0 && (
        <div className="glass rounded-2xl p-5">
          <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
            <ShieldAlert size={12} />
            SAFETY, HONESTLY
          </p>
          <ul className="mt-3 space-y-2.5">
            {safetyNotes.map((note) => (
              <li
                key={note}
                className="text-sm text-muted-foreground"
              >
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}

      {customsNotes.length > 0 && (
        <div className="glass rounded-2xl p-5">
          <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
            <Users2 size={12} />
            CUSTOMS & ETIQUETTE
          </p>
          <ul className="mt-3 space-y-2.5">
            {customsNotes.map((note) => (
              <li
                key={note}
                className="text-sm text-muted-foreground"
              >
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
