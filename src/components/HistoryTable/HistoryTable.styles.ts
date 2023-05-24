import styled from 'styled-components';
import { Flex } from '../Layout';

export const Container = styled(Flex)`
  overflow-x: auto;

  table {
    overflow-x: auto;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;

    thead {
      th {
        font-size: ${props => props.theme.fontSize.lg};
        font-family: ${props => props.theme.fontFamily.sans};
        font-weight: ${props => props.theme.fontWeight.bold};
        color: ${props => props.theme.colors.gray[900]};
      }
    }

    tbody {
      td {
        font-family: ${props => props.theme.fontFamily.mono};
        font-weight: ${props => props.theme.fontWeight.regular};
        color: ${props => props.theme.colors.gray[900]};
      }
    }

    th,
    td {
      text-align: left;
      padding: 8px;
    }

    tr {
      height: 32px;
    }

    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
  }
`;
