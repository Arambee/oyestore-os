/**
 * Oyestore Design System - TypeScript Design Tokens
 * Mirrors CSS custom properties in styles/theme.css for programmatic use.
 */

export const colors = {
  midnight: "#000329",
  accentRed: "#C8102E",
  pearl: "#F8F9FB",
  platinum: "#D9D9D9",
  slate: "#1F2937",
} as const;

export const spacing = {
  0: "0",
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
} as const;

export const borderRadius = {
  none: "0",
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.625rem",
  xl: "0.875rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  "4xl": "2rem",
  full: "9999px",
} as const;

export const shadows = {
  xs: "var(--shadow-xs)",
  sm: "var(--shadow-sm)",
  md: "var(--shadow-md)",
  lg: "var(--shadow-lg)",
  xl: "var(--shadow-xl)",
  "2xl": "var(--shadow-2xl)",
  premium: "var(--shadow-premium)",
  glowAccent: "var(--shadow-glow-accent)",
  inner: "var(--shadow-inner)",
} as const;

export const glass = {
  bg: "var(--glass-bg)",
  bgDark: "var(--glass-bg-dark)",
  border: "var(--glass-border)",
  borderDark: "var(--glass-border-dark)",
  blur: "16px",
  blurHeavy: "24px",
} as const;

export const blur = {
  none: "0",
  sm: "4px",
  md: "8px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px",
} as const;

export const transitions = {
  ease: {
    default: "cubic-bezier(0.4, 0, 0.2, 1)",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    premium: "cubic-bezier(0.22, 1, 0.36, 1)",
  },
  duration: {
    instant: "75ms",
    fast: "150ms",
    base: "250ms",
    slow: "400ms",
    slower: "600ms",
    slowest: "800ms",
  },
} as const;

export const gradients = {
  hero: "var(--gradient-hero)",
  heroRadial: "var(--gradient-hero-radial)",
  text: "var(--gradient-text)",
  premium: "var(--gradient-premium)",
  border: "var(--gradient-border)",
  surface: "var(--gradient-surface)",
} as const;

export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
  toast: 1700,
  max: 9999,
} as const;

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export const typography = {
  fontFamily: {
    heading: "var(--font-heading)",
    body: "var(--font-body)",
    accent: "var(--font-accent)",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
  },
  lineHeight: {
    tight: 1.15,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
  },
  letterSpacing: {
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
} as const;

export const layout = {
  containerMax: "1280px",
  containerPadding: spacing[6],
  sectionPaddingY: spacing[20],
  sectionPaddingYSm: spacing[12],
} as const;

export const animations = {
  fadeIn: "animate-fade-in",
  fadeOut: "animate-fade-out",
  slideUp: "animate-slide-up",
  slideDown: "animate-slide-down",
  slideInLeft: "animate-slide-in-left",
  slideInRight: "animate-slide-in-right",
  scaleIn: "animate-scale-in",
  shimmer: "animate-shimmer",
  glowPulse: "animate-glow-pulse",
  glowAccent: "animate-glow-accent",
  spinSlow: "animate-spin-slow",
  float: "animate-float",
  gradientShift: "animate-gradient-shift",
} as const;

export const utilities = {
  glass: "glass",
  glassDark: "glass-dark",
  premiumBorder: "premium-border",
  premiumShadow: "premium-shadow",
  heroGradient: "hero-gradient",
  textGradient: "text-gradient",
  sectionPadding: "section-padding",
  containerPremium: "container-premium",
} as const;

export const theme = {
  colors,
  spacing,
  borderRadius,
  shadows,
  glass,
  blur,
  transitions,
  gradients,
  zIndex,
  breakpoints,
  typography,
  layout,
  animations,
  utilities,
} as const;

export default theme;
