/**
 * Design tokens taken from the "Seguro com Telemetria" wireframe.
 * Every screen reads colors, radii and type from here — never hard-code hexes.
 */
export const colors = {
  primary: '#0046C0',
  primarySoft: '#E6EDFB',
  background: '#F2F5FA',
  surface: '#FFFFFF',
  border: '#DDE3EE',
  divider: '#EEF1F6',
  text: '#1A1F36',
  textMuted: '#5B6478',
  onPrimary: '#FFFFFF',
  onPrimaryMuted: '#E6EDFB',
  success: '#0A7A4B',
  danger: '#C62828',
} as const;

export const radii = {
  bar: 4,
  icon: 12,
  card: 16,
  pill: 24,
  round: 999,
} as const;

export const spacing = {
  gutter: 16,
  cardPadding: 14,
  cardGap: 10,
} as const;

/** Minimum touch target, per the design's 44px rule. */
export const touchTarget = 44;

export const fonts = {
  regular: 'Poppins_400Regular',
  medium: 'Poppins_500Medium',
  semibold: 'Poppins_600SemiBold',
  bold: 'Poppins_700Bold',
} as const;

export type FontWeight = keyof typeof fonts;

export const fontSizes = {
  tabLabel: 11,
  caption: 13,
  body: 14,
  button: 15,
  base: 16,
  title: 20,
} as const;
