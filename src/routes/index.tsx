import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes as RoutesReactRouter,
} from 'react-router-dom';

import Admin from '../pages/Admin/Admin';
import Game from '../pages/Game';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <RoutesReactRouter>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/" element={<Game />} />
      </RoutesReactRouter>
    </BrowserRouter>
  );
};

export default Routes;
