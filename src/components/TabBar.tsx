import type { BottomTabBarProps } from 'expo-router/js-tabs';
import { Pressable, StyleSheet, View } from 'react-native';

import { PROGRAM_MODEL } from '@/config';
import { colors, fontSizes } from '@/theme/tokens';

import { AppText } from './AppText';
import { Icon, type IconName } from './Icons';

type TabItem = { route: string; label: string; icon: IconName };

const loyaltyTab: TabItem =
  PROGRAM_MODEL === 'cashback'
    ? { route: 'cashback', label: 'Cashback', icon: 'coin' }
    : { route: 'pontos', label: 'Pontos', icon: 'star' };

export const TAB_ITEMS: TabItem[] = [
  { route: 'index', label: 'Início', icon: 'home' },
  { route: 'viagens', label: 'Viagens', icon: 'pin' },
  loyaltyTab,
  { route: 'apolice', label: 'Apólice', icon: 'shield' },
  { route: 'ofertas', label: 'Ofertas', icon: 'grid' },
];

/** Screens pushed inside a tab keep that tab highlighted. */
const PARENT_TAB: Record<string, string> = {
  beneficios: 'index',
  'cashback-regra': 'cashback',
  'cashback-extrato': 'cashback',
};

export function TabBar({ state, navigateToTab, insets }: BottomTabBarProps) {
  const currentName = state.routes[state.index]?.name ?? 'index';
  const activeTab = PARENT_TAB[currentName] ?? currentName;

  return (
    <View style={[styles.bar, { paddingBottom: insets.bottom }]} accessibilityRole="tablist">
      {TAB_ITEMS.map((item) => {
        const active = item.route === activeTab;
        const color = active ? colors.primary : colors.textMuted;
        return (
          <Pressable
            key={item.route}
            accessibilityRole="tab"
            accessibilityState={{ selected: active }}
            accessibilityLabel={item.label}
            onPress={() => {
              const key = state.routes.find((r) => r.name === item.route)?.key;
              if (key) navigateToTab(key);
            }}
            style={[styles.item, active && styles.itemActive]}
          >
            <Icon name={item.icon} color={color} />
            <AppText size={fontSizes.tabLabel} weight={active ? 'bold' : 'regular'} color={color}>
              {item.label}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
    paddingVertical: 8,
    minHeight: 56,
    borderTopWidth: 3,
    borderTopColor: 'transparent',
    marginTop: -1,
  },
  itemActive: { borderTopColor: colors.primary },
});
