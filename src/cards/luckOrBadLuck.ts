import { v4 as uuid } from 'uuid';
import { Card, CardTypes } from '../types';

const luckOrBadLuckCards: Card[] = [
  {
    id: uuid(),
    title: 'Sorte',
    description: 'Avance três casas no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 3,
  },
  {
    id: uuid(),
    title: 'Sorte',
    description:
      'Com esta carta você pode consultar algum material antes de responder a uma pergunta! Avance uma casa!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    id: uuid(),
    title: 'Sorte',
    description: 'Avance duas casas no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 2,
  },
  {
    id: uuid(),
    title: 'Sorte',
    description: 'Avance uma casa no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    id: uuid(),
    title: 'Azar',
    description: 'Volte três casas no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 3,
  },
  {
    id: uuid(),
    title: 'Azar',
    description: 'Volte uma casa no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 1,
  },
  {
    id: uuid(),
    title: 'Azar',
    description: 'Volte duas casas no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 2,
  },
];

export default luckOrBadLuckCards;
