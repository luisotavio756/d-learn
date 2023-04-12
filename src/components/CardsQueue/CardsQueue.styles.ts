import styled, { css } from 'styled-components';
import { CardTypes } from '../../types';

interface ContainerProps {
  type: CardTypes;
  enabled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 180px;
  height: 258px;
  transition: all 0.2s;

  ${props =>
    props.enabled &&
    css`
      &:hover {
        filter: brightness(90%);
      }
    `}

  ${props =>
    !props.enabled &&
    css`
      filter: brightness(40%);
    `} /* &::before,
  &::after {
    box-shadow: 2px 1px 1px rgba(0, 0, 0, 0.15);
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: var(--yellow-500);
  }

  &::before {
    right: 7px;
    top: 5px;
    z-index: -1;
    background-color: var(--green-500);
  }

  &::after {
    right: 12px;
    top: 10px;
    z-index: -2;
  } */
`;
