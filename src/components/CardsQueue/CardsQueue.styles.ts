import styled, { css } from 'styled-components';
import { CardTypes } from '../../types';
import { theme } from '../../styles/theme';

interface ContainerProps {
  type: CardTypes;
  enabled: boolean;
}

interface StackStyle {
  firstStackBackground: string;
  secondStackBackground: string;
}

const stackBackgroud: Record<CardTypes, StackStyle> = {
  [CardTypes.ArchDecisions]: {
    firstStackBackground: theme.colors.blue[700],
    secondStackBackground: theme.colors.blue[900],
  },
  [CardTypes.QualityAttributes]: {
    firstStackBackground: theme.colors.yellow[600],
    secondStackBackground: theme.colors.yellow[700],
  },
  [CardTypes.ArchPattern]: {
    firstStackBackground: theme.colors.red[700],
    secondStackBackground: theme.colors.red[900],
  },
  [CardTypes.LuckOrBadLuck]: {
    firstStackBackground: theme.colors.ice[700],
    secondStackBackground: theme.colors.ice[700],
  },
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 180px;
  height: 258px;
  transition: filter 0.2s;
  position: relative;
  bottom: 0;
  z-index: 0;

  .card-front {
    position: relative;
    bottom: 0;
    transition: all 0.2s ease;
  }

  ${props =>
    props.enabled &&
    css`
      .card-front:hover {
        filter: brightness(90%);

        bottom: 4px;
      }
    `}

  ${props =>
    !props.enabled &&
    css`
      filter: brightness(40%);
    `}

  &::before,
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
  }

  &::before {
    right: 5px;
    top: 5px;
    z-index: -1;
    background: ${props => stackBackgroud[props.type].firstStackBackground};
  }

  &::after {
    right: 10px;
    top: 10px;
    z-index: -2;
    background: ${props => stackBackgroud[props.type].secondStackBackground};
  }
`;
