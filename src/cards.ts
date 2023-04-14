import { v4 as uuid } from 'uuid';
import { Card, CardTypes } from './types';
import archDecisionsCards from './cards/archDecisions';

const cards: Card[] = [
  ...archDecisionsCards,
  {
    id: uuid(),
    title: 'Azar',
    description: 'Avance três casas no tabuleiro!',
    type: CardTypes.LuckOrBackLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 3,
  },
];

export default cards;
