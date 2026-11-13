import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Alert, View } from 'react-native';

import { Button, Card, Muted, RadioOption, Screen, Strong, TextArea } from '@/components';
import { getTrip } from '@/data/trips';

const reasons = [
  'Eu era passageiro',
  'Outra pessoa dirigia o carro',
  'Estava de ônibus, táxi ou app',
  'Outro motivo',
];

/** C2 · Contestar viagem. */
export default function ContestarViagemScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const trip = getTrip(id);
  const [reason, setReason] = useState<string | null>(null);
  const [comment, setComment] = useState('');

  const submit = () => {
    if (!reason) {
      Alert.alert('Escolha o que aconteceu', 'Selecione um motivo para enviar a contestação.');
      return;
    }
    // TODO: send { tripId: trip.id, reason, comment } to the contest API.
    router.back();
  };

  return (
    <Screen
      backLabel="Detalhe"
      title="Contestar viagem"
      subtitle={`${trip.title} · ${trip.date}`}
      footer={<Button label="Enviar contestação" onPress={submit} />}
    >
      <Card>
        <Strong>O que aconteceu?</Strong>
        <View accessibilityRole="radiogroup">
          {reasons.map((r) => (
            <RadioOption key={r} label={r} selected={reason === r} onSelect={() => setReason(r)} />
          ))}
        </View>
      </Card>
      <Card>
        <TextArea label="Comentário (opcional)" value={comment} onChangeText={setComment} />
      </Card>
      <Card>
        <Muted>Respondemos em até [N] dias úteis. Enquanto isso, a viagem não conta na sua nota.</Muted>
      </Card>
    </Screen>
  );
}
