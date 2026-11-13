import { Share, StyleSheet } from 'react-native';

import { AppText, Badge, Button, Card, Grid, GridItem, Icon, Muted, Row, Screen, Strong } from '@/components';
import { colors, fontSizes } from '@/theme/tokens';

const STREAK = 3;
const STREAK_GOAL = 5;

const achievements = [
  { title: 'Primeira viagem', unlocked: true },
  { title: 'Sem celular 7 dias', unlocked: true },
  { title: 'Frenagem suave', unlocked: true },
  { title: 'Nível Prata', unlocked: true },
  { title: 'Nível Ouro', unlocked: false },
  { title: '10 viagens boas', unlocked: false },
];

/** D3 · Conquistas e sequência. */
export default function ConquistasScreen() {
  return (
    <Screen
      backLabel="Voltar"
      title="Conquistas"
      subtitle="Sua sequência de boa condução"
      footer={
        <Button
          variant="secondary"
          label="Compartilhar conquista"
          onPress={() => Share.share({ message: 'Conquistei o Nível Prata no Seguro Auto com Telemetria!' })}
        />
      }
    >
      <Card>
        <Strong>{STREAK} viagens seguidas acima de 8</Strong>
        <Row justify="start" gap={8} style={styles.streak}>
          {Array.from({ length: STREAK_GOAL }, (_, i) =>
            i < STREAK ? (
              <Badge key={i} size={36}>
                <Icon name="check" color={colors.primary} size={18} strokeWidth={2.5} />
              </Badge>
            ) : (
              <Badge key={i} size={36} empty />
            ),
          )}
        </Row>
        <Muted style={styles.gap}>Faltam {STREAK_GOAL - STREAK} para a próxima medalha</Muted>
      </Card>
      <Grid>
        {achievements.map((a) => (
          <GridItem key={a.title}>
            <Card flush center dashed={!a.unlocked} style={[styles.fill, !a.unlocked && styles.locked]}>
              <Badge style={styles.medal}>
                {a.unlocked ? <Icon name="star" color={colors.primary} /> : '–'}
              </Badge>
              <AppText weight="bold" size={fontSizes.caption} align="center">
                {a.title}
              </AppText>
              <Muted>{a.unlocked ? 'conquistada' : 'bloqueada'}</Muted>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Screen>
  );
}

const styles = StyleSheet.create({
  streak: { marginTop: 10 },
  gap: { marginTop: 8 },
  fill: { flex: 1 },
  locked: { opacity: 0.7 },
  medal: { marginBottom: 8 },
});
