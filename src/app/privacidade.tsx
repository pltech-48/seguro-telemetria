import { useState } from 'react';
import { StyleSheet } from 'react-native';

import { Button, Card, InfoRow, Muted, Screen, Strong, SwitchRow } from '@/components';
import { comingSoon } from '@/lib/actions';

/** C3 · Privacidade e dados. */
export default function PrivacidadeScreen() {
  const [telemetryOn, setTelemetryOn] = useState(true);
  const [shareWithBroker, setShareWithBroker] = useState(false);

  return (
    <Screen
      backLabel="Voltar"
      title="Privacidade e dados"
      subtitle="Você no controle da telemetria"
      footer={
        <>
          <Button variant="secondary" label="Baixar meus dados" onPress={() => comingSoon('Baixar meus dados')} />
          <Button variant="secondary" label="Apagar meus dados" onPress={() => comingSoon('Apagar meus dados')} />
        </>
      }
    >
      <Card>
        <Strong>O que coletamos</Strong>
        <InfoRow label="Localização" value="só durante viagens" />
        <InfoRow label="Movimento do celular" value="aceleração e frenagem" />
        <InfoRow label="Uso do celular" value="com o carro em movimento" />
        <Muted style={styles.gap}>Não coletamos: [lista a definir]</Muted>
      </Card>
      <Card>
        <SwitchRow label="Telemetria ativa" value={telemetryOn} onValueChange={setTelemetryOn} />
        <SwitchRow
          label="Compartilhar nota e alertas com meu corretor"
          value={shareWithBroker}
          onValueChange={setShareWithBroker}
        />
      </Card>
      <Card>
        <Muted>Sua nota só pode ajudar: [regra a validar]. Base legal e prazo de guarda: [LGPD, definir].</Muted>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({ gap: { marginTop: 8 } });
