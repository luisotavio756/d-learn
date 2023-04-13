import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';
import { CardTypes } from '../../types';

type ContainerProps = {
  type: CardTypes;
  isFlipped: boolean;
};

type LuckCardBodyContainerProps = {
  luckType?: 'luck' | 'bad-luck';
};

type HeaderStyle = {
  background: string;
  color: string;
};

const headerStyles: Record<CardTypes, HeaderStyle> = {
  [CardTypes.ArchDecisions]: {
    background: theme.colors.red[900],
    color: '#fff',
  },
  [CardTypes.QualityAttributes]: {
    background: theme.colors.yellow.actual,
    color: theme.colors.gray[800],
  },
  [CardTypes.ArchPattern]: {
    background: theme.colors.blue[900],
    color: '#fff',
  },
  [CardTypes.LuckOrBackLuck]: {
    background: theme.colors.ice[700],
    color: theme.colors.gray[900],
  },
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  min-height: 490px;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  .header {
    height: 55px;
    background: ${props => headerStyles[props.type].background};

    p {
      color: ${props => headerStyles[props.type].color};
    }
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

export const NormalCardBodyContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  .img {
    img {
      object-fit: cover;
      height: 84px;
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

  .question {
    margin-top: 2rem;
  }

  .stars {
    margin-top: 1.5rem;
  }

  .answer {
    margin-top: 2rem;
    text-align: center;
  }
`;

export const LuckCardBodyContainer = styled.div<LuckCardBodyContainerProps>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  .icon {
    color: ${props =>
      props.luckType === 'luck'
        ? props.theme.colors.green[600]
        : props.theme.colors.red[600]};
  }

  .actions {
    margin-top: 2.5rem !important;
  }
`;
