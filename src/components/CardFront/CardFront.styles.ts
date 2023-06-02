import styled, { css } from 'styled-components';
import { CardTypes } from '../../types';
import { Flex } from '../Layout';
import { breakpoints } from '../../styles/breakpoints';

interface ContainerProps {
  type: CardTypes;
}

export const Container = styled(Flex)<ContainerProps>`
  flex: 1;
  border-radius: 8px;

  cursor: pointer;
  position: relative;
  box-shadow: 2px 1px 1px rgba(0, 0, 0, 0.15);

  .icon {
    svg {
      width: 4rem;
      height: 4rem;
    }
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
    `}

  @media screen and (max-width: ${breakpoints['2xl']}) {
    .icon {
      svg {
        width: 3rem;
        height: 3rem;
      }
    }

    h2 {
      font-size: ${props => props.theme.fontSize.base};
    }
  }

  @media screen and (max-width: ${breakpoints.lg}) {
    .icon {
      svg {
        width: 2rem;
        height: 2rem;
      }
    }

    h2 {
      font-size: ${props => props.theme.fontSize.xs};
    }
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    h2 {
      font-size: ${props => props.theme.fontSize.xxs};
    }
  }
`;
