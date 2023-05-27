import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 600;
    color: ${props => props.theme.colors.gray[700]};
  }
`;

export const SelectElement = styled.select`
  font-size: 1rem;
  margin-top: 4px;
  padding: 12px 6px;
  height: 46px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.gray[400]};
  color: ${props => props.theme.colors.gray[800]};
  background: #fff;
`;
