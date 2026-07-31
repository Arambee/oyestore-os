import Image from "next/image";
import Link from "next/link";

import type { StateReference } from "@/lib/types/dashboard";

interface StubStateCardProps {
  stateId: string;
  name: string;
  reference: StateReference;
}

export default function StubStateCard({ stateId, name, reference }: StubStateCardProps) {
  return (
    <Link
      href={`/destinations/${stateId}`}
      className="glass-dark premium-shadow group overflow-hidden rounded-2xl sm:rounded-3xl"
    >
      <div className="relative h-28 w-full overflow-hidden sm:h-56">
        <Image
          src={reference.image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 33vw, 50vw"
          className="object-cover opacity-70 grayscale transition-all duration-700 group-hover:opacity-90 group-hover:grayscale-0 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <h3 className="absolute bottom-2 left-3 text-sm font-black text-pearl sm:bottom-4 sm:left-5 sm:text-2xl">{name}</h3>
      </div>
      <div className="p-3 sm:p-5">
        <p className="line-clamp-2 text-xs text-muted-foreground sm:text-sm">{reference.overview}</p>
        <p className="mt-2 text-[10px] text-muted-foreground/70 sm:mt-3 sm:text-xs">No pages written yet</p>
      </div>
    </Link>
  );
}
