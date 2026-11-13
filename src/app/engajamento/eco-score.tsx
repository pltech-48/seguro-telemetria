import { AppText, Button, Card, InfoRow, MetricBar, Muted, Screen, Strong } from '@/components';
import { comingSoon } from '@/lib/actions';
import { colors } from '@/theme/tokens';

/** D5 · Eco score. */
export default function EcoScoreScreen() {
  return (
    <Screen
      backLabel="Voltar"
      title="Eco score"
      subtitle="Impacto em combustível e emissões"
      footer={<Button variant="secondary" label="Ver dicas de economia" onPress={() => comingSoon('Dicas de economia')} />}
    >
      <Card center>
        <Muted>Seu eco score</Muted>
        <AppText weight="bold" size={44} color={colors.primary}>
          7,8<Muted size={16}> /10</Muted>
        </AppText>
      </Card>
      <Card>
        <Strong>O que influencia</Strong>
        <MetricBar label="Acelerações suaves" value="82%" percent={82} />
        <MetricBar label="Velocidade constante" value="74%" percent={74} />
      </Card>
      <Card>
        <Strong>Estimativa do mês</Strong>
        <InfoRow label="Combustível economizado" value="[X] L" />
        <InfoRow label="CO₂ evitado" value="[Y] kg" />
      </Card>
      <Card>
        <Muted>Opcional: não altera sua nota nem seu desconto [validar regra].</Muted>
      </Card>
    </Screen>
  );
}
