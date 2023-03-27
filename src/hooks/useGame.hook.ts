import { useContext } from 'react';
import { GameContext } from '../contexts/game.context';

export function useGame() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('Game context not found');
  }

  return context;
}
