import { router } from 'expo-router';

import { AppText, Card, Grow, Muted, Pill, Screen, Strong } from '@/components';
import { comingSoon } from '@/lib/actions';
import { colors } from '@/theme/tokens';

export default function PontosScreen() {
  return (
    <Screen inTabs title="Pontos e resgate" subtitle="Programa de fidelidade">
      <Card center>
        <Muted>Saldo disponível</Muted>
        <AppText weight="bold" size={40} color={colors.primary}>
          3.420
        </AppText>
        <Muted>pontos · [X] pontos expiram em [DD/MM]</Muted>
      </Card>

      <Card row>
        <Grow>
          <Strong>Cashback na conta</Strong>
          <Muted>R$ [00] · [X] pts</Muted>
        </Grow>
        <Pill label="Resgatar" onPress={() => comingSoon('Resgatar cashback')} />
      </Card>
      <Card row>
        <Grow>
          <Strong>Desconto na renovação</Strong>
          <Muted>[X] pts</Muted>
        </Grow>
        <Pill label="Resgatar" onPress={() => comingSoon('Resgatar desconto')} />
      </Card>
      <Card row>
        <Grow>
          <Strong>Parceiros do programa</Strong>
          <Muted>[lista de parceiros]</Muted>
        </Grow>
        <Pill label="Ver" onPress={() => comingSoon('Parceiros')} />
      </Card>
      <Card row>
        <Grow>
          <Strong>Desafios do mês</Strong>
          <Muted>[N] ativos · parceiros Porto</Muted>
        </Grow>
        <Pill label="Ver" onPress={() => router.push('/engajamento/desafios')} />
      </Card>
      <Card row>
        <Grow>
          <Strong>Conquistas</Strong>
          <Muted>Sequência atual: 3 viagens</Muted>
        </Grow>
        <Pill label="Ver" onPress={() => router.push('/engajamento/conquistas')} />
      </Card>
      <Card>
        <Strong>Como ganhar mais pontos</Strong>
        <Muted>Viagens com nota acima de 8 rendem pontos extras. [regra do programa]</Muted>
      </Card>
    </Screen>
  );
}
