import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes as RoutesReactRouter,
} from 'react-router-dom';

import Admin from '../pages/Admin/Admin';
import Game from '../pages/Game';
import Landing from '../pages/Landing';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <RoutesReactRouter>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/game" element={<Game />} />
        <Route path="/" element={<Landing />} />
      </RoutesReactRouter>
    </BrowserRouter>
  );
};

export default Routes;
