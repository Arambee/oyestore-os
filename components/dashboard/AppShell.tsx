"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

import Footer from "@/components/home/Footer";

import MobileTabBar from "./MobileTabBar";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

interface AppShellProps {
  children: ReactNode;
  rightRail?: ReactNode;
}

const VIEWPORT_TOP_OFFSET_PX = 80; // matches top-16 + a bit of breathing room

export default function AppShell({ children, rightRail }: AppShellProps) {
  const mainRef = useRef<HTMLElement>(null);
  const [railMaxHeight, setRailMaxHeight] = useState<number>();

  useEffect(() => {
    const node = mainRef.current;
    if (!node) return;

    const measure = () => {
      const mainHeight = node.getBoundingClientRect().height;
      const viewportCap = window.innerHeight - VIEWPORT_TOP_OFFSET_PX;
      if (mainHeight > 0 && viewportCap > 0) {
        setRailMaxHeight(Math.min(mainHeight, viewportCap));
      }
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(node);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const rowStyle = railMaxHeight
    ? ({ "--rail-max-h": `${Math.floor(railMaxHeight)}px` } as CSSProperties)
    : undefined;

  return (
    <div className="relative min-h-screen bg-background">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 -top-40 size-[32rem] rounded-full bg-white/[0.04] blur-[120px]" />
        <div className="absolute right-0 top-1/3 size-[28rem] rounded-full bg-white/[0.03] blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 size-[24rem] rounded-full bg-white/[0.03] blur-[120px]" />
      </div>

      <div className="relative pb-40 lg:pb-0">
        <TopBar />

        <div
          className="mx-auto flex max-w-[1800px] items-start gap-5 px-4 lg:px-6"
          style={rowStyle}
        >
          <Sidebar />

          <main
            ref={mainRef}
            className="min-w-0 flex-1 space-y-10 px-6 py-8"
          >
            {children}
          </main>

          {rightRail}
        </div>

        <Footer />
      </div>

      <MobileTabBar />
    </div>
  );
}
