import { StyleSheet, Text, type TextProps, type TextStyle } from 'react-native';

import { colors, fonts, fontSizes, type FontWeight } from '@/theme/tokens';

export type AppTextProps = TextProps & {
  weight?: FontWeight;
  size?: number;
  color?: string;
  /** "muted" is the design's 13px grey helper text (`.m`). */
  variant?: 'body' | 'muted';
  align?: TextStyle['textAlign'];
};

/** Poppins text. Use `weight` (not fontWeight) so Android picks the right font file. */
export function AppText({
  weight = 'regular',
  size,
  color,
  variant = 'body',
  align,
  style,
  ...rest
}: AppTextProps) {
  const muted = variant === 'muted';
  const fontSize = size ?? (muted ? fontSizes.caption : fontSizes.base);
  return (
    <Text
      {...rest}
      style={[
        styles.base,
        {
          fontFamily: fonts[weight],
          fontSize,
          lineHeight: Math.round(fontSize * 1.3),
          color: color ?? (muted ? colors.textMuted : colors.text),
          textAlign: align,
        },
        style,
      ]}
    />
  );
}

/** Bold inline text, the design's `<b>`. */
export function Strong(props: AppTextProps) {
  return <AppText weight="bold" {...props} />;
}

export function Muted(props: AppTextProps) {
  return <AppText variant="muted" {...props} />;
}

const styles = StyleSheet.create({
  base: { includeFontPadding: false },
});
