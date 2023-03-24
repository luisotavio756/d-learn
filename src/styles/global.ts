import { createGlobalStyle } from 'styled-components';

import BackgroundImage from '../assets/background.jpg';

export default createGlobalStyle`
  :root {
    /* Color styles */
    --red--actual: #E64E3A;
    --red-600: #C53030;
    --red-700: #9B2C2C;
    --red-800: #822727;
    --red-900: #63171B;
    --red-500: #E53E3E;
    --red-400: #F56565;
    --red-300: #FC8181;

    --yellow-actual: #F4B40A;
    --yellow-400: #ECC94B;
    --yellow-500: #D69E2E;
    --yellow-600: #B7791F;

    --blue-actual: #0D63F6;
    --blue-900: #1A365D;
    --blue-800: #2A4365;
    --blue-700: #2C5282;
    --blue-600: #2B6CB0;
    --blue-500: #3182CE;
    --blue-400: #4299E1;
    --blue-300: #63B3ED;
    --blue-200: #90CDF4;
    --blue-100: #BEE3F8;

    --ice-500: #E7FAEB;
    --ice-700: #c4f3ce;

    --green-900: #1C4532;
    --green-800: #22543D;
    --green-700: #276749;
    --green-600: #2F855A;
    --green-500: #38A169;
    --green-400: #48BB78;
    --green-300: #68D391;
    --green-200: #9AE6B4;

    --gray-900: #171923;
    --gray-800: #1A202C;
    --gray-700: #2D3748;
    --gray-600: #4A5568;
    --gray-500: #718096;
    --gray-400: #A0AEC0;
    --gray-300: #CBD5E0;
    --gray-200: #E2E8F0;
    --gray-100: #EDF2F7;

    --cyan-900: #065666;
    --cyan-800: #086F83;
    --cyan-700: #0987A0;
    --cyan-600: #00A3C4;
    --cyan-500: #00B5D8;
    --cyan-400: #0BC5EA;
    --cyan-300: #76E4F7;
    --cyan-200: #9DECF9;
    --cyan-100: #C4F1F9;
    --cyan-50: #EDFDFD;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-image: url(${BackgroundImage});
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

  label, strong, h1, h2, h3, h4, h5, h6 {
    font-family: 'Fredoka', sans-serif;
  }

  body, button, input, textarea {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }
`;
