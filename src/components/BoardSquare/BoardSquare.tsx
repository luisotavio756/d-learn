import React, { useMemo } from 'react';
import { Square, SquareTypes } from '../../types';

import { Container, StartSquare } from './BoardSquare.styles';

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
    }),
    [],
  );

  if (type === SquareTypes.Start) {
    return <StartSquare />;
  }

  return (
    <Container type={type} isInColumn={!!isInColumn}>
      <img src={icons[type]} alt="" />
    </Container>
  );
};

export default BoardSquare;
