export enum SquareTypes {
  Start,
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
