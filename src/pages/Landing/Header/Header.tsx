import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import Logo from '../../../../public/shortcut-icon.svg';
import './scroll.js';
// Import Styleds;
import { NavBar, NavContent, NavMenu } from './Header.styles';
import { Headline, Text } from '../../../components/UI';
import { Flex } from '../../../components/Layout';

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();

  function handleNavigate(link: string) {
    navigate(link);
    setMenuIsOpen(false);
  }

  function goToFeeback() {
    window.open('https://forms.gle/JzX6VLx3et8jwcgT7', '_blank');
  }

  return (
    <NavBar>
      <NavContent>
        <Flex alignItems="center" gap={8} className="brand">
          <img src={Logo} alt="Logo" />
          <Headline type="light">D-LEARN</Headline>
        </Flex>
        <div
          aria-hidden="true"
          role="button"
          className="menu-expand"
          onClick={() => setMenuIsOpen(true)}
        >
          <FaBars />
        </div>
        <NavMenu isOpen={menuIsOpen}>
          <img src={Logo} alt="Logo" />
          <ul>
            <li onClick={() => handleNavigate('/game')} aria-hidden="true">
              <Text align="center" type="light">
                JOGAR
              </Text>
            </li>
            <li onClick={goToFeeback} aria-hidden="true">
              <Text align="center" type="light">
                DAR FEEDBACK
              </Text>
            </li>
            <li
              onClick={() => {
                window.location.href = '/#ranking';
              }}
              aria-hidden="true"
            >
              <Text align="center" type="light">
                RANKING GLOBAL
              </Text>
            </li>
            <li
              onClick={() => {
                window.location.href = '/#contributors';
              }}
              aria-hidden="true"
            >
              <Text align="center" type="light">
                CONTRIBUIDORES
              </Text>
            </li>
          </ul>
          <button onClick={() => setMenuIsOpen(false)} type="button">
            &times;
          </button>
        </NavMenu>
      </NavContent>
    </NavBar>
  );
}
