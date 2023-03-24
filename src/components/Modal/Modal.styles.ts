import styled from 'styled-components';

export const CloseContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    display: flex;
    align-items: center;

    font-weight: 600;
    font-size: 1.25rem;
    line-height: 36px;
    color: var(--gray-800);

    svg {
      margin-right: 8px;
    }
  }

  button {
    background: transparent;
    color: var(--gray-800);
    border: none;

    svg {
      font-size: 1.25rem;
    }
  }
`;
