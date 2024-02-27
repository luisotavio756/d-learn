import { Card, CardTypes } from '../types';

const luckOrBadLuckCardsPt: Card[] = [
  {
    _id: '58a315a5-194f-4f29-8e38-5030d1da1dbd',
    title: 'Sorte',
    description: 'Avance três casas no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 3,
  },
  {
    _id: '261729ac-191b-44ce-80ec-e44054a9c823',
    title: 'Sorte',
    description:
      'Com esta carta você pode consultar algum material antes de responder a uma pergunta!\nAvance uma casa!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: '74077878-d41f-4fbf-8756-754280928d56',
    title: 'Sorte',
    description: 'Avance duas casas no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 2,
  },
  {
    _id: '14545891-239b-4ee9-937c-baacb8e00902',
    title: 'Sorte',
    description:
      'A sua próxima pergunta valerá o dobro das estrelas! \nAvance uma casa',
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
    title: 'Sorte',
    description: 'Avance uma casa no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: 'c6b9aa01-dc8d-4603-b7b1-509059831561',
    title: 'Sorte',
    description:
      'Com esta carta você pode consultar algum material antes de responder a uma pergunta!\nAvance uma casa!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: '74f8c93d-3844-47b4-845f-1725fb1d69ae',
    title: 'Sorte',
    description: 'Avance duas casas no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 2,
  },
  {
    _id: '42d5768b-08d7-4052-9a4e-7636835e9d44',
    title: 'Sorte',
    description:
      'A sua próxima pergunta valerá o dobro das estrelas! Avance uma casa',
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
    title: 'Azar',
    description: 'Volte três casas no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 3,
  },
  {
    _id: '24e0b905-5018-407a-8f4f-f47f66945b64',
    title: 'Azar',
    description:
      'A sua próxima pergunta valerá metade das estrelas! \nVolte uma casa!',
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
    title: 'Azar',
    description: 'Volte duas casas no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 2,
  },
  {
    _id: '3626fe85-54e5-4aeb-9be4-4d513637f1e6',
    title: 'Azar',
    description: 'Volte uma casa no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 1,
  },
];

export default luckOrBadLuckCardsPt;
