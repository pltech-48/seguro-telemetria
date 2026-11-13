import { Pressable, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';

import { colors, fontSizes, radii, spacing, touchTarget } from '@/theme/tokens';

import { AppText } from './AppText';

type PillProps = {
  label: string;
  onPress?: () => void;
  /** Stretch to fill a row and centre the label. */
  block?: boolean;
  style?: StyleProp<ViewStyle>;
};

/** Outlined, rounded secondary action (`.pill`). */
export function Pill({ label, onPress, block, style }: PillProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.pill, block && styles.pillBlock, pressed && styles.pressed, style]}
    >
      <AppText weight="semibold" size={fontSizes.body} color={colors.primary} numberOfLines={1}>
        {label}
      </AppText>
    </Pressable>
  );
}

type ButtonProps = {
  label: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  /** Drop the screen gutter, e.g. when the button sits inside a card. */
  flush?: boolean;
  style?: StyleProp<ViewStyle>;
};

/** Full-width call to action (`.btn`). */
export function Button({ label, onPress, variant = 'primary', flush, style }: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        variant === 'secondary' && styles.secondary,
        variant === 'danger' && styles.danger,
        flush && styles.flush,
        pressed && styles.pressed,
        style,
      ]}
    >
      <AppText
        weight="semibold"
        size={fontSizes.button}
        color={variant === 'secondary' ? colors.primary : colors.onPrimary}
      >
        {label}
      </AppText>
    </Pressable>
  );
}

/** Centred text link (e.g. "Esta viagem não é minha"). */
export function TextLink({ label, onPress }: { label: string; onPress?: () => void }) {
  return (
    <Pressable
      accessibilityRole="link"
      onPress={onPress}
      style={({ pressed }) => [styles.link, pressed && styles.pressed]}
    >
      <AppText weight="semibold" size={fontSizes.caption} color={colors.primary} align="center">
        {label}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pill: {
    minHeight: touchTarget,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: radii.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillBlock: { flex: 1 },
  button: {
    minHeight: touchTarget,
    borderRadius: radii.pill,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: spacing.gutter,
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  secondary: {
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  danger: { backgroundColor: colors.danger },
  flush: { marginHorizontal: 0, marginBottom: 0 },
  link: { minHeight: touchTarget, justifyContent: 'center', paddingHorizontal: 8 },
  pressed: { opacity: 0.7 },
});
