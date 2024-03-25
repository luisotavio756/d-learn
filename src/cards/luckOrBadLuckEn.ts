import { Card, LuckActions, CardTypes } from '../types';

const luckOrBadLuckCardsEn: Card[] = [
  {
    _id: '8f4230f4-04cc-4c9d-b48a-db44d4b36955',
    title: 'Luck',
    description: 'Move forward three spaces on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 3,
  },
  {
    _id: '1e0d3059-f171-4534-bd72-ff307f645c14',
    title: 'Luck',
    description: 'With this letter you can consult some material before answering a question! Advance one space!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: '7ec00b97-50a9-494f-b9b9-79cfe9decfd8',
    title: 'Luck',
    description: 'Move forward two spaces on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 2,
  },
  {
    _id: '4986d793-a54b-4ccc-b080-da02cb079f2c',
    title: 'Bad luck',
    description: 'Go back three spaces on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 3,
  },
  {
    _id: '5e2cd4f8-03df-4ebc-96f4-a8f919545cb4',
    title: 'Bad luck',
    description: 'Your next question will be worth half the stars! Come back one home!',
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
    title: 'Bad luck',
    description: 'Go back two spaces on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 2,
  },
  {
    _id: '2ad638a9-f1ca-4a68-9bad-9687c4b67c5b',
    title: 'Bad luck',
    description: 'Move back one space on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 1,
  },
  {
    _id: '6f74c018-74c7-4ed6-8439-402ddc1b8ff0',
    title: 'Luck',
    description: 'Your next question will be worth double the stars! Advance one space!',
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
    title: 'Luck',
    description: 'In the next round, play twice in a row! Advance one space!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
    luckAction: LuckActions.ExtraRoundPlaying,
    activeLuckActionInTheSameTurn: false,
  },
  {
    _id: '8021aa51-a79e-40da-a48e-1b12e7b7164c',
    title: 'Luck',
    description: 'Move forward one space on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: '45190e1f-fbcf-4052-9efd-8432220ec915',
    title: 'Luck',
    description: 'With this letter you can consult some material before answering the next question! Advance one space!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: 'baaab8cf-f964-4a49-8959-9251f571baa9',
    title: 'Luck',
    description: 'Move forward two spaces on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 2,
  },
  {
    _id: 'a4536f82-d366-4ecf-a871-c7723c239cf4',
    title: 'Bad luck',
    description: 'Go back three spaces on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 3,
  },
  {
    _id: 'e2a97ca3-fb36-46cf-9f70-a3d20bb543e7',
    title: 'Bad luck',
    description: 'Your next question will be worth half the stars! Come back one home!',
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
    title: 'Bad luck',
    description: 'Go back two spaces on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 2,
  },
  {
    _id: '3fea2cb7-331f-42d2-bb4e-dae4e2f8ce64',
    title: 'Bad luck',
    description: 'Move back one space on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 1,
  },
  {
    _id: 'a00c3fa2-d23f-46bc-9fd3-d43961477950',
    title: 'Luck',
    description: 'Your next question will be worth double the stars! Advance one space!',
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
    title: 'Luck',
    description: 'In the next round, play twice in a row! Advance one space!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
    luckAction: LuckActions.ExtraRoundPlaying,
    activeLuckActionInTheSameTurn: false,
  },
  {
    _id: 'be54e859-e322-4075-9095-34ef4fd7ffbb',
    title: 'Luck',
    description: 'Move forward one space on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: '09b02a83-b73d-45f1-a5dd-9580383e5e97',
    title: 'Bad luck',
    description: 'Go back three spaces on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 3,
  },
  {
    _id: '00fd0468-b4da-4f02-86ae-a98e77e43048',
    title: 'Luck or bad luck?',
    description: 'In the next round choose any of the content decks to respond. If you get it right: play again. If you make a mistake: go back one space!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck-or-bad-luck',
    used: false,
    stars: 0,
    luckAction: LuckActions.ChooseDeck,
    activeLuckActionInTheSameTurn: false,
  },
  {
    _id: 'a2c512db-c8f2-4f4a-8217-2bb8a160a641',
    title: 'Luck',
    description: 'Move forward one space on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 1,
  },
  {
    _id: '4aca855e-fcb9-43d7-934e-5cb4fde6bb72',
    title: 'Bad luck',
    description: 'Go back one space and don\'t play for a round!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 1,
    luckAction: LuckActions.OneRoundWithoutPlaying,
    activeLuckActionInTheSameTurn: true,
  },
  {
    _id: '6d6dbd47-a279-47c3-a267-0fb4da7e7399',
    title: 'Luck or bad luck?',
    description: 'In the next round choose any of the content decks to respond. If you get it right: play again. If you make a mistake: go back one space!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck-or-bad-luck',
    used: false,
    stars: 0,
    luckAction: LuckActions.ChooseDeck,
    activeLuckActionInTheSameTurn: false,
  },
  {
    _id: '45577670-eff3-4d13-9383-c4e20c0e0b0a',
    title: 'Luck',
    description: 'Move forward two spaces on the board!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck',
    used: false,
    stars: 2,
  },
  {
    _id: '6fcae8d8-e04a-4601-8f78-500d890eea2a',
    title: 'Bad luck',
    description: 'Go back one space and don\'t play for a round!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'bad-luck',
    used: false,
    stars: 1,
    luckAction: LuckActions.OneRoundWithoutPlaying,
    activeLuckActionInTheSameTurn: true,
  },
  {
    _id: 'ebf9453a-86ed-4344-8b3f-833673a3a2be',
    title: 'Luck or bad luck?',
    description: 'In the next round choose any of the content decks to respond. If you get it right: play again. If you make a mistake: go back one space!',
    type: CardTypes.LuckOrBadLuck,
    luckType: 'luck-or-bad-luck',
    used: false,
    stars: 0,
    luckAction: LuckActions.ChooseDeck,
    activeLuckActionInTheSameTurn: false,
  },
];

export default luckOrBadLuckCardsEn;
