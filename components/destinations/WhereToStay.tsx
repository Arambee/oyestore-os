import { BedDouble } from "lucide-react";

import type { StayArea } from "@/lib/types/dashboard";

interface WhereToStayProps {
  areas: StayArea[];
}

export default function WhereToStay({ areas }: WhereToStayProps) {
  if (areas.length === 0) return null;

  return (
    <section>
      <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
        <BedDouble size={12} />
        WHERE TO STAY, BY AREA
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {areas.map((area) => (
          <div
            key={area.area}
            className="glass rounded-2xl p-5"
          >
            <h3 className="font-bold text-foreground">{area.area}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{area.goodFor}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
