import styled from 'styled-components';
import { Flex } from '../../../components/Layout';
import { breakpoints } from '../../../styles/breakpoints';

export const Container = styled(Flex)`
  padding: 6rem 14rem;

  .carousel-root {
    width: 100%;

    img {
      height: 400px;
      object-fit: cover;
    }
  }

  .carousel-root,
  .carousel,
  .carousel .slider-wrapper,
  .slider,
  li.slide > div {
    height: 100%;
  }

  .control-dots {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: ${breakpoints.md}) {
    padding: 6rem 1rem;
  }
`;
