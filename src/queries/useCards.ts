import { useQuery } from 'react-query';

import api from '../services/api';
import { Card } from '../types';
import { getShuffledCards } from '../utils/cards';
import luckOrBadLuckCards from '../cards/luckOrBadLuck';

async function getCards() {
  const LUCK_AND_BAD_LUCK_CARDS = getShuffledCards(luckOrBadLuckCards);

  const response = await api.get<Card[]>(`/cards`);

  return [...response.data, ...LUCK_AND_BAD_LUCK_CARDS];
}

export function useCardsQuery() {
  return useQuery<Card[]>('cards', async () => getCards(), {
    staleTime: 1000 * 60 * 30, // half hour,
  });
}
