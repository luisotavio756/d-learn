import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Card, CardTypes, Player, Square, SquareTypes } from '../types';
import INITIAL_BOARD from '../initialBoard';
import INITIAL_CARDS from '../cards';
import { getRestoredCards } from '../utils/cards';
import { useAudio } from '../hooks/useAudio';
import { useCardsQuery } from '../queries/useCards';

interface GameProviderProps {
  children: React.ReactNode;
}

interface GameInfo {
  players: Player[];
  cards: Card[];
  activeCard: Card | null;
  startedAt: Date;
  endAt?: Date | null;
}

interface GameContextData {
  board: Square[];
  cards: Card[];
  activeCard: Card | null;
  players: Player[];
  gameStarted: boolean;
  gameEnd: boolean;
  turnOf: Player | undefined;
  gameIsBlocked: boolean;
  getCardOfType(type: CardTypes): Card | undefined;
  startGame(data: Player[]): void;
  chooseCard(card: Card): void;
  answer(solution: string): boolean;
  passTurnToNextPlayer(): void;
  endPlay(card: Card, isCorrect?: boolean): void;
  restartGame(type: 'soft' | 'hard'): void;
  forceEndGame(): void;
}

export const GameContext = createContext({} as GameContextData);

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const { audio: endGameSound } = useAudio('end-game.mp3');
  const [players, setPlayers] = useState<Player[]>([]);

  const [gameIsBlocked, setGameIsBlocked] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [board, setBoard] = useState<Square[]>(INITIAL_BOARD);
  const [cards, setCards] = useState<Card[]>(INITIAL_CARDS);
  const [activeCard, setActiveCard] = useState<Card | null>(null);
  const [startedAt, setStartedAt] = useState<Date | null>(null);
  const [endAt, setEndAt] = useState<Date | null>(null);

  const { data: cardsFromServer = [], isFetching: isFetchingCards } =
    useCardsQuery();

  const turnOf = useMemo(() => players.find(item => item.active), [players]);

  const updateCardsAfterEndPlay = useCallback(
    (lastUsedCard: Card) => {
      const updatedCards = cards.map(item =>
        item._id === lastUsedCard._id
          ? {
              ...item,
              used: true,
            }
          : item,
      );

      const isAllCardsUsed = updatedCards
        .filter(item => item.type === lastUsedCard.type)
        .every(item => item.used);

      if (!isAllCardsUsed) {
        setCards(updatedCards);
      } else {
        const restoredCards = getRestoredCards(cards);

        setCards(restoredCards);
      }
    },
    [cards],
  );

  const updatePlayerScore = useCallback(
    (player: Player, scoreToIncrement = 0) => {
      setPlayers(oldState =>
        oldState.map(item =>
          item.id === player.id
            ? Object.assign(item, {
                score: item.score + scoreToIncrement,
              })
            : item,
        ),
      );
    },
    [],
  );

  const setActivePlayer = useCallback(
    (player: Player | null) => {
      const playerIndex = players.findIndex(item => item.id === player?.id);

      setPlayers(oldState =>
        oldState.map((item, i) => ({
          ...item,
          active: i === playerIndex,
        })),
      );
    },
    [players],
  );

  const removeCustomCalcFromPlayer = useCallback((player: Player) => {
    if (!player.customStarsCalc) return;

    setPlayers(oldState =>
      oldState.map(item =>
        item.id === player.id
          ? Object.assign(item, {
              customStarsCalc: undefined,
            })
          : item,
      ),
    );
  }, []);

  const addCustomCalcFromPlayer = useCallback(
    (player: Player, card: Card) => {
      if (!card.starsCalc) return;

      const updatedPlayers = players.map(item =>
        item.id === player.id
          ? Object.assign(item, {
              customStarsCalc: card.starsCalc,
            })
          : item,
      );

      setPlayers(updatedPlayers);
    },
    [players],
  );

  const addPlayersToSquare = useCallback(
    (playersList: Player[], square_id: string) => {
      const playersIds = playersList.map(item => item.id);

      const updatedPlayers = players.map(player =>
        playersIds.includes(player.id)
          ? Object.assign(player, {
              square_id,
            })
          : player,
      );

      setPlayers(updatedPlayers);
    },
    [players],
  );

  const passTurnToNextPlayer = useCallback(() => {
    const actualPlayerIndex = players.findIndex(item => item.active);

    if (actualPlayerIndex === -1) return;

    const nextPlayerIndex = actualPlayerIndex + 1;

    if (nextPlayerIndex >= players.length) {
      setActivePlayer(players[0]);
    } else {
      setActivePlayer(players[nextPlayerIndex]);
    }
  }, [players, setActivePlayer]);

  const startGame = useCallback((data: Player[]) => {
    const playersWithActivePlayer = data.map((item, i) => ({
      ...item,
      active: i === 0,
    }));

    setPlayers(playersWithActivePlayer);
    setGameStarted(true);
    setStartedAt(new Date());
  }, []);

  const getCardOfType = useCallback(
    (type: CardTypes) => {
      const card = cards.find(item => item.type === type && !item.used);

      return card;
    },
    [cards],
  );

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

  const handleEndPlayFromLuckCard = useCallback(
    (card: Card, player: Player, actualSquare: number) => {
      let nextSquareIndex;

      if (card.luckType === 'luck') {
        updatePlayerScore(player, card.stars);

        nextSquareIndex = actualSquare + card.stars;
      } else {
        updatePlayerScore(player, -card.stars);

        nextSquareIndex = actualSquare - card.stars;
      }

      const nextSquare = board[nextSquareIndex];

      addPlayersToSquare([player], nextSquare.id);
      passTurnToNextPlayer();
      setActiveCard(null);
    },
    [board, updatePlayerScore, addPlayersToSquare, passTurnToNextPlayer],
  );

  const handleEndPlayFromNormalCard = useCallback(
    (card: Card, player: Player, actualSquareIndex: number) => {
      const stars = player.customStarsCalc
        ? player.customStarsCalc(card.stars)
        : card.stars;
      const nextSquareIndex = actualSquareIndex + stars;

      if (nextSquareIndex >= board.length - 1) {
        setGameIsBlocked(true);
        endGameSound.play();

        const nextSquare = board[board.length - 1];

        addPlayersToSquare([player], nextSquare.id);
        setActiveCard(null);

        setTimeout(() => {
          setEndAt(new Date());
          setGameEnd(true);
          setGameIsBlocked(false);
        }, 1000);
      } else {
        const card = getCardOfType(CardTypes.LuckOrBadLuck);
        const nextSquare = board[nextSquareIndex];

        if (nextSquare.type === SquareTypes.LuckOrBadLuck && card) {
          addPlayersToSquare([player], nextSquare.id);
          setActiveCard(null);
          setGameIsBlocked(true);

          setTimeout(() => {
            setActiveCard(card);
            setGameIsBlocked(false);
          }, 1000);
        } else {
          addPlayersToSquare([player], nextSquare.id);
          setActiveCard(null);
          passTurnToNextPlayer();
        }
      }

      updatePlayerScore(player, card.stars);
    },
    [
      board,
      endGameSound,
      updatePlayerScore,
      getCardOfType,
      addPlayersToSquare,
      passTurnToNextPlayer,
    ],
  );

  const endPlay = useCallback(
    (card: Card, isCorrect?: boolean) => {
      if (!turnOf) {
        return;
      }

      const actualPlayerSquareIndex = board.findIndex(
        item => item.id === turnOf?.square_id,
      );

      switch (true) {
        case card.type === CardTypes.LuckOrBadLuck:
          addCustomCalcFromPlayer(turnOf, card);
          handleEndPlayFromLuckCard(card, turnOf, actualPlayerSquareIndex);
          break;
        case isCorrect:
          handleEndPlayFromNormalCard(card, turnOf, actualPlayerSquareIndex);
          removeCustomCalcFromPlayer(turnOf);
          break;
        default:
          passTurnToNextPlayer();
          setActiveCard(null);

          removeCustomCalcFromPlayer(turnOf);
          break;
      }

      updateCardsAfterEndPlay(card);
    },
    [
      turnOf,
      board,
      updateCardsAfterEndPlay,
      passTurnToNextPlayer,
      handleEndPlayFromLuckCard,
      handleEndPlayFromNormalCard,
      addCustomCalcFromPlayer,
      removeCustomCalcFromPlayer,
    ],
  );

  const restartGame = useCallback(
    (type: 'soft' | 'hard') => {
      if (type === 'hard') {
        setPlayers([]);
        setActivePlayer(null);
        setGameEnd(false);
        setCards(INITIAL_CARDS);
        setBoard(INITIAL_BOARD);
        setActiveCard(null);
        setGameStarted(false);
      }
    },
    [setActivePlayer],
  );

  const forceEndGame = useCallback(() => {
    endGameSound.play();

    setGameEnd(true);
    setGameIsBlocked(false);
    setEndAt(new Date());
  }, [endGameSound]);

  const value = useMemo(
    () => ({
      players,
      gameStarted,
      gameEnd,
      turnOf,
      board,
      cards,
      activeCard,
      gameIsBlocked,
      passTurnToNextPlayer,
      startGame,
      chooseCard,
      answer,
      endPlay,
      restartGame,
      getCardOfType,
      forceEndGame,
    }),
    [
      players,
      gameStarted,
      gameEnd,
      turnOf,
      board,
      cards,
      activeCard,
      gameIsBlocked,
      passTurnToNextPlayer,
      startGame,
      chooseCard,
      answer,
      endPlay,
      restartGame,
      getCardOfType,
      forceEndGame,
    ],
  );

  useEffect(() => {
    if (!isFetchingCards && cardsFromServer.length) {
      setCards(cardsFromServer);
    }
  }, [isFetchingCards, cardsFromServer]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
