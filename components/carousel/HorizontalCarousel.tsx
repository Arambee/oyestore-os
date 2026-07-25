"use client";

import { ReactNode } from "react";

interface HorizontalCarouselProps {
  title: string;
  action?: ReactNode;
  children: ReactNode;
}

export default function HorizontalCarousel({
  title,
  action,
  children,
}: HorizontalCarouselProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-4xl font-black text-white">
            {title}
          </h2>

          {action}
        </div>

        <div className="flex gap-6 overflow-x-auto scroll-smooth pb-4">
          {children}
        </div>

      </div>
    </section>
  );
}