import styled, { css } from 'styled-components';
import { RowProps } from './Row';

export const Container = styled.div<RowProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection ?? 'row'};

  ${props =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `};

  ${props =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `};

  ${props =>
    props.gap &&
    css`
      gap: ${props.gap}px;
    `};
`;
