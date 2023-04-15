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
    players: [
      {
        id: 1,
        name: 'Luis',
        color: '#9B51E0',
        score: 0,
      },
      {
        id: 2,
        name: 'Luis',
        color: '#9B51E0',
        score: 0,
      },
      {
        id: 3,
        name: 'Luis',
        color: '#9B51E0',
        score: 0,
      },
      {
        id: 4,
        name: 'Luis',
        color: '#9B51E0',
        score: 0,
      },
    ],
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
    type: SquareTypes.QualityAttributes,
  },
].map((item, i) => Object.assign(item, { id: String(i + 1) }));

window.initialBoard = board;

export default board;
