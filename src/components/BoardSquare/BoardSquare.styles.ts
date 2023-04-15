import styled, { css } from 'styled-components';

import StartSquareImg from '../../assets/start-square.png';
import LuckSquareImg from '../../assets/luck-square.png';
import PlayerImg from '../../assets/player.png';
import { Player, SquareTypes } from '../../types';

type BoardSquareProps = {
  type: SquareTypes;
  isInColumn: boolean;
};

type PlayerPinProps = Omit<Player, 'id' | 'square_id'> & {
  playerId: number;
};

export const Container = styled.div<BoardSquareProps>`
  width: 114px;
  height: 114px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${props =>
    props.type === SquareTypes.ArchDecisions &&
    css`
      background: var(--red-600);
    `}

  ${props =>
    props.type === SquareTypes.ArchPattern &&
    css`
      background: var(--blue-600);
    `}

  ${props =>
    props.type === SquareTypes.QualityAttributes &&
    css`
      background: var(--yellow-500);
    `}

  ${props =>
    props.type === SquareTypes.Start &&
    css`
      background-image: url(${StartSquareImg});
      background-repeat: no-repeat;
      background-size: contain;
    `}

  ${props =>
    props.type === SquareTypes.LuckOrBadLuck &&
    css`
      background-image: url(${LuckSquareImg});
      background-repeat: no-repeat;
      background-size: contain;
    `}
`;

export const PlayerPin = styled.div<PlayerPinProps>`
  width: 22px;
  height: 22px;
  border-radius: 50%;

  background-image: url(${PlayerImg});
  background-color: ${props => props.color};
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  transition: all 0.2s;
  cursor: pointer;

  ${props =>
    props.playerId === 1 &&
    css`
      top: 8px;
      left: 8px;
    `}

  ${props =>
    props.playerId === 2 &&
    css`
      top: 8px;
      right: 8px;
    `}

  ${props =>
    props.playerId === 3 &&
    css`
      bottom: 8px;
      left: 8px;
    `}

  ${props =>
    props.playerId === 4 &&
    css`
      bottom: 8px;
      right: 8px;
    `}

  &:hover {
    filter: brightness(90%);
  }
`;
