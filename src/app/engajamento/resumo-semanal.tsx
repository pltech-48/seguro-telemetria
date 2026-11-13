import { router } from 'expo-router';

import { AppText, Button, Card, InfoRow, Muted, ProgressBar, Screen, Strong } from '@/components';
import { colors } from '@/theme/tokens';

/** D1 · Resumo semanal (entry: weekly push). */
export default function ResumoSemanalScreen() {
  return (
    <Screen
      title="Sua semana"
      subtitle="[DD/MM] a [DD/MM]"
      footer={<Button label="Ver desafios do mês" onPress={() => router.push('/engajamento/desafios')} />}
    >
      <Card center>
        <Muted>Nota da semana</Muted>
        <AppText weight="bold" size={44} color={colors.primary}>
          8,4
        </AppText>
        <Muted color={colors.success}>▲ 0,2 em relação à semana anterior</Muted>
      </Card>
      <Card>
        <InfoRow label="Melhor viagem" value="9,3 · terça" />
        <InfoRow label="Quilômetros" value="96 km" />
        <InfoRow label="Pontos ganhos" value="+[X]" />
      </Card>
      <Card>
        <Strong>Meta da semana</Strong>
        <Muted>Zero uso do celular em 5 viagens</Muted>
        <ProgressBar percent={60} accessibilityLabel="Meta da semana" />
        <Muted>3 de 5 viagens</Muted>
      </Card>
      <Card>
        <Strong>Seu ponto de melhora</Strong>
        <Muted>Frenagens: 2 eventos fortes na semana. [dica personalizada]</Muted>
      </Card>
    </Screen>
  );
}
