import styled from 'styled-components';
import { Flex } from '../../../components/Layout';
import { breakpoints } from '../../../styles/breakpoints';

export const Container = styled(Flex)`
  max-width: 1400px;
  width: 100%;
  padding: 6rem 4rem;
  margin: 0 auto;

  @media screen and (max-width: ${breakpoints.md}) {
    padding: 6rem 1rem;
  }
`;
