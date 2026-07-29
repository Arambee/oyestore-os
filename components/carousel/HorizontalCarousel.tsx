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
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-black text-foreground">
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
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
        >
          {children}
        </div>

      </div>
    </section>
  );
}
