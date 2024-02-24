import { Card } from './types';
import { getShuffledCards } from './utils/cards';

import archDecisionsCards from './cards/archDecisions';
import qualityAttributesCards from './cards/qualityAttributes';
import archPatternCards from './cards/archPattern';
import luckOrBadLuckCardsPt from './cards/luckOrBadLuckPt';

const cards: Card[] = [
  ...getShuffledCards(archDecisionsCards),
  ...getShuffledCards(qualityAttributesCards),
  ...getShuffledCards(archPatternCards),
  ...getShuffledCards(luckOrBadLuckCardsPt),
];

export default cards;
