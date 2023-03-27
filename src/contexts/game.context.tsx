import { createContext, useCallback, useMemo, useState } from 'react';

import { Player, Square } from '../types';
import INITIAL_BOARD from '../initialBoard';

interface GameProviderProps {
  children: React.ReactNode;
}

interface GameContextData {
  board: Square[];
  players: Player[];
  gameStarted: boolean;
  turnOf: Player | null;
  startGame(data: Player[]): void;
}

export const GameContext = createContext({} as GameContextData);

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [turnOf, setTurnOff] = useState<Player | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [board, setBoard] = useState<Square[]>(INITIAL_BOARD);

  const addPlayersToSquare = useCallback(
    (playersList: Player[], square_id: string) => {
      const playersIds = playersList.map(item => item.id);

      const updatedPlayers = players.map(player =>
        playersIds.includes(player.id)
          ? {
              ...player,
              square_id,
            }
          : player,
      );

      setPlayers(updatedPlayers);
    },
    [players],
  );

  const startGame = useCallback((data: Player[]) => {
    setPlayers(data);
    setGameStarted(true);
    setTurnOff(data[0]);
  }, []);

  const value = useMemo(
    () => ({
      players,
      gameStarted,
      turnOf,
      board,
      startGame,
    }),
    [players, gameStarted, turnOf, board, startGame],
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
