import { v4 as uuid } from 'uuid';
import { Card, CardTypes } from '../types';

const luckOrBadLuckCardsEs: Card[] = [
  {
    _id: uuid(),
    title: 'Suerte',
    description: 'Avanza tres casillas en el tablero!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 3,
  },
  {
    _id: uuid(),
    title: 'Suerte',
    description:
      'Con esta carta puedes consultar algún material antes de responder a una pregunta!\nAvanza una casilla!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: uuid(),
    title: 'Suerte',
    description: 'Avanza dos casillas en el tablero!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 2,
  },
  {
    _id: uuid(),
    title: 'Suerte',
    description:
      'Tu próxima pregunta valdrá el doble de estrellas! \nAvanza una casilla',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
    starsCalc(stars) {
      return stars * 2;
    },
  },
  {
    _id: uuid(),
    title: 'Suerte',
    description: 'Avanza una casilla en el tablero!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: uuid(),
    title: 'Suerte',
    description:
      'Con esta carta puedes consultar algún material antes de responder a una pregunta!\nAvanza una casilla!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: uuid(),
    title: 'Suerte',
    description: 'Avanza dos casillas en el tablero!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 2,
  },
  {
    _id: uuid(),
    title: 'Suerte',
    description:
      'Tu próxima pregunta valdrá el doble de estrellas! Avanza una casilla',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
    starsCalc(stars) {
      return stars * 2;
    },
  },
  {
    _id: uuid(),
    title: 'Mala Suerte',
    description: 'Retrocede tres casillas en el tablero!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 3,
  },
  {
    _id: uuid(),
    title: 'Mala Suerte',
    description:
      'Tu próxima pregunta valdrá la mitad de las estrellas! \nRetrocede una casilla!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 1,
    starsCalc(stars) {
      return Math.ceil(stars / 2);
    },
  },
  {
    _id: uuid(),
    title: 'Mala Suerte',
    description: 'Retrocede dos casillas en el tablero!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 2,
  },
  {
    _id: uuid(),
    title: 'Mala Suerte',
    description: 'Retrocede una casilla en el tablero!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 1,
  },
];

export default luckOrBadLuckCardsEs;
