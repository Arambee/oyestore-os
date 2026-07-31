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
      className="group relative h-44 w-[82vw] shrink-0 snap-start overflow-hidden rounded-3xl sm:w-72"
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(min-width: 640px) 288px, 82vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

      {badge && (
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-card/70 px-3 py-1 text-[11px] font-medium tracking-wide text-platinum backdrop-blur-xl">
          {badge}
        </span>
      )}

      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-lg font-black leading-tight text-pearl">{title}</h3>
        {subtitle && (
          <p className="mt-1 line-clamp-2 text-xs text-white/70">{subtitle}</p>
        )}
      </div>
    </Link>
  );
}
