import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { colors, radii } from '@/theme/tokens';

import { Muted, Strong } from './AppText';
import { Row } from './Row';

type ProgressBarProps = {
  /** 0–100 */
  percent: number;
  color?: string;
  /** Tight spacing used under a MetricBar label. */
  compact?: boolean;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
};

/** Thin rounded progress bar (`.bar`). */
export function ProgressBar({ percent, color = colors.primary, compact, accessibilityLabel, style }: ProgressBarProps) {
  const value = Math.max(0, Math.min(100, percent));
  return (
    <View
      accessibilityRole="progressbar"
      accessibilityLabel={accessibilityLabel}
      accessibilityValue={{ min: 0, max: 100, now: value }}
      style={[styles.track, compact ? styles.compact : styles.regular, style]}
    >
      <View style={[styles.fill, { width: `${value}%`, backgroundColor: color }]} />
    </View>
  );
}

/** Label + value row with a bar underneath (score breakdowns). */
export function MetricBar({ label, value, percent }: { label: string; value: string; percent: number }) {
  return (
    <View style={styles.metric}>
      <Row>
        <Muted>{label}</Muted>
        <Strong>{value}</Strong>
      </Row>
      <ProgressBar percent={percent} compact accessibilityLabel={label} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: { height: 8, borderRadius: radii.bar, backgroundColor: colors.border, overflow: 'hidden' },
  regular: { marginTop: 10, marginBottom: 6 },
  compact: { marginTop: 4 },
  fill: { height: 8, borderRadius: radii.bar },
  metric: { marginTop: 8 },
});
