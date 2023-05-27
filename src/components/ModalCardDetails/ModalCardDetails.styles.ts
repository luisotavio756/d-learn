import styled from 'styled-components';
import { Flex } from '../Layout';

export const Container = styled.div`
  .welcome {
    padding-bottom: 1.25rem;
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

export const FileInput = styled(Flex)`
  margin: 0 auto 32px;
  width: 150px;
  position: relative;

  img {
    width: 150px;
    height: 150px;
    object-fit: contain;
    border-radius: ${props => props.theme.radii.sm};
    border: 1px solid ${props => props.theme.colors.blue[700]};
  }

  label {
    position: absolute;
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    background: ${props => props.theme.colors.blue[600]};
    border-radius: 50%;
    right: -16px;
    top: 132px;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
      color: ${props => props.theme.colors.gray[100]};
    }

    &:hover {
      background: ${props => props.theme.colors.blue[700]};
    }

    input {
      display: none;
    }
  }
`;
