import type { ReactNode } from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { colors, radii } from '@/theme/tokens';

import { AppText } from './AppText';

type BadgeProps = {
  /** Text content (score, initial, step number) or an icon. */
  children?: ReactNode;
  size?: number;
  /** Empty dashed slot, e.g. a streak step not yet reached. */
  empty?: boolean;
  style?: StyleProp<ViewStyle>;
};

/** Round soft-blue badge (`.bd`). */
export function Badge({ children, size = 48, empty, style }: BadgeProps) {
  return (
    <View
      style={[
        styles.badge,
        { width: size, height: size },
        empty && styles.empty,
        style,
      ]}
    >
      {typeof children === 'string' || typeof children === 'number' ? (
        <AppText weight="bold" color={colors.primary}>
          {children}
        </AppText>
      ) : (
        children
      )}
    </View>
  );
}

/** Dashed square standing in for a product illustration (`.ic`). */
export function IconPlaceholder() {
  return <View style={styles.icon} accessibilityElementsHidden importantForAccessibility="no" />;
}

/** Small outlined tag, e.g. "Patrocinado". */
export function Tag({ label }: { label: string }) {
  return (
    <View style={styles.tag}>
      <AppText variant="muted">{label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: radii.round,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  empty: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.primary,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: radii.icon,
    backgroundColor: colors.primarySoft,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.primary,
    marginBottom: 10,
  },
  tag: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.icon,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
});
