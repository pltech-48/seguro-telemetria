import { StyleSheet } from 'react-native';

import { BrokerCard, Button, Card, Grow, InfoRow, Muted, Pill, Screen, Strong } from '@/components';
import { comingSoon } from '@/lib/actions';

export default function ApoliceScreen() {
  return (
    <Screen inTabs title="Minha apólice" subtitle="Seguro Auto">
      <Card>
        <InfoRow label="Veículo" value="[marca / modelo]" />
        <InfoRow label="Placa" value="[AAA0A00]" />
        <InfoRow label="Nº da apólice" value="[000000000]" />
        <InfoRow label="Vigência" value="[DD/MM/AAAA] a [DD/MM/AAAA]" />
      </Card>
      <Card>
        <Strong>Coberturas</Strong>
        <Muted style={styles.gap}>Colisão, roubo e furto, terceiros, assistência 24h [conforme apólice]</Muted>
      </Card>
      <Card row>
        <Grow>
          <Strong>Guincho</Strong>
          <Muted>[X] km incluídos</Muted>
        </Grow>
        <Pill label="Aumentar km" onPress={() => comingSoon('Aumentar km de guincho')} />
      </Card>
      <BrokerCard message="Seu corretor · [Corretora] · Susep [000000]" />
      <Button label="Baixar apólice (PDF)" onPress={() => comingSoon('Baixar apólice')} />
      <Button variant="secondary" label="Acionar assistência 24h" onPress={() => comingSoon('Assistência 24h')} />
    </Screen>
  );
}

const styles = StyleSheet.create({ gap: { marginTop: 6 } });
