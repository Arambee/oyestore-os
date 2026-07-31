"use client";

import { ReactNode, Ref } from "react";

interface HorizontalCarouselProps {
  title: string;
  subtitle?: ReactNode;
  action?: ReactNode;
  containerRef?: Ref<HTMLDivElement>;
  children: ReactNode;
}

export default function HorizontalCarousel({
  title,
  subtitle,
  action,
  containerRef,
  children,
}: HorizontalCarouselProps) {
  return (
    <section>
      <div className="mx-auto max-w-7xl">

        <div className="mb-4 flex items-center justify-between sm:mb-6">
          <div>
            <h2 className="text-2xl font-black text-foreground sm:text-3xl lg:text-4xl">
              {title}
            </h2>

            {subtitle && (
              <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>

          {action}
        </div>

        <div
          ref={containerRef}
          className="scrollbar-none flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth sm:gap-6"
        >
          {children}
        </div>

      </div>
    </section>
  );
}
