import styled from 'styled-components';

import BackgroundImage from '../../assets/background.jpg';
import { Box } from '../../components/Layout';
import { breakpoints } from '../../styles/breakpoints';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${BackgroundImage});

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Board = styled(Box)`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: -2px 6px 20px #666;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-height: 100vh;
  overflow: auto;

  .top,
  .bottom {
    display: flex;
  }

  .bottom {
    flex-direction: row-reverse;
  }

  .column1,
  .column2 {
    display: flex;
    flex-direction: column;
  }

  .column1 {
    flex-direction: column-reverse;
  }

  .content-main {
    position: relative;
    width: 80%;

    .logo {
      width: 100%;
      height: 200px;

      > img {
        object-fit: contain;
        width: 100%;
        margin: 0px auto;
        height: 100%;
      }
    }

    .info-and-queues {
      flex: 1;
    }

    .queues {
      flex: 1;
    }

    .controls {
      top: 1rem;
      right: 1rem;
      position: absolute;
    }
  }

  @media screen and (max-width: ${breakpoints.lg}) {
    .content-main {
      .logo {
        height: 80px;
      }

      img {
        display: none;
      }
    }
  }

  @media screen and (max-width: ${breakpoints.sm}) {
    .content-main {
      .logo {
        height: 0;
      }
    }
  }
`;
