import styled from 'styled-components';

interface HeaderProps {
  isOpen: boolean;
}

export const NavBar = styled.nav`
  position: fixed;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  /* box-shadow: 0 0 20px 4px rgba(0, 0, 0, 0.3); */
  z-index: 10;
  transition: all 1s, background-image 2s;

  &.navbar-dark {
    background-color: #333;
    color: white !important;
  }
`;

export const NavContent = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1300px;
  padding: 1rem 4vw;

  align-items: center;
  justify-content: space-between;
  /* padding: 50px 100px; */

  /* background-color: rgba(0, 0, 0, 0.6); */

  height: 80px;
  color: white;

  .brand {
    img {
      width: 54px;
      height: auto;
    }
  }

  .menu-expand {
    display: none;
    margin-right: 10px;
  }

  @media (max-width: 790px) {
    .brand .logo {
      border: none !important;
    }

    .brand h4,
    .social {
      display: none;
    }

    .menu-expand {
      display: block;
    }
  }
`;

export const NavMenu = styled.div<HeaderProps>`
  button {
    display: none;
  }

  > img {
    display: none;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 16px;

    list-style: none;

    li {
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 790px) {
    height: 100vh;
    width: ${props => (props.isOpen ? '100%' : '0')};
    position: fixed;
    z-index: 9999;
    top: 0;
    right: 0;
    background-color: #272727;
    overflow-x: hidden;
    transition: 0.6s;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6rem 0;

    button {
      display: block;
      position: absolute;
      top: 10px;
      right: 20px;

      color: white;
      background: transparent;
      border: none;
      text-decoration: none;

      font-size: 40px;
    }

    ul {
      height: 100%;
      padding: 6rem 0;
      flex-direction: column;
      justify-content: start;
      gap: 2rem;
    }

    > img {
      display: block;
      width: 100px;
      height: auto;
    }
  }
`;
