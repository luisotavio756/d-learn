import { Card } from './types';
import { getShuffledCards } from './utils/cards';

import archDecisionsCards from './cards/archDecisions';
import qualityAttributesCards from './cards/qualityAttributes';
import archPatternCards from './cards/archPattern';
import luckOrBadLuckCards from './cards/luckOrBadLuck';

const cards: Card[] = [
  ...getShuffledCards(archDecisionsCards),
  ...getShuffledCards(qualityAttributesCards),
  ...getShuffledCards(archPatternCards),
  ...getShuffledCards(luckOrBadLuckCards),
];

export default cards;
