import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GameProvider } from './contexts/game.context';

import Home from './pages/Home';
import Admin from './pages/Admin';
import GlobalStyles from './styles/global';
import { theme } from './styles/theme';
import { AlertProvider } from './contexts/alert.context';
import { ToastProvider } from './contexts/toast.context';

const App: React.FC = () => {
  return (
    <GameProvider>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <AlertProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/admin/*" element={<Admin />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>
          </AlertProvider>
        </ToastProvider>
        <GlobalStyles />
      </ThemeProvider>
    </GameProvider>
  );
};

export default App;
