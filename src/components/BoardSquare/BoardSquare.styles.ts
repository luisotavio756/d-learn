import styled, { css } from 'styled-components';

import StartSquareImg from '../../assets/start-square.png';
import LuckSquareImg from '../../assets/luck-square.png';
import { Player, SquareTypes } from '../../types';
import { breakpoints } from '../../styles/breakpoints';

type BoardSquareProps = {
  type: SquareTypes;
  isInColumn: boolean;
};

type PlayerPinProps = Omit<Player, 'id' | 'square_id'> & {
  playerId: number;
};

export const Container = styled.div<BoardSquareProps>`
  width: calc(80vw / 14);
  height: calc(80vw / 14);

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  > svg {
    width: 3.25rem;
    height: 3.25rem;
  }

  ${props =>
    props.type !== SquareTypes.Start &&
    props.type !== SquareTypes.LuckOrBadLuck &&
    css`
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
    `}

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
      background-size: cover;
    `}

  ${props =>
    props.type === SquareTypes.LuckOrBadLuck &&
    css`
      background-image: url(${LuckSquareImg});
      background-repeat: no-repeat;
      background-size: contain;
    `}

  @media screen and (max-width: ${breakpoints['2xl']}) {
    width: calc(90vw / 14);
    height: calc(90vw / 14);

    > svg {
      width: 2.25rem;
      height: 2.25rem;
    }
  }

  @media screen and (max-width: ${breakpoints.lg}) {
    width: calc(100vw / 14);
    height: calc(100vw / 14);

    > svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    .star {
      width: 0.75rem;
      height: 0.75rem;

      svg {
        font-size: ${props => props.theme.fontSize.xxs};
      }
    }
  }
`;

export const PlayerPin = styled.div<PlayerPinProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
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

  @media screen and (max-width: ${breakpoints['2xl']}) {
    width: 1.75rem;
    height: 1.75rem;

    > svg {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: ${breakpoints.lg}) {
    width: 1.5rem;
    height: 1.5rem;

    > svg {
      font-size: 0.75rem;
    }
  }
`;
