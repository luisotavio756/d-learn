import { Card, CardTypes } from '../types';

const luckOrBadLuckCardsEs: Card[] = [
  {
    _id: '58a315a5-194f-4f29-8e38-5030d1da1dbd',
    title: 'Suerte',
    description: 'Avanza tres casillas en el tablero!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 3,
  },
  {
    _id: '261729ac-191b-44ce-80ec-e44054a9c823',
    title: 'Suerte',
    description:
      'Con esta carta puedes consultar algún material antes de responder a una pregunta!\nAvanza una casilla!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: '74077878-d41f-4fbf-8756-754280928d56',
    title: 'Suerte',
    description: 'Avanza dos casillas en el tablero!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 2,
  },
  {
    _id: '14545891-239b-4ee9-937c-baacb8e00902',
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
    _id: '1f665b53-af12-4f11-9f45-d07d32210c33',
    title: 'Suerte',
    description: 'Avanza una casilla en el tablero!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: 'c6b9aa01-dc8d-4603-b7b1-509059831561',
    title: 'Suerte',
    description:
      'Con esta carta puedes consultar algún material antes de responder a una pregunta!\nAvanza una casilla!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: '74f8c93d-3844-47b4-845f-1725fb1d69ae',
    title: 'Suerte',
    description: 'Avanza dos casillas en el tablero!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 2,
  },
  {
    _id: '42d5768b-08d7-4052-9a4e-7636835e9d44',
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
    _id: '98ff7b39-1adb-40fc-aea9-1832434f4c6c',
    title: 'Mala Suerte',
    description: 'Retrocede tres casillas en el tablero!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 3,
  },
  {
    _id: '24e0b905-5018-407a-8f4f-f47f66945b64',
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
    _id: 'e3da76c2-811f-4028-8812-fab1a5397fee',
    title: 'Mala Suerte',
    description: 'Retrocede dos casillas en el tablero!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 2,
  },
  {
    _id: '3626fe85-54e5-4aeb-9be4-4d513637f1e6',
    title: 'Mala Suerte',
    description: 'Retrocede una casilla en el tablero!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 1,
  },
];

export default luckOrBadLuckCardsEs;
