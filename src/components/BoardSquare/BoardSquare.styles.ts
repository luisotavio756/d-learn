import styled, { css } from 'styled-components';

import StartSquareImg from '../../assets/start-square.png';
import LuckSquareImg from '../../assets/luck-square.png';
import { Player, SquareTypes } from '../../types';

type BoardSquareProps = {
  type: SquareTypes;
  isInColumn: boolean;
};

type PlayerPinProps = Omit<Player, 'id' | 'square_id'> & {
  playerId: number;
};

export const Container = styled.div<BoardSquareProps>`
  width: 7.125rem;
  height: 7.125rem;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  > svg {
    width: 3.25rem;
    height: 3.25rem;
  }

  .star {
    position: absolute;
    right: 4px;
    top: 4px;
    z-index: 0;

    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #fff;

    svg {
      font-size: ${props => props.theme.fontSize.xs};
      color: ${props => props.theme.colors.blue[600]};
      fill: ${props => props.theme.colors.blue[600]};
    }
  }

  ${props =>
    props.type === SquareTypes.ArchDecisions &&
    css`
      background: ${props.theme.colors.blue[600]};
    `}

  ${props =>
    props.type === SquareTypes.ArchPattern &&
    css`
      background: ${props.theme.colors.red[600]};
    `}

  ${props =>
    props.type === SquareTypes.QualityAttributes &&
    css`
      background: ${props.theme.colors.yellow[500]};
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
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.colors.gray[100]};

  background-color: ${props => props.color};
  position: absolute;
  z-index: 1;
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
