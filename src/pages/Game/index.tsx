import React from 'react';

import { GameProvider } from '../../contexts/game.context';
import GamePage from './Game';

const Game: React.FC = () => {
  return (
    <GameProvider>
      <GamePage />
    </GameProvider>
  );
};

export default Game;
