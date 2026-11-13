import { router } from 'expo-router';
import { Linking, StyleSheet } from 'react-native';

import { Button, Card, Muted, Screen, Strong } from '@/components';

/** C6 · Telemetria pausada (location permission revoked). */
export default function TelemetriaPausadaScreen() {
  return (
    <Screen
      title="Seguro Auto · Telemetria"
      subtitle="Viagens não estão sendo registradas"
      footer={
        <>
          <Button label="Reativar permissão" onPress={() => Linking.openSettings()} />
          <Button variant="secondary" label="Manter pausada" onPress={() => router.back()} />
        </>
      }
    >
      <Card>
        <Strong>Telemetria pausada</Strong>
        <Muted style={styles.gap}>Permissão de localização desativada desde [DD/MM].</Muted>
      </Card>
      <Card>
        <Muted>
          Durante a pausa, sua nota e seu cashback não evoluem [regra a definir]. Seu desconto atual é mantido até
          [DD/MM].
        </Muted>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({ gap: { marginTop: 6 } });
