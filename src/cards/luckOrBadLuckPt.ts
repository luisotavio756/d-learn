import { Card, LuckActions, CardTypes } from '../types';

const luckOrBadLuckCardsPt: Card[] = [
  {
    _id: '8f4230f4-04cc-4c9d-b48a-db44d4b36955',
    title: 'Sorte',
    description: 'Avance três casas no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 3,
  },
  {
    _id: '1e0d3059-f171-4534-bd72-ff307f645c14',
    title: 'Sorte',
    description: 'Com esta carta você pode consultar algum material antes de responder a uma pergunta! Avance uma casa!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: '7ec00b97-50a9-494f-b9b9-79cfe9decfd8',
    title: 'Sorte',
    description: 'Avance duas casas no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 2,
  },
  {
    _id: '4986d793-a54b-4ccc-b080-da02cb079f2c',
    title: 'Revés',
    description: 'Volte três casas no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 3,
  },
  {
    _id: '5e2cd4f8-03df-4ebc-96f4-a8f919545cb4',
    title: 'Revés',
    description: 'A sua próxima pergunta valerá metade das estrelas! Volte uma casa!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 1,
    starsCalc(stars) {
      return Math.ceil(stars / 2);
    },
  },
  {
    _id: 'c8b3bbfe-f293-424d-8c18-4a428366abb7',
    title: 'Revés',
    description: 'Volte duas casas no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 2,
  },
  {
    _id: '2ad638a9-f1ca-4a68-9bad-9687c4b67c5b',
    title: 'Revés',
    description: 'Volte uma casa no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 1,
  },
  {
    _id: '6f74c018-74c7-4ed6-8439-402ddc1b8ff0',
    title: 'Sorte',
    description: 'A sua próxima pergunta valerá o dobro das estrelas! Avance uma casa!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
    starsCalc(stars) {
      return stars * 2;
    },
  },
  {
    _id: 'e72d60de-1a39-4d6a-82cc-f3f1bba655bd',
    title: 'Sorte',
    description: 'Na próxima rodada jogue duas vezes consecutivas! Avance uma casa!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
    luckAction: LuckActions.ExtraRoundPlaying,
    activeLuckActionInTheSameTurn: false,
  },
  {
    _id: '8021aa51-a79e-40da-a48e-1b12e7b7164c',
    title: 'Sorte',
    description: 'Avance uma casa no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: '45190e1f-fbcf-4052-9efd-8432220ec915',
    title: 'Sorte',
    description: 'Com esta carta você pode consultar algum material antes de responder a próxima pergunta! Avance uma casa!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: 'baaab8cf-f964-4a49-8959-9251f571baa9',
    title: 'Sorte',
    description: 'Avance duas casas no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 2,
  },
  {
    _id: 'a4536f82-d366-4ecf-a871-c7723c239cf4',
    title: 'Revés',
    description: 'Volte três casas no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 3,
  },
  {
    _id: 'e2a97ca3-fb36-46cf-9f70-a3d20bb543e7',
    title: 'Revés',
    description: 'A sua próxima pergunta valerá metade das estrelas! Volte uma casa!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 1,
    starsCalc(stars) {
      return Math.ceil(stars / 2);
    },
  },
  {
    _id: '51b1bc3e-1f3e-4d36-805e-cf5921ef832e',
    title: 'Revés',
    description: 'Volte duas casas no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 2,
  },
  {
    _id: '3fea2cb7-331f-42d2-bb4e-dae4e2f8ce64',
    title: 'Revés',
    description: 'Volte uma casa no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 1,
  },
  {
    _id: 'a00c3fa2-d23f-46bc-9fd3-d43961477950',
    title: 'Sorte',
    description: 'A sua próxima pergunta valerá o dobro das estrelas! Avance uma casa!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
    starsCalc(stars) {
      return stars * 2;
    },
  },
  {
    _id: 'aacb2162-f5ba-4402-b7ad-43ef28ba82ad',
    title: 'Sorte',
    description: 'Na próxima rodada jogue duas vezes consecutivas! Avance uma casa!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
    luckAction: LuckActions.ExtraRoundPlaying,
    activeLuckActionInTheSameTurn: false,
  },
  {
    _id: 'be54e859-e322-4075-9095-34ef4fd7ffbb',
    title: 'Sorte',
    description: 'Avance uma casa no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: '09b02a83-b73d-45f1-a5dd-9580383e5e97',
    title: 'Revés',
    description: 'Volte três casas no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 3,
  },
  {
    _id: '00fd0468-b4da-4f02-86ae-a98e77e43048',
    title: 'Sorte ou revés ?',
    description: 'Na próxima rodada escolha qualquer um dos baralhos de conteúdo para responder. Se acertar: jogue novamente. Se errar: volte uma casa!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck-or-bad-luck',
    used: false,
    stars: 0,
    luckAction: LuckActions.ChooseDeck,
    activeLuckActionInTheSameTurn: false,
  },
  {
    _id: 'a2c512db-c8f2-4f4a-8217-2bb8a160a641',
    title: 'Sorte',
    description: 'Avance uma casa no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: '4aca855e-fcb9-43d7-934e-5cb4fde6bb72',
    title: 'Revés',
    description: 'Volte uma casa e fique uma rodada sem jogar!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 1,
    luckAction: LuckActions.OneRoundWithoutPlaying,
    activeLuckActionInTheSameTurn: true,
  },
  {
    _id: '6d6dbd47-a279-47c3-a267-0fb4da7e7399',
    title: 'Sorte ou revés ?',
    description: 'Na próxima rodada escolha qualquer um dos baralhos de conteúdo para responder. Se acertar: jogue novamente. Se errar: volte uma casa!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck-or-bad-luck',
    used: false,
    stars: 0,
    luckAction: LuckActions.ChooseDeck,
    activeLuckActionInTheSameTurn: false,
  },
  {
    _id: '45577670-eff3-4d13-9383-c4e20c0e0b0a',
    title: 'Sorte',
    description: 'Avance duas casas no tabuleiro!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 2,
  },
  {
    _id: '6fcae8d8-e04a-4601-8f78-500d890eea2a',
    title: 'Revés',
    description: 'Volte uma casa e fique uma rodada sem jogar!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 1,
    luckAction: LuckActions.OneRoundWithoutPlaying,
    activeLuckActionInTheSameTurn: true,
  },
  {
    _id: 'ebf9453a-86ed-4344-8b3f-833673a3a2be',
    title: 'Sorte ou revés ?',
    description: 'Na próxima rodada escolha qualquer um dos baralhos de conteúdo para responder. Se acertar: jogue novamente. Se errar: volte uma casa!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck-or-bad-luck',
    used: false,
    stars: 0,
    luckAction: LuckActions.ChooseDeck,
    activeLuckActionInTheSameTurn: false,
  },
];

export default luckOrBadLuckCardsPt;
