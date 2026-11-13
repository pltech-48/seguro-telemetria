import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { AppText, Badge, Card, Grow, MetricBar, Muted, Pill, Screen, Strong } from '@/components';
import { trips } from '@/data/trips';
import { colors } from '@/theme/tokens';

export default function ViagensScreen() {
  return (
    <Screen inTabs title="Minhas viagens" subtitle="Pontuação por viagem">
      <Card row>
        <View>
          <Muted>Nota média do mês</Muted>
          <AppText weight="bold" size={28} color={colors.primary}>
            8,2
          </AppText>
        </View>
        <View style={styles.right}>
          <Muted>Distância</Muted>
          <Strong>412 km</Strong>
        </View>
      </Card>

      {trips.map((trip) => (
        <Card
          key={trip.id}
          row
          onPress={() => router.push(`/viagem/${trip.id}`)}
          accessibilityLabel={`${trip.title}, ${trip.date}, ${trip.km} km, nota ${trip.score}`}
        >
          <Grow>
            <Strong>{trip.title}</Strong>
            <Muted>
              {trip.date} · {trip.km} km
            </Muted>
          </Grow>
          <Badge>{trip.score}</Badge>
        </Card>
      ))}

      <Card>
        <Strong>Detalhe da última viagem</Strong>
        <MetricBar label="Frenagens" value="9,0" percent={90} />
        <MetricBar label="Acelerações" value="8,8" percent={88} />
        <MetricBar label="Velocidade" value="9,4" percent={94} />
        <MetricBar label="Uso do celular" value="7,6" percent={76} />
        <Pill label="Ver mapa e eventos" style={styles.mapButton} onPress={() => router.push(`/viagem/${trips[0].id}`)} />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  right: { alignItems: 'flex-end' },
  mapButton: { marginTop: 12 },
});
