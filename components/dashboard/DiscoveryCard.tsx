import Image from "next/image";
import Link from "next/link";

interface DiscoveryCardProps {
  href: string;
  image: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function DiscoveryCard({
  href,
  image,
  title,
  subtitle,
  badge,
}: DiscoveryCardProps) {
  return (
    <Link
      href={href}
      className="group premium-shadow relative h-32 w-[46vw] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 sm:h-44 sm:w-72 sm:rounded-3xl"
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 640px) 288px, 46vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

      {badge && (
        <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-full border border-accent-red/30 bg-card/80 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-pearl backdrop-blur-xl sm:left-4 sm:top-4 sm:px-3 sm:py-1 sm:text-[11px]">
          <span className="size-1.5 shrink-0 rounded-full bg-accent-red" />
          {badge}
        </span>
      )}

      <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
        <h3 className="text-sm font-black leading-tight text-pearl sm:text-lg">{title}</h3>
        {subtitle && (
          <p className="mt-1 line-clamp-2 text-[11px] text-white/70 sm:text-xs">{subtitle}</p>
        )}
      </div>
    </Link>
  );
}
