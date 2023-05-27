import styled from 'styled-components';

import BackgroundImage from '../../assets/background.jpg';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${BackgroundImage});

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Board = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: -2px 6px 20px #666;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: fit-content;

  .top,
  .bottom {
    display: flex;
  }

  .bottom {
    flex-direction: row-reverse;
  }

  .main {
    position: relative;
    display: flex;
    justify-content: space-between;

    .column1,
    .column2 {
      display: flex;
      flex-direction: column;
    }

    .column1 {
      flex-direction: column-reverse;
    }

    .content-main {
      display: flex;
      flex-direction: column;
      align-items: center;

      > img {
        width: 700px;
        height: auto;
      }

      .info {
        width: 100%;
      }

      .cards {
        margin-top: 1rem;
        display: flex;
        gap: 32px;
      }

      .controls {
        top: 1rem;
        right: 8rem;
        position: absolute;
      }
    }
  }
`;
