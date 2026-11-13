import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import type { ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, fontSizes, spacing } from '@/theme/tokens';

import { AppText } from './AppText';

type ScreenProps = {
  title: string;
  subtitle?: string;
  /** Back link text, e.g. "App Porto", "Voltar", "Viagens". */
  backLabel?: string;
  /** Defaults to navigating back. */
  onBack?: () => void;
  children: ReactNode;
  /** Actions pinned under the content (the design's `margin-top:auto` block). */
  footer?: ReactNode;
  /** True when the screen sits above the tab bar (it already pads the bottom inset). */
  inTabs?: boolean;
};

export function Screen({ title, subtitle, backLabel = 'App Porto', onBack, children, footer, inTabs }: ScreenProps) {
  const insets = useSafeAreaInsets();

  const handleBack = () => {
    if (onBack) return onBack();
    if (router.canGoBack()) return router.back();
    // "App Porto" leaves the insurance module for the host bank app.
    // TODO: hook into the host app's exit handler.
  };

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <View style={[styles.header, { paddingTop: insets.top + 18 }]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Voltar para ${backLabel}`}
          onPress={handleBack}
          hitSlop={12}
          style={styles.back}
        >
          <AppText size={fontSizes.caption} color={colors.onPrimary}>
            ‹ {backLabel}
          </AppText>
        </Pressable>
        <AppText accessibilityRole="header" weight="bold" size={fontSizes.title} color={colors.onPrimary} style={styles.title}>
          {title}
        </AppText>
        {subtitle ? (
          <AppText size={fontSizes.caption} color={colors.onPrimaryMuted}>
            {subtitle}
          </AppText>
        ) : null}
      </View>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[styles.content, !inTabs && { paddingBottom: insets.bottom }]}
      >
        {children}
        {footer ? <View style={styles.footer}>{footer}</View> : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  back: { alignSelf: 'flex-start', minHeight: 20, justifyContent: 'center' },
  title: { marginTop: 10, marginBottom: 2 },
  scroll: { flex: 1 },
  content: { flexGrow: 1, paddingTop: spacing.gutter },
  footer: { marginTop: 'auto', paddingTop: 8 },
});

/** Two-column grid of cards (`.g`). */
export function Grid({ children }: { children: ReactNode }) {
  return <View style={gridStyles.grid}>{children}</View>;
}

/** Wraps one grid cell so two fit per row with a 12px gap. */
export function GridItem({ children }: { children: ReactNode }) {
  return <View style={gridStyles.item}>{children}</View>;
}

const gridStyles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    paddingHorizontal: spacing.gutter,
    marginBottom: spacing.cardGap,
  },
  item: { width: '47.9%', flexGrow: 1 },
});

