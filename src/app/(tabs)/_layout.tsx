import { Tabs } from 'expo-router/js-tabs';

import { TabBar } from '@/components/TabBar';
import { PROGRAM_MODEL } from '@/config';

const hidden = { href: null } as const;

export default function TabsLayout() {
  return (
    <Tabs backBehavior="history" tabBar={(props) => <TabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="viagens" />
      {/* Modelo B: the Cashback tab replaces Pontos. */}
      <Tabs.Screen name="pontos" options={PROGRAM_MODEL === 'cashback' ? hidden : undefined} />
      <Tabs.Screen name="cashback" options={PROGRAM_MODEL === 'cashback' ? undefined : hidden} />
      <Tabs.Screen name="apolice" />
      <Tabs.Screen name="ofertas" />
      <Tabs.Screen name="beneficios" options={hidden} />
      <Tabs.Screen name="cashback-regra" options={hidden} />
      <Tabs.Screen name="cashback-extrato" options={hidden} />
    </Tabs>
  );
}
