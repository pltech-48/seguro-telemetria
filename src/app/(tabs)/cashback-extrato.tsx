import { StyleSheet, View } from 'react-native';

import { AppText, BrokerCard, Card, Grow, Muted, Pill, Screen, Strong } from '@/components';
import { comingSoon } from '@/lib/actions';
import { colors } from '@/theme/tokens';

const months = [
  { month: 'Outubro', detail: 'Nota 8,0 · 380 km', share: '6,1% do prêmio' },
  { month: 'Setembro', detail: 'Nota 7,6 · 295 km', share: '4,8% do prêmio' },
  { month: 'Agosto', detail: 'Nota 8,4 · 510 km', share: '7,9% do prêmio' },
];

/** Modelo B · Extrato mensal. */
export default function CashbackExtratoScreen() {
  return (
    <Screen inTabs title="Extrato de cashback" subtitle="Últimos meses">
      <Card row>
        <Grow>
          <Muted>Acumulado em 12 meses</Muted>
          <AppText weight="bold" size={28} color={colors.primary}>
            R$ [000,00]
          </AppText>
        </Grow>
        <Pill label="Ver conta" onPress={() => comingSoon('Conta Porto Bank')} />
      </Card>
      {months.map((m) => (
        <Card row key={m.month}>
          <Grow>
            <Strong>{m.month}</Strong>
            <Muted>{m.detail}</Muted>
          </Grow>
          <View style={styles.right}>
            <Strong>R$ [00,00]</Strong>
            <Muted>{m.share}</Muted>
          </View>
        </Card>
      ))}
      <Card>
        <Muted>Crédito automático na sua Conta Porto Bank até o dia [DD] de cada mês.</Muted>
      </Card>
      <BrokerCard message="Dúvidas sobre o cashback? Seu corretor ajuda" />
    </Screen>
  );
}

const styles = StyleSheet.create({ right: { alignItems: 'flex-end' } });
