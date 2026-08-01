import Image from "next/image";
import Link from "next/link";

interface MoodRailItem {
  id: string;
  href: string;
  image: string;
  title: string;
}

interface MoodRailCircularProps {
  title: string;
  subtitle?: string;
  items: MoodRailItem[];
}

export default function MoodRailCircular({ title, subtitle, items }: MoodRailCircularProps) {
  return (
    <section className="lg:hidden">
      <div className="mb-3">
        <h2 className="text-xl font-black text-foreground">{title}</h2>
        {subtitle && <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>}
      </div>

      <div className="scrollbar-none -mx-4 flex snap-x gap-4 overflow-x-auto px-4">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="flex w-16 shrink-0 snap-start flex-col items-center gap-2"
          >
            <div className="rounded-full bg-gradient-to-br from-accent-red to-accent-red/30 p-[2.5px]">
              <div className="relative size-16 overflow-hidden rounded-full border-[3px] border-background">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
            </div>
            <span className="text-center text-[11px] font-semibold leading-tight text-muted-foreground">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
