import styled from 'styled-components';
import { Flex } from '../../../components/Layout';

export const Container = styled(Flex)`
  width: 100%;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  width: 120px;
  padding: 1rem 0;
  background: ${props => props.theme.colors.blue[700]};

  > img {
    width: 50px;
    height: auto;
  }

  ul {
    margin-top: 2rem;
    width: 100%;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;

      padding: 0.5rem 0;
      transition: all 0.2s;
      cursor: pointer;

      svg {
        font-size: 2rem;
      }

      &:hover {
        background: ${props => props.theme.colors.blue[800]};
      }
    }

    li + li {
      margin-top: 1rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  overflow-x: auto;
`;

export const Header = styled(Flex)`
  width: 100%;
  height: 64px;
  padding: 0 2rem;

  background: ${props => props.theme.colors.blue[900]};
`;

export const Main = styled.main`
  width: 100%;
  padding: 2rem 1rem;
  max-height: calc(100vh - 64px);
  overflow: auto;
`;
