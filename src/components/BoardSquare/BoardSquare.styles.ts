import styled, { css } from 'styled-components';

import StartSquareImg from '../../assets/start-square.png';

type BoardSquareProps = {
  isInColumn: boolean;
};

export const Container = styled.div<BoardSquareProps>`
  width: 114px;
  height: 104px;
  border: 1px solid black;

  ${props => props.isInColumn && css`
    height: 108px;
  `}
`;

export const StartSquare = styled.div`
  width: 114px;
  height: 104px;
  border: 1px solid black;

  background-image: url(${StartSquareImg});
  background-repeat: no-repeat;
  background-size: contain;
`;
