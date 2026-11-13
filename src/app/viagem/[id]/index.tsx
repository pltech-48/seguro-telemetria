import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { AppText, Button, Card, InfoRow, Muted, Screen, Strong, TextLink } from '@/components';
import { getTrip } from '@/data/trips';
import { colors } from '@/theme/tokens';

/** C1 · Detalhe da viagem. */
export default function DetalheViagemScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const trip = getTrip(id);
  const contest = () => router.push(`/viagem/${trip.id}/contestar`);

  return (
    <Screen
      backLabel="Viagens"
      title={trip.title}
      subtitle={[trip.date, `${trip.km} km`, trip.duration].filter(Boolean).join(' · ')}
      footer={
        <>
          <Button variant="secondary" label="Contestar esta viagem" onPress={contest} />
          <TextLink label="Esta viagem não é minha" onPress={contest} />
        </>
      }
    >
      <Card dashed style={styles.map}>
        {/* TODO: replace with the route map and event markers. */}
        <Muted align="center">[Mapa da rota com eventos marcados]</Muted>
      </Card>
      <Card row>
        <View>
          <Muted>Nota da viagem</Muted>
          <AppText weight="bold" size={28} color={colors.primary}>
            {trip.score}
          </AppText>
        </View>
        <Muted>Média do mês: 8,2</Muted>
      </Card>
      {trip.events.length > 0 ? (
        <Card>
          <Strong>O que pesou</Strong>
          {trip.events.map((e) => (
            <InfoRow key={e.label} label={e.label} value={e.impact} />
          ))}
        </Card>
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 150,
    backgroundColor: colors.primarySoft,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
