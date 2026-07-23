import type {
  animations,
  blur,
  borderRadius,
  breakpoints,
  colors,
  glass,
  gradients,
  layout,
  shadows,
  spacing,
  transitions,
  typography,
  utilities,
  zIndex,
} from "@/lib/constants/theme";

export type BrandColor = keyof typeof colors;
export type BrandColorValue = (typeof colors)[BrandColor];

export type SpacingKey = keyof typeof spacing;
export type SpacingValue = (typeof spacing)[SpacingKey];

export type BorderRadiusKey = keyof typeof borderRadius;
export type ShadowKey = keyof typeof shadows;
export type GlassKey = keyof typeof glass;
export type BlurKey = keyof typeof blur;
export type GradientKey = keyof typeof gradients;
export type ZIndexKey = keyof typeof zIndex;
export type BreakpointKey = keyof typeof breakpoints;
export type AnimationKey = keyof typeof animations;
export type UtilityClassKey = keyof typeof utilities;

export type Breakpoint = BreakpointKey;

export type ThemeMode = "dark" | "light";

export type EasingKey = keyof typeof transitions.ease;
export type DurationKey = keyof typeof transitions.duration;

export type FontFamilyKey = keyof typeof typography.fontFamily;
export type FontSizeKey = keyof typeof typography.fontSize;
export type LineHeightKey = keyof typeof typography.lineHeight;
export type LetterSpacingKey = keyof typeof typography.letterSpacing;

export type LayoutKey = keyof typeof layout;

export interface ThemeTokens {
  colors: typeof colors;
  spacing: typeof spacing;
  borderRadius: typeof borderRadius;
  shadows: typeof shadows;
  glass: typeof glass;
  blur: typeof blur;
  transitions: typeof transitions;
  gradients: typeof gradients;
  zIndex: typeof zIndex;
  breakpoints: typeof breakpoints;
  typography: typeof typography;
  layout: typeof layout;
  animations: typeof animations;
  utilities: typeof utilities;
}
