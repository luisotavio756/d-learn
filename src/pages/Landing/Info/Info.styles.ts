import styled from 'styled-components';
import { breakpoints } from '../../../styles/breakpoints';
import { Grid } from '../../../components/Layout';

export const Container = styled(Grid)`
  width: 100%;
  background: ${props => props.theme.colors.blue[600]};
  padding: 8rem 6rem;

  svg {
    font-size: 4rem;
  }

  @media screen and (max-width: ${breakpoints.md}) {
    padding: 8rem 2rem;
  }
`;
