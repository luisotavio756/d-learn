import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary-900: #065666;
    --primary-800: #086F83;
    --primary-700: #0987A0;
    --primary-600: #00A3C4;
    --primary-500: #00B5D8;
    --primary-300: #76E4F7;
    --primary-50: #EDFDFD;
    --black-900: #1c1a21;
    --black-700: #232129;
    --black-600: #28262e;
    --black-400: #322f39;
    --black-200: #3e3b47;
    --gray-900: #666360;
    --gray-600: #6b6b6b;
    --gray-700: #999591;
    --gray-400: #7c7c8a;
    --gray-200: #c4c4cc;
    --gray-100: #e1e1e6;
    --orange-200: #FBD38D;
    --background: #312E38;
    --white: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    display: flex;
    width: 100vw;
    background-color: #f4f4f4;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, button, input, textarea {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }
`;
