import { StyleSheet } from 'react-native';

import { Card, InfoRow, Muted, Screen, Strong } from '@/components';

/** Modelo B · Regra de cálculo. */
export default function CashbackRegraScreen() {
  return (
    <Screen inTabs backLabel="Voltar" title="Como funciona" subtitle="Quanto mais e melhor você dirige, mais ganha">
      <Card>
        <Strong>Cashback mensal</Strong>
        <Muted style={styles.gap}>Prêmio × % da nota × fator de km, limitado a 10% do prêmio.</Muted>
      </Card>
      <Card>
        <Strong>% por nota</Strong>
        <InfoRow label="6,0 a 6,9" value="[X]%" />
        <InfoRow label="7,0 a 7,9" value="[X]%" />
        <InfoRow label="8,0 a 8,9" value="[X]%" />
        <InfoRow label="9,0 a 10" value="até [X]%" />
      </Card>
      <Card>
        <Strong>Fator por km no mês</Strong>
        <InfoRow label="até [X] km" value="[0,0]" />
        <InfoRow label="[X] a [Y] km" value="[0,0]" />
        <InfoRow label="acima de [Y] km" value="[1,0] (teto)" />
      </Card>
      <Card>
        <Strong>Exemplo</Strong>
        <Muted>Nota 8,2 e 412 km → [X]% do prêmio = R$ [00,00]</Muted>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({ gap: { marginTop: 6 } });
