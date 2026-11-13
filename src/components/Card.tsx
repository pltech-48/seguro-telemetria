import type { ReactNode } from 'react';
import { Pressable, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { colors, radii, spacing } from '@/theme/tokens';

type CardProps = {
  children: ReactNode;
  /** Lay children out as a space-between row (`.c.r`). */
  row?: boolean;
  /** Dashed border, used for placeholders and locked items. */
  dashed?: boolean;
  /** Drop the horizontal gutter, e.g. inside a grid. */
  flush?: boolean;
  center?: boolean;
  onPress?: () => void;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
};

export function Card({ children, row, dashed, flush, center, onPress, accessibilityLabel, style }: CardProps) {
  const cardStyle = [
    styles.card,
    row && styles.row,
    dashed && styles.dashed,
    flush && styles.flush,
    center && styles.center,
    style,
  ];
  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        style={({ pressed }) => [cardStyle, pressed && styles.pressed]}
      >
        {children}
      </Pressable>
    );
  }
  return <View style={cardStyle}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radii.card,
    padding: spacing.cardPadding,
    marginHorizontal: spacing.gutter,
    marginBottom: spacing.cardGap,
    borderWidth: 1,
    borderColor: colors.border,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  dashed: { borderStyle: 'dashed' },
  flush: { marginHorizontal: 0, marginBottom: 0 },
  center: { alignItems: 'center' },
  pressed: { opacity: 0.7 },
});
