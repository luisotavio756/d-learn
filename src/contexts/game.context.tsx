import { createContext, useCallback, useMemo, useState } from 'react';

import { Card, Player, Square } from '../types';
import INITIAL_BOARD from '../initialBoard';
import INITIAL_CARDS from '../cards';

interface GameProviderProps {
  children: React.ReactNode;
}

interface GameContextData {
  board: Square[];
  cards: Card[];
  activeCard: Card | null;
  players: Player[];
  gameStarted: boolean;
  turnOf: Player | null;
  startGame(data: Player[]): void;
  chooseCard(card: Card): void;
  answer(solution: string): boolean;
  passTurnToNextPlayer(): void;
  endPlay(card: Card, isCorrect: boolean): void;
}

export const GameContext = createContext({} as GameContextData);

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [players, setPlayers] = useState<Player[]>([
    {
      id: 1,
      name: 'Luis',
      score: 0,
      color: '#00B5D8',
      square_id: '1',
    },
    {
      id: 2,
      name: 'Bia',
      score: 0,
      color: 'red',
      square_id: '1',
    },
  ]);
  const [turnOf, setTurnOff] = useState<Player | null>(players[0] || null);
  const [gameStarted, setGameStarted] = useState(true);
  const [board, setBoard] = useState<Square[]>(INITIAL_BOARD);
  const [cards, setCards] = useState<Card[]>(INITIAL_CARDS);
  const [activeCard, setActiveCard] = useState<Card | null>(null);

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

  const passTurnToNextPlayer = useCallback(() => {
    const actualPlayerIndex = players.findIndex(item => item.id === turnOf?.id);

    if (actualPlayerIndex !== -1) {
      const nextPlayer = players[actualPlayerIndex + 1];

      if (!nextPlayer) {
        const firstPlayer = players[0];

        setTurnOff(firstPlayer);
      } else {
        setTurnOff(nextPlayer);
      }
    }
  }, [turnOf, players]);

  const startGame = useCallback((data: Player[]) => {
    setPlayers(data);
    setGameStarted(true);
    setTurnOff(data[0]);
  }, []);

  const chooseCard = useCallback(
    (card: Card) => {
      if (!turnOf?.id) {
        alert('Não há jogador ativo!');

        return;
      }

      if (card.used) {
        alert('carta usada');

        return;
      }

      setActiveCard(card);
    },
    [turnOf],
  );

  const answer = useCallback(
    (solution: string) => {
      if (!turnOf?.id) {
        alert('Não há jogador ativo!');

        return false;
      }

      if (!activeCard) {
        alert('Não há carta!');

        return false;
      }

      return solution === activeCard?.solution;
    },
    [turnOf, activeCard],
  );

  const endPlay = useCallback(
    (card: Card, isCorrect: boolean) => {
      if (isCorrect && turnOf) {
        const actualPlayerSquareIndex = board.findIndex(
          item => item.id === turnOf.square_id,
        );
        const nextSquareIndex = actualPlayerSquareIndex + card.stars;

        if (nextSquareIndex >= board.length - 1) {
          const nextSquare = board[board.length - 1];

          addPlayersToSquare([turnOf], nextSquare.id);
          setActiveCard(null);

          alert('JOGO FINALIZADO');
          // TODO: FInish game
        } else {
          const nextSquare = board[nextSquareIndex];

          addPlayersToSquare([turnOf], nextSquare.id);
          passTurnToNextPlayer();
          setActiveCard(null);
        }
      } else if (!isCorrect && turnOf) {
        passTurnToNextPlayer();
        setActiveCard(null);
      }
    },
    [board, turnOf, addPlayersToSquare, passTurnToNextPlayer],
  );

  const value = useMemo(
    () => ({
      players,
      gameStarted,
      turnOf,
      board,
      cards,
      activeCard,
      passTurnToNextPlayer,
      startGame,
      chooseCard,
      answer,
      endPlay,
    }),
    [
      players,
      gameStarted,
      turnOf,
      board,
      cards,
      activeCard,
      passTurnToNextPlayer,
      startGame,
      chooseCard,
      answer,
      endPlay,
    ],
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
