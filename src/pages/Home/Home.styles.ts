import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: -2px 6px 20px #666;
`;

export const Board = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;

  .top,
  .bottom {
    display: flex;
    /* border: 1px solid black; */
  }

  .bottom {
    flex-direction: row-reverse;
  }

  .main {
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
      img {
        width: 700px;
        height: auto;
      }
    }
  }
`;
