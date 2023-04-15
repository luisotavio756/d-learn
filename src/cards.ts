import { Card } from './types';
import archDecisionsCards from './cards/archDecisions';
import qualityAttributesCards from './cards/qualityAttributes';
import archPatternCards from './cards/archPattern';
import luckOrBadLuckCards from './cards/luckOrBadLuck';

const cards: Card[] = [
  ...archDecisionsCards,
  ...qualityAttributesCards,
  ...archPatternCards,
  ...luckOrBadLuckCards,
];

export default cards;
