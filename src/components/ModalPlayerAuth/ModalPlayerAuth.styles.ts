import styled from 'styled-components';
import { Flex } from '../Layout';

export const Container = styled(Flex)`
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

  .loaderContent {
    margin: 1rem auto;
  }
`;
