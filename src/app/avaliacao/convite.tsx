import { router } from 'expo-router';
import { StyleSheet } from 'react-native';

import { Badge, Button, Card, Grow, Muted, Pill, Row, Screen, Strong } from '@/components';

const steps = [
  { title: 'Ative a telemetria', description: 'Usamos os sensores do seu celular' },
  { title: 'Dirija [Y] km', description: 'Em até [N] dias, no seu ritmo' },
  { title: 'Receba sua nota e proposta', description: 'Preço personalizado pela sua condução' },
];

/** Modelo A · Try-before-you-buy: convite. */
export default function ConviteScreen() {
  return (
    <Screen
      title="Dirija e descubra seu seguro"
      subtitle="Sem compromisso: você só contrata se gostar do preço"
      footer={
        <>
          <Button label="Ativar telemetria" onPress={() => router.push('/avaliacao/progresso')} />
          <Button variant="secondary" label="Agora não" onPress={() => router.back()} />
        </>
      }
    >
      <Card>
        <Strong>Como funciona</Strong>
        {steps.map((step, i) => (
          <Row key={step.title} justify="start" style={styles.step}>
            <Badge size={36}>{String(i + 1)}</Badge>
            <Grow>
              <Strong>{step.title}</Strong>
              <Muted>{step.description}</Muted>
            </Grow>
          </Row>
        ))}
      </Card>
      <Card>
        <Strong>Permissões necessárias</Strong>
        <Muted style={styles.gap}>
          Localização e movimento do celular, só durante as viagens. Você pode desativar quando quiser.
        </Muted>
      </Card>
      <Card row>
        <Grow>
          <Strong>Seus dados, seu controle</Strong>
          <Muted>Veja o que coletamos e pause quando quiser</Muted>
        </Grow>
        <Pill label="Ver" onPress={() => router.push('/privacidade')} />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  step: { paddingVertical: 8 },
  gap: { marginTop: 6 },
});
