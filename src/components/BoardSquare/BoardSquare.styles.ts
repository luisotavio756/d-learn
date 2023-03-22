import styled, { css } from 'styled-components';

import StartSquareImg from '../../assets/start-square.png';
import { SquareTypes } from '../../types';

type BoardSquareProps = {
  type: SquareTypes;
  isInColumn: boolean;
};

export const Container = styled.div<BoardSquareProps>`
  width: 104px;
  height: 104px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${props =>
    props.isInColumn &&
    css`
      height: 108px;
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
  width: 104px;
  height: 104px;
  border: 1px solid black;

  background-image: url(${StartSquareImg});
  background-repeat: no-repeat;
  background-size: contain;
`;
