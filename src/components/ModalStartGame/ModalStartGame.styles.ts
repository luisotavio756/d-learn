import styled from 'styled-components';

export const Container = styled.div`
  .welcome {
    padding-bottom: 1.25rem;

    p {
      font-family: 'Fredoka', sans-serif;
      color: var(--gray-600);
    }
  }

  .input-form {
    margin-top: 12px;
    display: flex;
    flex-direction: column;

    label {
      /* font-size: 0.75rem; */
      font-weight: 600;
      color: var(--gray-700);
    }

    input {
      font-size: 0.875rem;
      margin-top: 4px;
      padding: 12px 6px;
      height: 46px;
      border-radius: 4px;
      border: 1px solid var(--gray-400);
      color: var(--gray-800);
      font-family: 'Fredoka', sans-serif;
    }
  }

  .button-group {
    display: flex;

    button + button {
      margin-left: 8px;
    }
  }
`;
