import { router } from 'expo-router';
import { StyleSheet } from 'react-native';

import { Badge, Button, Card, Icon, InfoRow, Muted, Screen, Strong } from '@/components';
import { colors } from '@/theme/tokens';

/** Modelo A · Apólice emitida. */
export default function ApoliceEmitidaScreen() {
  return (
    <Screen
      title="Seguro contratado"
      subtitle="Sua apólice já está ativa"
      onBack={() => router.dismissTo('/')}
      footer={<Button label="Ir para o início do seguro" onPress={() => router.dismissTo('/')} />}
    >
      <Card center>
        <Badge style={styles.check}>
          <Icon name="check" color={colors.primary} size={28} strokeWidth={2.5} />
        </Badge>
        <Strong>Tudo certo!</Strong>
        <Muted align="center">Cobrança no Cartão ou na Conta Porto Bank</Muted>
      </Card>
      <Card>
        <InfoRow label="Nº da apólice" value="[000000000]" />
        <InfoRow label="Vigência" value="[DD/MM/AAAA] a [DD/MM/AAAA]" />
        <InfoRow label="Veículo" value="[marca / modelo]" />
      </Card>
      <Card>
        <Strong>E agora?</Strong>
        <Muted>Sua nota continua sendo calculada e conta na renovação.</Muted>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({ check: { marginBottom: 10 } });
