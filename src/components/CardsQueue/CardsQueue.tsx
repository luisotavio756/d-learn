import React from 'react';
import { CardTypes } from '../../types';

import { Container } from './CardsQueue.styles';
import CardFront from '../CardFront/CardFront';

interface CardsQueueProps {
  type: CardTypes;
  enabled: boolean;
  onClick(type: CardTypes): void;
}

const CardsQueue: React.FC<CardsQueueProps> = ({ enabled, type, onClick }) => {
  return (
    <Container
      type={type}
      enabled={enabled}
      onClick={() => enabled && onClick(type)}
      aria-hidden="true"
    >
      <CardFront type={type} />
    </Container>
  );
};

export default CardsQueue;
