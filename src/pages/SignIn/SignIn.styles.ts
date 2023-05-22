import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;

  img {
    width: 100px;
    height: auto;
  }

  form {
    width: 100%;
  }

  .container-with-shadown {
    padding: 1rem;
    background: #fff;
    box-shadow: ${props => props.theme.shadows[100]};
  }
`;
