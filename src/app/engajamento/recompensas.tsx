import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { AppText, Button, Card, Grow, InfoRow, Muted, ProgressBar, Screen, Strong } from '@/components';
import { PROGRAM_MODEL } from '@/config';
import { colors } from '@/theme/tokens';

/** D6 · Recompensas da semana. */
export default function RecompensasScreen() {
  return (
    <Screen
      backLabel="Voltar"
      title="Recompensas"
      subtitle="Pequenos ganhos a cada boa viagem"
      footer={
        <Button
          label="Resgatar pontos"
          onPress={() => router.push(PROGRAM_MODEL === 'cashback' ? '/cashback' : '/pontos')}
        />
      }
    >
      <Card row>
        <Grow>
          <Muted>Saldo</Muted>
          <AppText weight="bold" size={32} color={colors.primary}>
            3.420
          </AppText>
        </Grow>
        <View style={styles.right}>
          <Strong color={colors.success}>+[X] hoje</Strong>
          <Muted>pontos</Muted>
        </View>
      </Card>
      <Card>
        <Strong>Ganhe agora</Strong>
        <InfoRow label="Viagem sem celular" value="+[X] pts" />
        <InfoRow label="Nota acima de 9" value="+[X] pts" />
        <InfoRow label="Abrir o resumo da semana" value="+[X] pts ✓" />
      </Card>
      <Card>
        <Strong>Próxima recompensa</Strong>
        <Muted>Cashback de R$ [00]</Muted>
        <ProgressBar percent={68} accessibilityLabel="Próxima recompensa" />
        <Muted>3.420 de [X] pontos</Muted>
      </Card>
      <Card>
        <Muted>Recompensas só contam fora da direção.</Muted>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({ right: { alignItems: 'flex-end' } });
