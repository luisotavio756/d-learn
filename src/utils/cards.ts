import { Card, CardTypes } from '../types';

export const getShuffledCards = (cards: Card[]) => {
  const shuffledCards = cards;

  for (let i = shuffledCards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
  }

  return shuffledCards;
};

export const getRestoredCards = (cards: Card[]) => {
  const restoredCards = cards.map(item => ({
    ...item,
    used: false,
  }));

  return getShuffledCards(restoredCards);
};

export const getRestoredCardsByType = (cards: Card[], type: CardTypes) => {
  const restoredCards = cards.map(item => ({
    ...item,
    used: item.type === type ? false : item.used,
  }));

  return getShuffledCards(restoredCards);
};
