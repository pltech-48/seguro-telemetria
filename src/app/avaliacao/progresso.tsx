import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { AppText, BrokerCard, Button, Card, MetricBar, Muted, ProgressBar, Screen, Strong } from '@/components';
import { colors } from '@/theme/tokens';

/** Modelo A · Avaliação em andamento. */
export default function ProgressoScreen() {
  return (
    <Screen
      backLabel="Voltar"
      title="Sua avaliação"
      subtitle="Telemetria ativa"
      footer={<Button variant="secondary" label="Ver viagens" onPress={() => router.push('/viagens')} />}
    >
      <Card>
        <Muted>Quilômetros registrados</Muted>
        <AppText weight="bold" size={36} color={colors.primary}>
          [X]<Muted size={16}> de [Y] km</Muted>
        </AppText>
        <ProgressBar percent={62} accessibilityLabel="Quilômetros registrados" />
        <Muted>Faltam [Z] km para liberar sua nota e proposta</Muted>
        <Muted style={styles.gap}>Prazo: [N] dias · prorrogação [regra]</Muted>
      </Card>
      <Card row>
        <View>
          <Muted>Nota parcial (provisória)</Muted>
          <AppText weight="bold" size={24} color={colors.primary}>
            8,0
          </AppText>
        </View>
        <View style={styles.right}>
          <Muted>Viagens</Muted>
          <Strong>5</Strong>
        </View>
      </Card>
      <Card>
        <Strong>Dicas para uma nota melhor</Strong>
        <MetricBar label="Frenagens suaves" value="8,6" percent={86} />
        <MetricBar label="Sem celular ao volante" value="7,2" percent={72} />
      </Card>
      <BrokerCard message="Dúvidas sobre a avaliação? Seu corretor ajuda" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  gap: { marginTop: 6 },
  right: { alignItems: 'flex-end' },
});
