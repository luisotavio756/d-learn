import React from 'react';
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes as RoutesReactRouter,
} from 'react-router-dom';

import Admin from '../pages/Admin/Admin';
import Game from '../pages/Game';
import Landing from '../pages/Landing';
import { PlayerProvider } from '../contexts/player.context';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <RoutesReactRouter>
        <Route path="/admin/*" element={<Admin />} />

        <Route
          path="/"
          element={
            <PlayerProvider>
              <Outlet />
            </PlayerProvider>
          }
        >
          <Route path="/game" element={<Game />} />

          <Route path="/" element={<Landing />} />
        </Route>
      </RoutesReactRouter>
    </BrowserRouter>
  );
};

export default Routes;
