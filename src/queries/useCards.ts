import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

import api from '../services/api';
import { Card } from '../types';
import { getShuffledCards } from '../utils/cards';
import luckOrBadLuckCardsEn from '../cards/luckOrBadLuckEn';
import luckOrBadLuckCardsEs from '../cards/luckOrBadLuckEs';
import luckOrBadLuckCardsPt from '../cards/luckOrBadLuckPt';

async function getCards(language: string) {
  const luckOrBadLuckCards: { [key: string]: Card[] } = {
    en: luckOrBadLuckCardsEn,
    es: luckOrBadLuckCardsEs,
    pt: luckOrBadLuckCardsPt,
  };

  const LUCK_AND_BAD_LUCK_CARDS = getShuffledCards(
    luckOrBadLuckCards[language],
  );

  const response = await api.get<Card[]>(`/cards/${language}`);

  return [...getShuffledCards(response.data), ...LUCK_AND_BAD_LUCK_CARDS].map(
    item => Object.assign(item, { used: false }),
  );
}

export function useCardsQuery() {
  const { i18n } = useTranslation();

  return useQuery<Card[]>('cards', async () => getCards(i18n.language), {
    staleTime: 1000 * 60 * 30, // half hour,
  });
}
