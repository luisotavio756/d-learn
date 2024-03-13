import React, { useMemo } from 'react';
import { FiStar, FiUser } from 'react-icons/fi';
import { Square, SquareTypes } from '../../types';

import { Container, PlayerPin } from './BoardSquare.styles';

import { ReactComponent as StartIcon } from '../../assets/cards-icons/start.svg';
import { ReactComponent as ArchDecisionIcon } from '../../assets/cards-icons/arch_decision.svg';
import { ReactComponent as QualityAttrIcon } from '../../assets/cards-icons/quality_attr.svg';
import { ReactComponent as ArchPatternsIcon } from '../../assets/cards-icons/arch_pattern.svg';
import { ReactComponent as LuckOrBadLuckIcon } from '../../assets/cards-icons/luck_or_bad_luck.svg';
import { useGame } from '../../hooks/useGame.hook';
import { Flex } from '../Layout';

export interface BoardSquareProps extends Square {
  isInColumn?: boolean;
}

const BoardSquare: React.FC<BoardSquareProps> = ({ id, type, isInColumn }) => {
  const { players } = useGame();

  const icons = useMemo(
    () => ({
      [SquareTypes.Start]: <StartIcon />,
      [SquareTypes.ArchDecisions]: <ArchDecisionIcon />,
      [SquareTypes.QualityAttributes]: <QualityAttrIcon />,
      [SquareTypes.ArchPattern]: <ArchPatternsIcon />,
      [SquareTypes.LuckOrBadLuck]: <LuckOrBadLuckIcon />,
    }),
    [],
  );

  const playersOnSquare = useMemo(
    () => players.filter(item => item.square_id === id),
    [id, players],
  );

  return (
    <Container type={type} isInColumn={!!isInColumn}>
      {icons[type]}
      <div className="players">
        {playersOnSquare.map(item => (
          <PlayerPin
            key={item.id}
            playerId={item.id}
            name={item.name}
            color={item.color}
            score={item.score}
            title={item.name}
            active
          >
            <FiUser strokeWidth={3} />
          </PlayerPin>
        ))}
      </div>
      <Flex
        shouldShow={
          type === SquareTypes.ArchDecisions ||
          type === SquareTypes.QualityAttributes ||
          type === SquareTypes.ArchPattern
        }
        alignItems="center"
        justifyContent="center"
        className="star"
      >
        <FiStar />
      </Flex>
    </Container>
  );
};

export default BoardSquare;
