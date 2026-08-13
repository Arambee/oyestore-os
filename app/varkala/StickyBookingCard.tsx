"use client";

import { useEffect, useState } from "react";
import { Check, MessageCircle, Shield } from "lucide-react";

interface StickyBookingCardProps {
  price: string;
  waHref: string;
  advantage: string[];
}

export default function StickyBookingCard({ price, waHref, advantage }: StickyBookingCardProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > 500;
      const footer = document.getElementById("site-footer");
      const footerInView = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
      setVisible(pastHero && !footerInView);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed bottom-6 right-6 z-30 hidden w-80 transition-all duration-300 lg:block ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="glass-dark premium-shadow rounded-2xl p-5">
        <p className="text-2xl font-black text-foreground">{price}</p>

        <a
          href={waHref}
          target="_blank"
          rel="noreferrer"
          className="tricolor-gradient mt-3 flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition hover:scale-[1.02]"
        >
          <MessageCircle size={16} />
          Message us on WhatsApp
        </a>

        <a
          href="#cancellation"
          className="mt-2.5 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground underline decoration-[#fffff0]/20 underline-offset-4 transition hover:text-foreground/80"
        >
          <Shield size={11} />
          Plans change - flexible cancellation
        </a>

        <div className="mt-4 border-t border-[#fffff0]/10 pt-4">
          <p className="text-[11px] font-medium tracking-wider text-platinum">WHY OYESTORE?</p>
          <ul className="mt-2.5 space-y-1.5">
            {advantage.map((point) => (
              <li
                key={point}
                className="flex items-start gap-1.5 text-xs text-foreground/80"
              >
                <Check
                  size={13}
                  className="mt-0.5 shrink-0 text-[#25D366]"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
