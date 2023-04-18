import React from 'react';
import { Player } from '../../types';

import { Container } from './PlayerPin.styles';

export type PlayerPinProps = Omit<Player, 'id' | 'square_id'> & {
  playerId: number;
};

const PlayerPin: React.FC<PlayerPinProps> = ({
  playerId,
  color,
  name,
  score,
  active,
}) => {
  return (
    <Container
      playerId={playerId}
      name={name}
      color={color}
      score={score}
      title={name}
      active={active}
    />
  );
};

export default PlayerPin;
