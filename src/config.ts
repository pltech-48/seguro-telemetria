/**
 * Which loyalty model the pilot runs.
 * - "pontos": points programme (tab "Pontos").
 * - "cashback": Modelo B, monthly cashback by score and km (tab "Cashback" replaces "Pontos").
 *
 * Set EXPO_PUBLIC_PROGRAM_MODEL=cashback to switch.
 */
export type ProgramModel = 'pontos' | 'cashback';

export const PROGRAM_MODEL: ProgramModel =
  process.env.EXPO_PUBLIC_PROGRAM_MODEL === 'cashback' ? 'cashback' : 'pontos';
