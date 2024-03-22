import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { CardTypes } from '../../types';

type ContainerProps = {
  type: CardTypes;
};

type StarsStyle = {
  color: string;
};

const starsStyles: Record<CardTypes, StarsStyle> = {
  [CardTypes.ArchDecisions]: {
    color: theme.colors.blue[600],
  },
  [CardTypes.QualityAttributes]: {
    color: theme.colors.yellow.actual,
  },
  [CardTypes.ArchPattern]: {
    color: theme.colors.red[600],
  },
  [CardTypes.LuckOrBadLuck]: {
    color: theme.colors.ice[700],
  },
};

export const Container = styled.span<ContainerProps>`
  svg {
    color: ${props => starsStyles[props.type].color};

    &.fill {
      fill: ${props => starsStyles[props.type].color};
    }

    &:not(.fill) {
      color: ${props => props.theme.colors.gray[200]};
      fill: ${props => props.theme.colors.gray[200]};
    }
  }

  svg + svg {
    margin-left: 4px;
  }
`;
