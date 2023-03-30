import styled from 'styled-components';

export const Container = styled.span`
  svg {
    color: ${props => props.theme.colors.yellow[500]};

    &.fill {
      fill: ${props => props.theme.colors.yellow[500]};
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
