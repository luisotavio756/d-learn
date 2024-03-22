import { Card, LuckActions, CardTypes } from '../types';

const luckOrBadLuckCardsPt: Card[] = [
  {
    _id: '58a315a5-194f-4f29-8e38-5030d1da1dbd',
    title: 'Sorte',
    description:
      'Você teve sorte dessa vez! Avance uma casa e na próxima rodada jogue duas vezes consecutivas!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
    luckAction: LuckActions.ExtraRoundPlaying,
    activeLuckActionInTheSameTurn: false,
  },
  {
    _id: '58a315a5-194f-4f29-8e38-5030d1da1dbd',
    title: 'Sorte ou revés ?',
    description:
      'Na póxima rodada escolha qualquer um dos baralhos de conteúdo para responder. Se acertar: jogue novamente. Se errar: volte uma casa!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck-or-bad-luck',
    used: false,
    stars: 0,
    luckAction: LuckActions.ChooseDeck,
    activeLuckActionInTheSameTurn: false,
  },
  {
    _id: '58a315a5-194f-4f29-8e38-5030d1da1dbd',
    title: 'Revés',
    description: 'Poxa que azar! Volte uma casa e fique uma rodada sem jogar!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 1,
    luckAction: LuckActions.OneRoundWithoutPlaying,
    activeLuckActionInTheSameTurn: true,
  },
];

export default luckOrBadLuckCardsPt;
