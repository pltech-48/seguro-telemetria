import { Alert } from 'react-native';

/**
 * Placeholder for actions whose integration (bank app, broker contact, PDF, etc.)
 * is not defined in the wireframe yet.
 */
export function comingSoon(action: string) {
  Alert.alert(action, 'Integração ainda não definida neste protótipo.');
}

/** "Falar" on Início opens the broker contact options. */
export function openBrokerContact() {
  Alert.alert('Falar com seu corretor', '[Nome do corretor]', [
    { text: 'WhatsApp', onPress: () => comingSoon('WhatsApp') },
    { text: 'Ligar', onPress: () => comingSoon('Ligar') },
    { text: 'Cancelar', style: 'cancel' },
  ]);
}
