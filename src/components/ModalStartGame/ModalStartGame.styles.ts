import styled from 'styled-components';

export const Container = styled.div`
  .welcome {
    padding-bottom: 1.25rem;

    p {
      font-family: 'Fredoka', sans-serif;
      color: var(--gray-600);
    }
  }

  .button-group {
    margin-top: 12px;
    display: flex;
    justify-content: flex-end;

    button + button {
      margin-left: 8px;
    }
  }
`;
