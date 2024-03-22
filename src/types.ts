export enum SquareTypes {
  Start,
  ArchDecisions,
  QualityAttributes,
  ArchPattern,
  LuckOrBadLuck,
}

export enum CardTypes {
  ArchDecisions,
  QualityAttributes,
  ArchPattern,
  LuckOrBadLuck,
}

export enum LuckActions {
  ExtraRoundPlaying,
  ChooseDeck,
  OneRoundWithoutPlaying,
}

export interface Player {
  id: number;
  name: string;
  score: number;
  color: string;
  active: boolean;
  square_id?: string;
  customStarsCalc?(stars: number): number;
  customLuckAction?: LuckActions;
}

export interface Square {
  id: string;
  type: SquareTypes;
}

export interface Card {
  _id: string;
  type: CardTypes;
  title: string;
  description: string;
  stars: number;
  used?: boolean;
  question?: string;
  solution?: 'V' | 'F';
  solutionText?: string;
  luckType?: 'luck' | 'bad-luck' | 'luck-or-bad-luck';
  isSuggestion?: boolean;
  imgUrl?: string;
  starsCalcType?: number;
  starsCalc?(stars: number): number;
  luckAction?: LuckActions;
  activeLuckActionInTheSameTurn?: boolean;
}

export interface User {
  name: string;
  login: string;
}

export interface History {
  _id?: string;
  winnerName: string;
  winnerScore: number;
  startedAt: string;
  endAt: string;
  ownerName: string;
  ownerId: string;
  ownerScore: number;
  ownerPlacing: number;
}

export enum PlayerMode {
  NoChoosen,
  CreateAccount,
  Authenticated,
  NoAuth,
  Ok,
}
