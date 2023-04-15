import styled, { css } from 'styled-components';
import { CardTypes } from '../../types';

interface ContainerProps {
  type: CardTypes;
}

export const Container = styled.div<ContainerProps>`
  flex: 1;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
      background: var(--blue-600);
    `}

  ${props =>
    props.type === CardTypes.ArchPattern &&
    css`
      background: var(--red-600);
    `}

  ${props =>
    props.type === CardTypes.QualityAttributes &&
    css`
      background: var(--yellow-500);
    `}

  ${props =>
    props.type === CardTypes.LuckOrBadLuck &&
    css`
      background: var(--ice-700);

      .text {
        color: var(--gray-900);
      }
    `}
`;
