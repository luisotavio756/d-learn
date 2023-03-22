import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Board = styled.div`
  background-color: #fff;
  margin: 0 auto;
  height: 100vh;
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
    height: calc(100vh - (6.5rem * 2));

    .column1,
    .column2 {
      display: flex;
      flex-direction: column;
    }

    .column1 {
      flex-direction: column-reverse;
    }
  }
`;
