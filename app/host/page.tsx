import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Camera,
  Check,
  ClipboardList,
  Compass,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/oyestoreforgram/";
const APPLICATION_FORM_URL = "https://forms.gle/RF4dAHzkXZCv4qTT8";
const WHATSAPP_NUMBER = "918400181281";
const WHATSAPP_MESSAGE =
  "Hi! I'm interested in hosting a chapter with Oyestore. Can you share more details on how it works?";
const THEME_COLOR = "#FBBF24";
const MIN_FOLLOWERS = 25000;

function whatsappHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
      />
      <circle
        cx="12"
        cy="12"
        r="4.5"
      />
      <circle
        cx="17.2"
        cy="6.8"
        r="1.1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function OyestoreDot() {
  // A literal "." glyph rendered in a non-default color shifts up off the
  // baseline in this typeface. Drawing the dot as a small circle sidesteps
  // that entirely and guarantees it sits flush on the baseline.
  return (
    <span
      aria-hidden
      className="ml-px inline-block size-[0.16em] shrink-0 rounded-full bg-red-500 align-baseline"
      style={{ animation: "oye-dot-pulse 1.8s ease-in-out infinite" }}
    />
  );
}

export const metadata: Metadata = {
  title: "Host With Us | Oyestore",
  description:
    "Turn your following into a chapter. Apply to host a small-group Oyestore chapter - pick the destination, we handle the logistics, you bring the community.",
};

const whyHost = [
  {
    icon: Sparkles,
    title: "Your chapter, your vision",
    description: "Pick the destination, the theme, the vibe. We handle logistics so you can focus on the experience.",
  },
  {
    icon: Users,
    title: "Built-in community",
    description: "You're not selling seats into a stranger's tour - you're inviting your own audience into something you designed.",
  },
  {
    icon: TrendingUp,
    title: "Grow while you host",
    description: "Every chapter becomes content, community and a track record - for you and for Oyestore.",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Pitch your chapter",
    description: "Tell us the destination, the dates and the story you want to tell. No fixed template - your chapter, your angle.",
  },
  {
    step: "2",
    title: "We build it together",
    description: "Stays, vendors, safety, pricing - we handle the operational weight so you're not running a travel agency on the side.",
  },
  {
    step: "3",
    title: "You host it",
    description: "You're the face of the chapter - the one your community already trusts. We're the crew making sure it runs smoothly.",
  },
  {
    step: "4",
    title: "Everyone leaves with a story",
    description: "The community feed grows, your audience grows, and the next chapter gets easier to fill.",
  },
];

const requirements = [
  `${MIN_FOLLOWERS.toLocaleString()}+ followers on any platform - Instagram, YouTube, wherever your audience actually is`,
  "An audience that trusts your taste in places, not just your face",
  "You've either been to the destination or you're willing to scout it before hosting",
  "You can commit to being present, online and on the ground, for the chapter you host",
];

export default function HostWithUsPage() {
  const waHref = whatsappHref(WHATSAPP_MESSAGE);

  return (
    <div className="relative min-h-screen bg-background">
      <style>{`
        @keyframes oye-dot-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.4); }
        }
      `}</style>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fffff0 1px, transparent 1px), linear-gradient(to bottom, #fffff0 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute -left-40 -top-40 size-[32rem] rounded-full opacity-[0.12] blur-[120px]"
          style={{ backgroundColor: THEME_COLOR }}
        />
        <div className="absolute right-0 top-1/3 size-[28rem] rounded-full bg-[#fffff0]/[0.03] blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 size-[24rem] rounded-full bg-[#fffff0]/[0.03] blur-[120px]" />
      </div>

      <header className="relative mx-auto flex max-w-4xl items-center justify-between px-4 py-6 sm:px-6">
        <Link
          href="/varkala"
          className="flex items-center gap-2 text-lg font-black tracking-tight text-foreground"
        >
          <Image
            src="/brand/oyestore-logo.png"
            alt="Oyestore"
            width={30}
            height={30}
            className="rounded-full"
          />
          <span aria-label="Oyestore.">
            Oyestore<OyestoreDot />
          </span>
        </Link>
        <div className="flex items-center gap-2.5">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Oyestore on Instagram"
            className="flex size-9 items-center justify-center rounded-full border border-[#fffff0]/15 bg-[#fffff0]/5 text-foreground transition hover:bg-[#fffff0]/10"
          >
            <InstagramIcon size={16} />
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className="tricolor-gradient hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition hover:scale-[1.03] sm:flex"
          >
            <MessageCircle size={16} />
            WhatsApp us
          </a>
        </div>
      </header>

      <main className="relative mx-auto max-w-4xl space-y-10 px-4 pb-32 sm:space-y-16 sm:px-6 sm:pb-20">
        <section className="pt-4 sm:pt-8">
          <span
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[#fffff0]/15 bg-card/70 px-3 py-1 text-[11px] font-medium tracking-wider text-platinum backdrop-blur-xl sm:px-4 sm:py-1.5 sm:text-xs"
          >
            <Sparkles
              size={12}
              style={{ color: THEME_COLOR }}
            />
            HOST WITH US
          </span>

          <h1 className="text-gradient mt-4 max-w-2xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
            Turn your following into a chapter.
          </h1>
          <p className="mt-4 max-w-lg text-muted-foreground sm:text-lg">
            You don&apos;t need a travel company to host a trip - you need people who trust you. If they
            already do, let&apos;s build a chapter around it.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            <a
              href={APPLICATION_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-pearl px-5 py-2.5 text-sm font-semibold text-midnight transition hover:scale-[1.03] hover:bg-pearl/90"
            >
              <ClipboardList size={16} />
              Apply to host
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-[#fffff0]/20 bg-[#fffff0]/5 px-5 py-2.5 text-sm font-medium text-pearl backdrop-blur-xl transition hover:bg-[#fffff0]/10"
            >
              See how it works
              <ArrowRight size={14} />
            </a>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          {whyHost.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="glass-dark premium-shadow rounded-2xl p-5"
            >
              <Icon
                size={18}
                className="text-foreground/70"
              />
              <p className="mt-3 font-semibold text-foreground">{title}</p>
              <p className="mt-1.5 text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </section>

        <section id="how-it-works">
          <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
            <Compass size={12} />
            HOW IT WORKS
          </p>
          <div className="mt-4 space-y-3">
            {howItWorks.map(({ step, title, description }) => (
              <div
                key={step}
                className="glass-dark premium-shadow flex gap-4 rounded-2xl p-5"
              >
                <span
                  className="flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={{ backgroundColor: `${THEME_COLOR}26`, color: THEME_COLOR }}
                >
                  {step}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-dark premium-shadow rounded-3xl p-6 sm:p-8">
          <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
            <Camera size={12} />
            WHAT WE LOOK FOR
          </p>
          <ul className="mt-4 space-y-3">
            {requirements.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-foreground/90"
              >
                <Check
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: THEME_COLOR }}
                />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground">
            Every application is reviewed by hand before it&apos;s approved - nothing is automatic.
          </p>
        </section>

        <a
          href={APPLICATION_FORM_URL}
          target="_blank"
          rel="noreferrer"
          className="glass-dark premium-shadow group relative flex items-center justify-between overflow-hidden rounded-3xl p-6 sm:p-8"
        >
          <div className="relative">
            <p className="flex items-center gap-1.5 text-xs font-medium tracking-wider text-platinum">
              <ClipboardList size={12} />
              READY TO HOST?
            </p>
            <h3 className="mt-1 text-2xl font-bold text-pearl sm:text-3xl">Fill out the application</h3>
            <p className="mt-1 text-sm text-pearl/60 sm:text-base">Takes about 5 minutes - reviewed by hand</p>
          </div>
          <ArrowRight
            size={22}
            className="relative shrink-0 text-pearl transition-transform group-hover:translate-x-1"
          />
        </a>

        <p className="text-center text-sm text-muted-foreground">
          Not ready to host yet?{" "}
          <Link
            href="/varkala"
            className="text-foreground underline underline-offset-4 hover:text-pearl"
          >
            See this season&apos;s chapters
          </Link>{" "}
          instead.
        </p>
      </main>

      <a
        href={APPLICATION_FORM_URL}
        target="_blank"
        rel="noreferrer"
        className="fixed inset-x-4 bottom-4 z-20 flex items-center justify-center gap-2 rounded-full bg-pearl px-5 py-3.5 text-sm font-semibold text-midnight shadow-lg transition hover:scale-[1.02] sm:hidden"
      >
        <ClipboardList size={16} />
        Apply to host
      </a>
    </div>
  );
}
