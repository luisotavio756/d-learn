import styled from 'styled-components';

export const Container = styled.div`
  .title {
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${props => props.theme.colors.gray[900]};
  }

  table {
    margin-top: 2rem;

    width: 100%;

    thead {
      th {
        font-family: ${props => props.theme.fontFamily.mono};
        font-weight: ${props => props.theme.fontWeight.regular};
        color: ${props => props.theme.colors.gray[900]};
        text-align: left;
      }
    }

    tbody {
      td {
        font-size: ${props => props.theme.fontSize.lg};
        font-family: ${props => props.theme.fontFamily.sans};
        font-weight: ${props => props.theme.fontWeight.bold};
        color: ${props => props.theme.colors.gray[900]};
      }
    }

    tr {
      height: 32px;
    }
  }

  .play-again {
    margin-top: 6rem;

    display: flex;
    align-items: center;
    flex-direction: column;

    h3 {
      color: ${props => props.theme.colors.gray[800]};
    }

    p {
      text-align: center;
      font-size: ${props => props.theme.fontSize.sm};
      color: ${props => props.theme.colors.gray[600]};
    }

    button {
      margin-top: 1.5rem;
    }
  }
`;
