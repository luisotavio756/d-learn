import styled from 'styled-components';

export const Container = styled.div`
  .button-group {
    margin-top: 32px;
  }

  div:not(.button-group) {
    button {
      background: transparent;
      color: ${props => props.theme.colors.gray[900]};
      border: none;
      svg {
        font-size: 1.25rem;
      }
    }
  }

  > p {
    text-align: justify;
  }
`;
