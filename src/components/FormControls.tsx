import { Pressable, StyleSheet, Switch, TextInput, View, type TextInputProps } from 'react-native';

import { colors, fontSizes, fonts, radii, touchTarget } from '@/theme/tokens';

import { AppText } from './AppText';

type RadioOptionProps = {
  label: string;
  selected: boolean;
  onSelect: () => void;
};

export function RadioOption({ label, selected, onSelect }: RadioOptionProps) {
  return (
    <Pressable
      accessibilityRole="radio"
      accessibilityState={{ checked: selected }}
      onPress={onSelect}
      style={styles.radioRow}
    >
      <View style={[styles.radio, selected && styles.radioOn]}>
        {selected ? <View style={styles.radioDot} /> : null}
      </View>
      <AppText size={fontSizes.body} style={styles.flex}>
        {label}
      </AppText>
    </Pressable>
  );
}

type SwitchRowProps = {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
};

/** Toggle row with divider (privacy / group settings). */
export function SwitchRow({ label, value, onValueChange }: SwitchRowProps) {
  return (
    <View style={styles.switchRow}>
      <AppText size={fontSizes.body} style={styles.flex} nativeID={`sw-${label}`}>
        {label}
      </AppText>
      <Switch
        accessibilityLabel={label}
        value={value}
        onValueChange={onValueChange}
        trackColor={{ true: colors.primary, false: colors.border }}
        thumbColor={colors.surface}
        ios_backgroundColor={colors.border}
      />
    </View>
  );
}

type TextAreaProps = TextInputProps & { label: string };

export function TextArea({ label, style, ...rest }: TextAreaProps) {
  return (
    <View>
      <AppText variant="muted">{label}</AppText>
      <TextInput
        accessibilityLabel={label}
        multiline
        numberOfLines={3}
        textAlignVertical="top"
        placeholderTextColor={colors.textMuted}
        style={[styles.textArea, style]}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  radioRow: { flexDirection: 'row', alignItems: 'center', gap: 12, minHeight: touchTarget },
  radio: {
    width: 20,
    height: 20,
    borderRadius: radii.round,
    borderWidth: 2,
    borderColor: colors.textMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOn: { borderColor: colors.primary },
  radioDot: { width: 10, height: 10, borderRadius: radii.round, backgroundColor: colors.primary },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    minHeight: touchTarget,
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  textArea: {
    marginTop: 6,
    minHeight: 72,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.icon,
    padding: 10,
    fontFamily: fonts.regular,
    fontSize: fontSizes.body,
    color: colors.text,
  },
});
