import { v4 as uuid } from 'uuid';
import { Square, SquareTypes } from './types';

const board: Square[] = [
  {
    id: uuid(),
    players: [],
    type: SquareTypes.Start,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchDecisions,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.LuckOrBadLuck,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchPattern,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchPattern,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.QualityAttributes,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchDecisions,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchPattern,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.LuckOrBadLuck,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchPattern,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.QualityAttributes,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchDecisions,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchPattern,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.QualityAttributes,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchDecisions,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.QualityAttributes,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.LuckOrBadLuck,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.QualityAttributes,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchPattern,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchPattern,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.QualityAttributes,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchDecisions,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.LuckOrBadLuck,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.QualityAttributes,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchPattern,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.QualityAttributes,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchDecisions,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchPattern,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.LuckOrBadLuck,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchDecisions,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.QualityAttributes,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchDecisions,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchPattern,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchDecisions,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.LuckOrBadLuck,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchDecisions,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchPattern,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.QualityAttributes,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.LuckOrBadLuck,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.QualityAttributes,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchDecisions,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchDecisions,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.ArchPattern,
  },
  {
    id: uuid(),
    players: [],
    type: SquareTypes.QualityAttributes,
  },
].map((item, i) => Object.assign(item, { id: String(i + 1) }));

export default board;
