import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;

  label {
    font-weight: 600;
    color: ${props => props.theme.colors.gray[700]};
  }

  input {
    font-size: 0.875rem;
    margin-top: 4px;
    padding: 12px 6px;
    height: 46px;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.colors.gray[400]};
    color: ${props => props.theme.colors.gray[800]};
    font-family: ;
  }
`;
