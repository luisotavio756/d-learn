import React from 'react';
import './utils/i18n';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import GlobalStyles from './styles/global';

import { theme } from './styles/theme';
import { AlertProvider } from './contexts/alert.context';
import { ToastProvider } from './contexts/toast.context';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <AlertProvider>
          <Routes />
        </AlertProvider>
      </ToastProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
