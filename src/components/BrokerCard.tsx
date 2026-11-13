import { StyleSheet } from 'react-native';

import { comingSoon } from '@/lib/actions';

import { Muted, Strong } from './AppText';
import { Badge } from './Badge';
import { Pill } from './Buttons';
import { Card } from './Card';
import { Grow, Row } from './Row';

type BrokerCardProps = {
  name?: string;
  /** Helper line under the broker's name. */
  message: string;
};

/** Broker shortcut with WhatsApp / Ligar actions (Apólice, A2, A3, B3). */
export function BrokerCard({ name = '[Nome do corretor]', message }: BrokerCardProps) {
  return (
    <Card>
      <Row justify="start">
        <Badge>[C]</Badge>
        <Grow>
          <Strong>{name}</Strong>
          <Muted>{message}</Muted>
        </Grow>
      </Row>
      <Row style={styles.actions}>
        <Pill label="WhatsApp" block onPress={() => comingSoon('WhatsApp')} />
        <Pill label="Ligar" block onPress={() => comingSoon('Ligar')} />
      </Row>
    </Card>
  );
}

const styles = StyleSheet.create({
  actions: { marginTop: 12 },
});
