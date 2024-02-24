import { v4 as uuid } from 'uuid';
import { Card, CardTypes } from '../types';

const luckOrBadLuckCardsEn: Card[] = [
  {
    _id: uuid(),
    title: 'Luck',
    description: 'Advance three spaces on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 3,
  },
  {
    _id: uuid(),
    title: 'Luck',
    description:
      'With this card, you can consult some material before answering a question!\nAdvance one space!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: uuid(),
    title: 'Luck',
    description: 'Advance two spaces on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 2,
  },
  {
    _id: uuid(),
    title: 'Luck',
    description:
      'Your next question will be worth double the stars! \nAdvance one space',
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
    title: 'Luck',
    description: 'Advance one space on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: uuid(),
    title: 'Luck',
    description:
      'With this card, you can consult some material before answering a question!\nAdvance one space!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: uuid(),
    title: 'Luck',
    description: 'Advance two spaces on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 2,
  },
  {
    _id: uuid(),
    title: 'Luck',
    description:
      'Your next question will be worth double the stars! Advance one space',
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
    title: 'Bad Luck',
    description: 'Go back three spaces on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 3,
  },
  {
    _id: uuid(),
    title: 'Bad Luck',
    description:
      'Your next question will be worth half the stars! \nGo back one space!',
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
    title: 'Bad Luck',
    description: 'Go back two spaces on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 2,
  },
  {
    _id: uuid(),
    title: 'Bad Luck',
    description: 'Go back one space on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 1,
  },
];

export default luckOrBadLuckCardsEn;
