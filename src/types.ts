export enum SquareTypes {
  Start,
  ArchDecisions,
  QualityAttributes,
  ArchPattern,
  LuckOrBackLuck
}

export interface Player {
  id: string;
  name: string;
  score: number;
  color: string;
}

export interface Square {
  id: string;
  players: Player[];
  type: SquareTypes
}
