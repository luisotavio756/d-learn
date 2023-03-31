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
      display: flex;
      flex-direction: column;
      align-items: center;

      > img {
        width: 700px;
        height: auto;
      }

      .info {
        width: 100%;

        .turnOf {
          display: flex;
          align-items: center;
          color: ${props => props.theme.colors.gray[900]};

          > div {
            margin-right: 4px;
          }

          span {
            margin-right: 4px;
            font-size: ${props => props.theme.fontSize.lg};
            font-family: ${props => props.theme.fontFamily.sans};
          }
        }

        p {
          font-family: ${props => props.theme.fontFamily.sans};
          font-size: ${props => props.theme.fontSize.sm};
          color: ${props => props.theme.colors.gray[600]};
        }
      }

      .cards {
        margin-top: 1rem;
        display: flex;
        gap: 32px;
      }
    }
  }
`;
