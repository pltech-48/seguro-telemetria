export type TripEvent = { label: string; impact: string };

export type Trip = {
  id: string;
  title: string;
  date: string;
  km: number;
  duration?: string;
  score: string;
  events: TripEvent[];
};

/** Mock data matching the wireframe. Replace with the telemetry API. */
export const trips: Trip[] = [
  {
    id: '1',
    title: 'Casa → Trabalho',
    date: '12 nov',
    km: 18,
    duration: '31 min',
    score: '9,1',
    events: [
      { label: '18:42 · Frenagem brusca', impact: '−0,2' },
      { label: '18:51 · Celular em movimento', impact: '−0,3' },
      { label: 'Velocidade e curvas', impact: 'sem ocorrências' },
    ],
  },
  { id: '2', title: 'Trabalho → Academia', date: '11 nov', km: 7, score: '7,4', events: [] },
  { id: '3', title: 'Viagem [destino]', date: '09 nov', km: 146, score: '8,6', events: [] },
];

export const getTrip = (id: string | undefined) => trips.find((t) => t.id === id) ?? trips[0];
