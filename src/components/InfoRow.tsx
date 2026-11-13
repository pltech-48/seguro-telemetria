import { StyleSheet, View } from 'react-native';

import { colors, fontSizes } from '@/theme/tokens';

import { Muted, Strong } from './AppText';

/** Label / value line with a hairline divider (definition-list style). */
export function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Muted style={styles.label}>{label}</Muted>
      <Strong size={fontSizes.body} style={styles.value}>
        {value}
      </Strong>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  label: { flexShrink: 1 },
  value: { flexShrink: 1, textAlign: 'right' },
});
