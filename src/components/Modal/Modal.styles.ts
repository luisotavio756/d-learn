import styled from 'styled-components';

interface CloseContainerProps {
  hasTitle: boolean;
}

export const CloseContainer = styled.div<CloseContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${props => (props.hasTitle ? 'space-between' : 'flex-end')};

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
