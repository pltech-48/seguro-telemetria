import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Card, InfoRow, Muted, ProgressBar, Screen, Strong, TextLink } from '@/components';
import { comingSoon } from '@/lib/actions';
import { colors } from '@/theme/tokens';

const COUNTDOWN_SECONDS = 30;

/** C5 · Alerta de batida. Calls assistance automatically if there is no answer. */
export default function AlertaBatidaScreen() {
  const [remaining, setRemaining] = useState(COUNTDOWN_SECONDS);

  useEffect(() => {
    if (remaining <= 0) {
      // TODO: trigger 24h assistance with location and policy number.
      return;
    }
    const t = setTimeout(() => setRemaining((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [remaining]);

  const close = () => router.back();

  return (
    <Screen
      backLabel="Fechar"
      title="Possível batida detectada"
      subtitle="Estamos aqui com você"
      onBack={close}
      footer={
        <>
          <Button variant="danger" label="Preciso de ajuda" onPress={() => comingSoon('Acionar assistência')} />
          <Button variant="secondary" label="Estou bem" onPress={close} />
          <TextLink label="Ligar para assistência 24h" onPress={() => comingSoon('Ligar para assistência 24h')} />
        </>
      }
    >
      <Card center>
        <Strong size={18}>Você está bem?</Strong>
        <Muted align="center" style={styles.gap}>
          Chamamos a assistência em {remaining} s se não houver resposta
        </Muted>
        <ProgressBar
          percent={(remaining / COUNTDOWN_SECONDS) * 100}
          color={colors.danger}
          accessibilityLabel="Tempo até chamar a assistência"
          style={styles.bar}
        />
      </Card>
      <Card>
        <Strong>Já enviamos</Strong>
        <InfoRow label="Localização" value="[endereço aproximado]" />
        <InfoRow label="Apólice" value="[nº da apólice]" />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  gap: { marginTop: 6 },
  bar: { alignSelf: 'stretch' },
});
