import { useContext } from 'react';
import { PlayerContext, PlayerContextData } from '../contexts/player.context';

function usePlayerAuth(): PlayerContextData {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error('usePlayerAuth muste be user within as AuthProvider');
  }

  return context;
}

export { usePlayerAuth };
