import { useQuery } from 'react-query';

import api from '../services/api';
import { Card } from '../types';

async function getCards() {
  const response = await api.get<Card[]>(`/cards`);

  return response.data;
}

export function useCardsQuery() {
  return useQuery<Card[]>('history', async () => getCards(), {
    staleTime: 1000 * 60 * 30, // half hour,
  });
}
