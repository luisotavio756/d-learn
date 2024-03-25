import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';
import { CardTypes, LuckTypes } from '../../types';

type ContainerProps = {
  type: CardTypes;
  isFlipped: boolean;
};

type LuckCardBodyContainerProps = {
  luckType?: LuckTypes;
};

type NormalCardBodyContainerProps = {
  type: CardTypes;
};

type HeaderStyle = {
  background: string;
  color: string;
};

type BoxDescriptionStyle = {
  color: string;
};

const headerStyles: Record<CardTypes, HeaderStyle> = {
  [CardTypes.ArchDecisions]: {
    background: theme.colors.blue[900],
    color: '#fff',
  },
  [CardTypes.QualityAttributes]: {
    background: theme.colors.yellow.actual,
    color: theme.colors.gray[800],
  },
  [CardTypes.ArchPattern]: {
    background: theme.colors.red[900],
    color: '#fff',
  },
  [CardTypes.LuckOrBadLuck]: {
    background: theme.colors.ice[700],
    color: theme.colors.gray[900],
  },
};

const boxDescriptionStyles: Record<CardTypes, BoxDescriptionStyle> = {
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

function getColorByLuckType(luckType?: LuckTypes) {
  if (luckType === LuckTypes.Luck) return theme.colors.green[600];
  if (luckType === LuckTypes.BadLuck) return theme.colors.red[600];
  return theme.colors.orange[600];
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  min-height: 490px;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  .header {
    height: 55px;
    background: ${props => headerStyles[props.type].background};

    h2 {
      color: ${props => headerStyles[props.type].color};
    }
  }

  .text strong {
    font-size: ${props => props.theme.fontSize.lg};
  }

  .body {
    flex: 1;
    background: #fff;
    padding: 1rem;
    display: flex;

    .actions {
      margin-top: 1.5rem;
    }
  }

  .front,
  .back {
    flex: 1;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .back {
    transform: rotateY(180deg);
  }

  ${props =>
    props.isFlipped &&
    css`
      transform: rotateY(180deg);
    `}
`;

export const NormalCardBodyContainer = styled.div<NormalCardBodyContainerProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  .img {
    img {
      object-fit: none;
      width: 76%;
      height: auto;
    }
  }

  .description {
    margin-top: 1rem;

    p:first-of-type {
      width: 90px;
    }

    p:last-of-type {
      flex: 1;
    }
  }

  .box-description {
    margin-top: 0.5rem;
    border: solid 1px ${props => boxDescriptionStyles[props.type].color};
    border-radius: 6px;
    padding: 5px 10px;
    width: 100%;
    justify-content: center;
  }

  .question {
    margin-top: 0.5rem;
  }

  .stars {
    margin-top: 1.5rem;
  }

  .answer {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

export const LuckCardBodyContainer = styled.div<LuckCardBodyContainerProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  
  .icon {
    color: ${props => getColorByLuckType(props.luckType)};
  }

  .warning {
    margin-top: 1.5rem;
  }

  .actions {
    margin-top: 2.5rem !important;
  }
`;
