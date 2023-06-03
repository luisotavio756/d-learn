import styled from 'styled-components';
import { breakpoints } from '../../../styles/breakpoints';
import { Flex } from '../../../components/Layout';

export const Container = styled(Flex)`
  width: 100%;
  background: ${props => props.theme.colors.blue[600]};
  padding: 6rem;

  .title {
    width: 100%;
  }

  @media screen and (max-width: ${breakpoints.md}) {
    padding: 8rem 2rem;
  }
`;

export const Contributor = styled(Flex)`
  > img {
    width: 236px;
    height: 236px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid ${props => props.theme.colors.white};
  }

  svg {
    cursor: pointer;
    font-size: 1.5rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(90%);
    }
  }
`;
