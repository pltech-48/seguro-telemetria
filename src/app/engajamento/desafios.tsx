import { router } from 'expo-router';

import { Button, Card, Muted, ProgressBar, Row, Screen, Strong, Tag } from '@/components';

type Challenge = {
  title: string;
  description: string;
  percent: number;
  status: string;
  sponsored?: boolean;
};

const challenges: Challenge[] = [
  { title: 'Sem celular por 7 dias', description: 'Recompensa: +[X] pontos', percent: 57, status: '4 de 7 dias' },
  {
    title: 'Viagens suaves',
    description: 'Patrocinado por [parceiro do ecossistema]: [benefício]',
    percent: 40,
    status: '2 de 5 viagens',
    sponsored: true,
  },
  {
    title: 'Nota acima de 9 na semana',
    description: 'Recompensa: +[X] pontos e uma medalha',
    percent: 100,
    status: 'Concluído',
  },
];

/** D2 · Desafios do mês. */
export default function DesafiosScreen() {
  return (
    <Screen
      backLabel="Voltar"
      title="Desafios do mês"
      subtitle="[N] ativos"
      footer={<Button variant="secondary" label="Ver conquistas" onPress={() => router.push('/engajamento/conquistas')} />}
    >
      {challenges.map((c) => (
        <Card key={c.title}>
          <Row>
            <Strong>{c.title}</Strong>
            {c.sponsored ? <Tag label="Patrocinado" /> : null}
          </Row>
          <Muted>{c.description}</Muted>
          <ProgressBar percent={c.percent} accessibilityLabel={c.title} />
          <Muted>{c.status}</Muted>
        </Card>
      ))}
      <Card>
        <Muted>Desafios nunca pedem para olhar o app dirigindo, não premiam velocidade nem mais quilômetros.</Muted>
      </Card>
    </Screen>
  );
}
