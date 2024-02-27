import { Card, CardTypes } from '../types';

const luckOrBadLuckCardsEn: Card[] = [
  {
    _id: '58a315a5-194f-4f29-8e38-5030d1da1dbd',
    title: 'Luck',
    description: 'Advance three spaces on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 3,
  },
  {
    _id: '261729ac-191b-44ce-80ec-e44054a9c823',
    title: 'Luck',
    description:
      'With this card, you can consult some material before answering a question!\nAdvance one space!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: '74077878-d41f-4fbf-8756-754280928d56',
    title: 'Luck',
    description: 'Advance two spaces on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 2,
  },
  {
    _id: '14545891-239b-4ee9-937c-baacb8e00902',
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
    _id: '1f665b53-af12-4f11-9f45-d07d32210c33',
    title: 'Luck',
    description: 'Advance one space on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: 'c6b9aa01-dc8d-4603-b7b1-509059831561',
    title: 'Luck',
    description:
      'With this card, you can consult some material before answering a question!\nAdvance one space!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: '74f8c93d-3844-47b4-845f-1725fb1d69ae',
    title: 'Luck',
    description: 'Advance two spaces on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 2,
  },
  {
    _id: '42d5768b-08d7-4052-9a4e-7636835e9d44',
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
    _id: '98ff7b39-1adb-40fc-aea9-1832434f4c6c',
    title: 'Bad Luck',
    description: 'Go back three spaces on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 3,
  },
  {
    _id: '24e0b905-5018-407a-8f4f-f47f66945b64',
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
    _id: 'e3da76c2-811f-4028-8812-fab1a5397fee',
    title: 'Bad Luck',
    description: 'Go back two spaces on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 2,
  },
  {
    _id: '3626fe85-54e5-4aeb-9be4-4d513637f1e6',
    title: 'Bad Luck',
    description: 'Go back one space on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 1,
  },
];

export default luckOrBadLuckCardsEn;
