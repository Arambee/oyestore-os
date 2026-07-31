import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

interface PassportStampProps {
  placeName: string;
  stateName: string;
  date: string;
  image: string;
  href: string;
  rotate: number;
}

export default function PassportStamp({
  placeName,
  stateName,
  date,
  image,
  href,
  rotate,
}: PassportStampProps) {
  return (
    <Link
      href={href}
      style={{ transform: `rotate(${rotate}deg)` }}
      className="group relative w-32 shrink-0 transition-transform duration-300 hover:z-10 hover:rotate-0 hover:scale-110 sm:w-40"
    >
      <div className="absolute -top-2.5 left-1/2 z-10 size-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-white to-platinum shadow-md">
        <div className="absolute inset-0 m-auto size-1.5 rounded-full bg-accent-red" />
      </div>

      <div className="premium-shadow rounded-2xl bg-pearl p-2 pb-3 shadow-xl transition-shadow duration-300 group-hover:shadow-2xl">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={placeName}
            fill
            sizes="160px"
            className="object-cover"
          />
          <div className="absolute right-1.5 top-1.5 flex size-6 items-center justify-center rounded-full bg-accent-red shadow-sm">
            <Check
              size={13}
              strokeWidth={3}
              className="text-pearl"
            />
          </div>
        </div>

        <div className="mt-2 text-center">
          <p className="text-sm font-black uppercase leading-tight tracking-wide text-background">
            {placeName}
          </p>
          <p className="text-[10px] uppercase tracking-widest text-background/50">
            {stateName}
          </p>
          <p className="mt-0.5 text-[10px] text-background/40">{date}</p>
        </div>
      </div>
    </Link>
  );
}
