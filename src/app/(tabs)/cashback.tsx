import { router } from 'expo-router';

import { AppText, Card, Grow, InfoRow, MetricBar, Muted, Pill, ProgressBar, Row, Screen, Strong } from '@/components';
import { colors } from '@/theme/tokens';

/** Modelo B · Cashback do mês. */
export default function CashbackScreen() {
  return (
    <Screen inTabs title="Cashback do mês" subtitle="Novembro · até 10% do prêmio">
      <Card>
        <Muted>Cashback acumulado no mês</Muted>
        <AppText weight="bold" size={40} color={colors.primary}>
          R$ [00,00]
        </AppText>
        <ProgressBar percent={68} accessibilityLabel="Cashback em relação ao máximo" />
        <Row>
          <Muted>6,8% do prêmio</Muted>
          <Muted>máx. 10%</Muted>
        </Row>
      </Card>
      <Card>
        <Strong>Como chegou nesse valor</Strong>
        <InfoRow label="Nota de condução" value="8,2" />
        <InfoRow label="Quilômetros no mês" value="412 km" />
        <InfoRow label="Crédito previsto" value="[DD/MM] na Conta Porto Bank" />
      </Card>
      <Card>
        <Strong>Para chegar a 10%</Strong>
        <MetricBar label="Nota 9,0 ou mais" value="8,2" percent={82} />
        <MetricBar label="Mais km no mês" value="412 / [X]" percent={70} />
      </Card>
      <Card row>
        <Grow>
          <Strong>Como é calculado</Strong>
          <Muted>Nota × quilômetros</Muted>
        </Grow>
        <Pill label="Ver regra" onPress={() => router.push('/cashback-regra')} />
      </Card>
    </Screen>
  );
}
