import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GameProvider } from './contexts/game.context';

import Home from './pages/Home';
import GlobalStyles from './styles/global';
import { theme } from './styles/theme';

const App: React.FC = () => {
  return (
    <GameProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </GameProvider>
  );
};

export default App;
