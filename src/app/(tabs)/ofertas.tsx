import { StyleSheet } from 'react-native';

import { AppText, Card, Grid, GridItem, IconPlaceholder, Muted, Screen } from '@/components';
import { comingSoon } from '@/lib/actions';
import { fontSizes } from '@/theme/tokens';

const offers = [
  { title: 'Seguro bike', description: 'Proteção para sua bicicleta' },
  { title: 'Seguro celular', description: 'Roubo e quebra' },
  { title: 'Serviços residenciais', description: 'Encanador, eletricista, chaveiro' },
  { title: 'Mais km de guincho', description: 'Amplie sua assistência' },
  { title: 'Cartão Porto Bank', description: 'Programa de pontos' },
  { title: 'Financiamento', description: 'Condições para clientes' },
  { title: 'Consórcio Porto Bank', description: 'Troque de carro com data certa' },
  { title: 'Seguro de vida', description: 'Proteção para sua família' },
];

export default function OfertasScreen() {
  return (
    <Screen inTabs title="Para você" subtitle="Produtos pensados para o seu perfil">
      <Grid>
        {offers.map((offer) => (
          <GridItem key={offer.title}>
            <Card
              flush
              style={styles.fill}
              onPress={() => comingSoon(offer.title)}
              accessibilityLabel={`${offer.title}. ${offer.description}`}
            >
              <IconPlaceholder />
              <AppText weight="bold" size={fontSizes.body}>
                {offer.title}
              </AppText>
              <Muted>{offer.description}</Muted>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Screen>
  );
}

const styles = StyleSheet.create({ fill: { flex: 1 } });
