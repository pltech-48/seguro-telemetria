import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { AppText, Button, Card, Grow, Muted, Pill, ProgressBar, Screen, Strong, TextLink } from '@/components';
import { openBrokerContact } from '@/lib/actions';
import { PROGRAM_MODEL } from '@/config';
import { colors } from '@/theme/tokens';

export default function InicioScreen() {
  return (
    <Screen inTabs title="Seguro Auto · Telemetria" subtitle="Resumo da sua condução">
      <Card>
        <View style={styles.scoreRow}>
          <View>
            <Muted>Sua nota de condução</Muted>
            <AppText weight="bold" size={44} color={colors.primary}>
              8,2<Muted size={16}> /10</Muted>
            </AppText>
          </View>
          <View style={styles.right}>
            <Strong>Nível Prata</Strong>
            <Muted>Economia projetada</Muted>
            <Strong color={colors.success}>R$ [00,00]</Strong>
          </View>
        </View>
        <ProgressBar percent={82} accessibilityLabel="Progresso para o nível Ouro" />
        <Muted>Faltam 0,8 ponto para o nível Ouro: +R$ [00,00]</Muted>
      </Card>

      <Card>
        <Muted>Para subir de nível hoje</Muted>
        <Strong>Evite o celular ao volante</Strong>
        <Muted>Foi o item que mais pesou: +R$ [00,00] se melhorar</Muted>
        <Button flush label="Ver como subir de nível" style={styles.cardButton} onPress={() => router.push('/beneficios')} />
      </Card>

      <Card row>
        <Grow>
          <Strong>3.420 pontos</Strong>
          <Muted>Programa de fidelidade</Muted>
        </Grow>
        <Pill label="Resgatar" onPress={() => router.push(PROGRAM_MODEL === 'cashback' ? '/cashback' : '/pontos')} />
      </Card>

      <Card row>
        <Grow>
          <Strong>Última viagem</Strong>
          <Muted>12 nov · 18 km · nota 9,1</Muted>
        </Grow>
        <Pill label="Ver detalhe" onPress={() => router.push('/viagem/1')} />
      </Card>

      <Card row>
        <Grow>
          <Strong>Seu corretor</Strong>
          <Muted>[Nome] · acompanha sua evolução se você permitir</Muted>
        </Grow>
        <Pill label="Falar" onPress={openBrokerContact} />
      </Card>

      <TextLink label="Privacidade e dados da telemetria ›" onPress={() => router.push('/privacidade')} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  scoreRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 12 },
  right: { alignItems: 'flex-end' },
  cardButton: { marginTop: 12 },
});
