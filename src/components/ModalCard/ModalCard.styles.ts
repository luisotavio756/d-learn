import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { CardTypes } from '../../types';

type ContainerProps = {
  type: CardTypes;
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
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;

    background: ${props => headerStyles[props.type].background};
    color: ${props => headerStyles[props.type].color};
  }

  .body {
    background: #fff;
    padding: 2.5rem 1rem;
    min-height: 440px;
    display: flex;

    .actions {
      margin-top: 1.5rem;
    }
  }
`;

export const NormalCardBodyContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  .description {
    display: flex;

    strong {
      width: 90px;
      color: ${props => props.theme.colors.gray[900]};
    }

    p {
      flex: 1;
      color: ${props => props.theme.colors.gray[900]};
    }
  }

  .question {
    margin-top: 2rem;

    p {
      font-weight: ${props => props.theme.fontWeight.medium};
      color: ${props => props.theme.colors.gray[900]};
    }
  }

  .stars {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
  }

  .answer {
    margin-top: 2rem;
    text-align: center;

    p {
      margin-top: 0.5rem;
    }

    &.correctly {
      h3 {
        color: ${props => props.theme.colors.green[500]};
      }

      p {
        color: ${props => props.theme.colors.green[700]};
      }
    }

    &.wrong {
      h3 {
        color: ${props => props.theme.colors.red[500]};
      }

      p {
        color: ${props => props.theme.colors.red[700]};
      }
    }
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

  .description {
    color: ${props => props.theme.colors.gray[900]};
  }

  .info {
    color: ${props =>
      props.luckType === 'luck'
        ? props.theme.colors.green[600]
        : props.theme.colors.red[600]};
  }

  .actions {
    margin-top: 2.5rem !important;
  }
`;
