import styled, { css } from 'styled-components';

import StartSquareImg from '../../assets/start-square.png';
import PlayerImg from '../../assets/player.png';
import { Player, SquareTypes } from '../../types';

type BoardSquareProps = {
  type: SquareTypes;
  isInColumn: boolean;
};

type PlayerPinProps = Omit<Player, 'id'> & {
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
    props.isInColumn &&
    css`
      height: 120px;
    `}

  ${props =>
    props.type === SquareTypes.ArchDecisions &&
    css`
      background: var(--red-500);
    `}

  ${props =>
    props.type === SquareTypes.ArchPattern &&
    css`
      background: var(--blue-500);
    `}

  ${props =>
    props.type === SquareTypes.QualityAttributes &&
    css`
      background: var(--yellow-400);
    `}
`;

export const StartSquare = styled.div`
  width: 114px;
  height: 114px;
  border: 1px solid black;

  background-image: url(${StartSquareImg});
  background-repeat: no-repeat;
  background-size: contain;
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
`;
