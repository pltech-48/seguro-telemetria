import { router } from 'expo-router';

import { AppText, Badge, Button, Card, Grow, MetricBar, Muted, Screen, Strong } from '@/components';
import { colors, fontSizes } from '@/theme/tokens';

/** C4 · Resumo pós-viagem (opened from the push sent when the car stops). */
export default function ResumoViagemScreen() {
  return (
    <Screen
      title="Viagem concluída"
      subtitle="Resumo enviado ao parar o carro"
      footer={<Button variant="secondary" label="Ver detalhe da viagem" onPress={() => router.push('/viagem/1')} />}
    >
      <Card row>
        <Badge>P</Badge>
        <Grow>
          <Strong size={fontSizes.caption}>App Porto · agora</Strong>
          <Muted>Viagem concluída: nota 9,1 · +[X] pontos</Muted>
        </Grow>
      </Card>
      <Card center>
        <Muted>Nota desta viagem</Muted>
        <AppText weight="bold" size={44} color={colors.primary}>
          9,1
        </AppText>
        <Muted>+[X] pts · economia +R$ [0,00]</Muted>
      </Card>
      <Card>
        <Strong>Como foi</Strong>
        <MetricBar label="Frenagens" value="8,8" percent={88} />
        <MetricBar label="Velocidade" value="9,4" percent={94} />
        <MetricBar label="Celular" value="8,4" percent={84} />
      </Card>
      <Card>
        <Muted>Sequência: 3 viagens seguidas acima de 8. Na próxima: [dica].</Muted>
      </Card>
    </Screen>
  );
}
