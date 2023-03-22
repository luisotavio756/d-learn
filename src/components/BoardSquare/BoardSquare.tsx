import React, { useMemo } from 'react';
import { Square, SquareTypes } from '../../types';

import { Container, PlayerPin } from './BoardSquare.styles';

import ArchDecisionIcon from '../../assets/arch_decisions_icon.png';
import QualityAttrIcon from '../../assets/quality_attr_icon.png';
import ArchPatternsIcon from '../../assets/arch_patterns_icon.png';

export interface BoardSquareProps extends Square {
  isInColumn?: boolean;
}

const BoardSquare: React.FC<BoardSquareProps> = ({
  players,
  type,
  isInColumn,
}) => {
  const icons = useMemo(
    () => ({
      [SquareTypes.ArchDecisions]: ArchDecisionIcon,
      [SquareTypes.QualityAttributes]: QualityAttrIcon,
      [SquareTypes.ArchPattern]: ArchPatternsIcon,
      [SquareTypes.LuckOrBackLuck]: QualityAttrIcon,
      [SquareTypes.Start]: undefined,
      [SquareTypes.LuckOrBackLuck]: undefined,
    }),
    [],
  );

  return (
    <Container type={type} isInColumn={!!isInColumn}>
      {icons[type] && <img src={icons[type]} alt="" />}
      <div className="players">
        {players.map(item => (
          <PlayerPin
            key={item.id}
            playerId={item.id}
            name={item.name}
            color={item.color}
            score={item.score}
            title={item.name}
          />
        ))}
      </div>
    </Container>
  );
};

export default BoardSquare;
