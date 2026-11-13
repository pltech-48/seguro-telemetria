import { router } from 'expo-router';
import { StyleSheet } from 'react-native';

import { Button, Card, InfoRow, MetricBar, Muted, Screen, Strong } from '@/components';

export default function BeneficiosScreen() {
  return (
    <Screen inTabs title="Telemetria no celular" subtitle="Benefícios e como evoluir">
      <Card>
        <Strong>O que você ganha</Strong>
        <Muted style={styles.gap}>
          {'• Desconto na renovação pela boa condução\n• Cashback e pontos por viagem\n• Feedback para dirigir com mais segurança'}
        </Muted>
      </Card>
      <Card>
        <Strong>Para chegar ao nível Ouro</Strong>
        <MetricBar label="Frenagens suaves" value="70%" percent={70} />
        <MetricBar label="Velocidade" value="90%" percent={90} />
        <MetricBar label="Sem celular ao volante" value="55%" percent={55} />
      </Card>
      <Card>
        <Strong>Se você melhorar</Strong>
        <InfoRow label="Sem celular ao volante" value="+R$ [00]/ano" />
        <InfoRow label="Frenagens mais suaves" value="+R$ [00]/ano" />
        <InfoRow label="Chegar ao nível Ouro" value="+R$ [00]/ano" />
      </Card>
      <Button label="Ver viagens e pontos" onPress={() => router.push('/viagens')} />
    </Screen>
  );
}

const styles = StyleSheet.create({ gap: { marginTop: 6 } });
