import { useState } from 'react';
import { Share } from 'react-native';

import { Button, Card, InfoRow, Muted, Screen, Strong, SwitchRow } from '@/components';

const ranking = [
  { position: 1, name: 'Você', score: '8,4' },
  { position: 2, name: '[apelido]', score: '8,1' },
  { position: 3, name: '[apelido]', score: '7,9' },
];

/** D4 · Grupos e família. Ranking by behaviour, never by km. */
export default function GruposScreen() {
  const [showNickname, setShowNickname] = useState(true);
  const [inviteFamily, setInviteFamily] = useState(false);

  return (
    <Screen
      backLabel="Voltar"
      title="Grupos e família"
      subtitle="Ranking por comportamento, não por km"
      footer={
        <Button
          label="Convidar pessoas"
          onPress={() => Share.share({ message: 'Entre no meu grupo do Seguro Auto com Telemetria: [link]' })}
        />
      }
    >
      <Card>
        <Strong>Grupo [nome]</Strong>
        {ranking.map((r) => (
          <InfoRow key={r.position} label={`${r.position} · ${r.name}`} value={r.score} />
        ))}
      </Card>
      <Card>
        <SwitchRow label="Aparecer com apelido no grupo" value={showNickname} onValueChange={setShowNickname} />
        <SwitchRow label="Convidar família" value={inviteFamily} onValueChange={setInviteFamily} />
      </Card>
      <Card>
        <Muted>
          Só nota e posição são compartilhadas, nunca trajetos. Menores de idade: [consentimento do responsável, definir
          com jurídico].
        </Muted>
      </Card>
    </Screen>
  );
}
