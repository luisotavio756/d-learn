import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GameProvider } from './contexts/game.context';

import Home from './pages/Home';
import GlobalStyles from './styles/global';
import { theme } from './styles/theme';
import { AlertProvider } from './contexts/alert.context';
import SignIn from './pages/SignIn/SignIn';

const App: React.FC = () => {
  return (
    <GameProvider>
      <ThemeProvider theme={theme}>
        <AlertProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/sys/login" element={<SignIn />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </AlertProvider>
        <GlobalStyles />
      </ThemeProvider>
    </GameProvider>
  );
};

export default App;
