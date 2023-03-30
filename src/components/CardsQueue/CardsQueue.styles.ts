import styled, { css } from 'styled-components';
import { CardTypes } from '../../types';

interface ContainerProps {
  type: CardTypes;
  enabled: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 180px;
  height: 258px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  box-shadow: 2px 1px 1px rgba(0, 0, 0, 0.15);

  .icon {
    img {
      width: 64px;
      height: 64px;
    }
  }

  .text {
    margin-top: 12px;
  }

  ${props =>
    props.type === CardTypes.ArchDecisions &&
    css`
      background: var(--red-600);
    `}

  ${props =>
    props.type === CardTypes.ArchPattern &&
    css`
      background: var(--blue-600);
    `}

  ${props =>
    props.type === CardTypes.QualityAttributes &&
    css`
      background: var(--yellow-500);
    `}

  ${props =>
    props.type === CardTypes.LuckOrBackLuck &&
    css`
      background: var(--ice-700);

      .text {
        color: var(--gray-900);
      }
    `}

  &:hover {
    filter: brightness(90%);
  }

  /* &::before,
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
