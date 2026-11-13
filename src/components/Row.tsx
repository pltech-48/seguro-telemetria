import type { ReactNode } from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

type RowProps = {
  children: ReactNode;
  /** "between" (default) or "start" alignment of children. */
  justify?: 'between' | 'start';
  gap?: number;
  style?: StyleProp<ViewStyle>;
};

/** Horizontal flex row (`.r`). */
export function Row({ children, justify = 'between', gap = 12, style }: RowProps) {
  return (
    <View
      style={[
        styles.row,
        { gap, justifyContent: justify === 'between' ? 'space-between' : 'flex-start' },
        style,
      ]}
    >
      {children}
    </View>
  );
}

/** Column that takes remaining space in a row so text wraps instead of pushing siblings. */
export function Grow({ children, style }: { children: ReactNode; style?: StyleProp<ViewStyle> }) {
  return <View style={[styles.grow, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  grow: { flex: 1, flexShrink: 1 },
});
