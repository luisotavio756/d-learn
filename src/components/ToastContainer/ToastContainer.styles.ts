import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

export const Container = styled.div`
  position: fixed;
  right: 0;
  top: 92px;
  padding: 30px;

  overflow: hidden;
  z-index: 99999999999;

  @media screen and (max-width: ${breakpoints.lg}) {
    padding-top: 1rem;
    padding-right: 0.5rem;
  }
`;
