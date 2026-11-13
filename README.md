# Seguro Auto · Telemetria

An Expo (SDK 58) and Expo Router app that implements the "Wireframe – Seguro com Telemetria" design.

```bash
npm install
npx expo start          # press w for web, or scan the QR code in a development build
```

- Every screen is listed at `/_sitemap` (Expo Router's built-in sitemap).
- `EXPO_PUBLIC_PROGRAM_MODEL=cashback npx expo start` runs Modelo B, where the **Cashback** tab replaces **Pontos**.

## Structure

| Path | Contents |
| --- | --- |
| `src/theme/tokens.ts` | Colors, radii, spacing and Poppins font tokens from the design |
| `src/components/` | Shared UI: `Screen` (blue header + scroll + pinned footer), `Card`, `Row`, `Pill`, `Button`, `ProgressBar`, `MetricBar`, `InfoRow`, `Badge`, `BrokerCard`, form controls and `TabBar` |
| `src/app/(tabs)/` | Início, Viagens, Pontos / Cashback, Apólice, Ofertas, plus screens pushed inside a tab (Benefícios, Regra and Extrato de cashback) |
| `src/app/avaliacao/` | Modelo A · Try-before-you-buy (A1–A4) |
| `src/app/viagem/[id]/` | Trip detail and contest (C1–C2) |
| `src/app/*.tsx` | Privacy, post-trip summary, crash alert and paused telemetry (C3–C6) |
| `src/app/engajamento/` | Engagement and retention (D1–D6) |

Placeholders such as `[Nome do corretor]` and `R$ [00,00]` are kept from the wireframe. Actions with no defined
integration (broker contact, PDF, bank account, assistance) call `comingSoon()` in `src/lib/actions.ts`.
