export enum SquareTypes {
  Start,
  ArchDecisions,
  QualityAttributes,
  ArchPattern,
  LuckOrBackLuck,
}

export enum CardTypes {
  ArchDecisions,
  QualityAttributes,
  ArchPattern,
  LuckOrBackLuck,
}

export interface Player {
  id: number;
  name: string;
  score: number;
  color: string;
  square_id?: string;
}

export interface Square {
  id: string;
  type: SquareTypes;
}

export interface Card {
  id: string;
  type: CardTypes;
  description: string;
  stars: number;
  used: boolean;
  question?: string;
  solution?: 'V' | 'F';
  solutionText?: string;
  luckType?: 'luck' | 'bad-luck';
}
