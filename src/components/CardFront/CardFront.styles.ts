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
    svg {
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
      background: ${props.theme.colors.blue[600]};
    `}

  ${props =>
    props.type === CardTypes.ArchPattern &&
    css`
      background: ${props.theme.colors.red[600]};
    `}

  ${props =>
    props.type === CardTypes.QualityAttributes &&
    css`
      background: ${props.theme.colors.yellow[500]};
    `}

  ${props =>
    props.type === CardTypes.LuckOrBadLuck &&
    css`
      background: ${props.theme.colors.ice[700]};

      .text {
        color: ${props.theme.colors.gray[900]};
      }
    `}
`;
