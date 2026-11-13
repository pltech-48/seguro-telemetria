import { router } from 'expo-router';

import { AppText, BrokerCard, Button, Card, InfoRow, Muted, Screen, Strong } from '@/components';
import { colors } from '@/theme/tokens';

/** Modelo A · Nota final e proposta. */
export default function PropostaScreen() {
  return (
    <Screen
      backLabel="Voltar"
      title="Sua nota final"
      subtitle="Avaliação concluída"
      footer={
        <>
          <Button label="Contratar seguro" onPress={() => router.push('/avaliacao/apolice-emitida')} />
          <Button variant="secondary" label="Decidir depois" onPress={() => router.back()} />
        </>
      }
    >
      <Card center>
        <Muted>Nota de condução</Muted>
        <AppText weight="bold" size={48} color={colors.primary}>
          8,4
        </AppText>
        <Muted>em [Y] km avaliados</Muted>
      </Card>
      <Card>
        <Strong>Seu preço personalizado</Strong>
        <InfoRow label="Sem telemetria" value="R$ [000,00]/mês" />
        <InfoRow label="Com a sua nota" value="R$ [000,00]/mês" />
        <InfoRow label="Cobertura" value="[resumo da apólice]" />
      </Card>
      <Card>
        <Muted>
          Proposta válida até [DD/MM/AAAA]. A telemetria só pode reduzir seu preço [validar regra]. Você pode pausar
          quando quiser.
        </Muted>
      </Card>
      <BrokerCard message="Dúvidas antes de contratar? Fale com seu corretor" />
    </Screen>
  );
}
