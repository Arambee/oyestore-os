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
      className="glass-dark premium-shadow group overflow-hidden rounded-3xl"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={reference.image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover opacity-70 grayscale transition-all duration-700 group-hover:opacity-90 group-hover:grayscale-0 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <h3 className="absolute bottom-4 left-5 text-2xl font-black text-pearl">{name}</h3>
      </div>
      <div className="p-5">
        <p className="line-clamp-2 text-sm text-muted-foreground">{reference.overview}</p>
        <p className="mt-3 text-xs text-muted-foreground/70">No pages written yet</p>
      </div>
    </Link>
  );
}
