import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { queryClient } from '../services/queryClient';

import {
  Card,
  CardTypes,
  LuckTypes,
  LuckActions,
  History,
  Player,
  Square,
  SquareTypes,
} from '../types';
import INITIAL_BOARD from '../initialBoard';
import { getRestoredCards, getRestoredCardsByType } from '../utils/cards';
import { useAudio } from '../hooks/useAudio';
import { useCardsQuery } from '../queries/useCards';
import { usePlayerAuth } from '../hooks/usePlayerAuth';
import api from '../services/api';

type PassTurnToNextPlayer = {
  answeredCorrectly?: boolean;
};

interface GameProviderProps {
  children: React.ReactNode;
}

interface GameContextData {
  board: Square[];
  cards: Card[];
  timer: number | null;
  activeCard: Card | null;
  players: Player[];
  gameStarted: boolean;
  gameEnd: boolean;
  turnOf: Player | undefined;
  gameIsBlocked: boolean;
  getCardOfType(type: CardTypes): Card | undefined;
  startGame(data: Player[], timer: number): void;
  chooseCard(card: Card): void;
  answer(solution: string): boolean;
  passTurnToNextPlayer(data: PassTurnToNextPlayer): void;
  endPlay(card: Card, isCorrect?: boolean): void;
  restartGame(type: 'soft' | 'hard'): void;
  forceEndGame(): void;
}

export const GameContext = createContext({} as GameContextData);

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const { audio: endGameSound } = useAudio('end-game.mp3');
  const [players, setPlayers] = useState<Player[]>([]);

  const [gameIsBlocked, setGameIsBlocked] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [board, setBoard] = useState<Square[]>(INITIAL_BOARD);
  const [cards, setCards] = useState<Card[]>([]);
  const [timer, setTimer] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState<Card | null>(null);
  const [startedAt, setStartedAt] = useState<Date | null>(null);
  const [endAt, setEndAt] = useState<Date | null>(null);

  const {
    data: cardsFromServer = [],
    isFetching: isFetchingCards,
    refetch,
  } = useCardsQuery();
  const { isLogged, player: loggedUser } = usePlayerAuth();

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
        const restoredCards = getRestoredCardsByType(cards, lastUsedCard.type);

        setCards(restoredCards);
      }
    },
    [cards],
  );

  const updatePlayerScore = useCallback((player: Player, score = 0) => {
    setPlayers(oldState =>
      oldState.map(item =>
        item.id === player.id
          ? Object.assign(item, {
              score,
            })
          : item,
      ),
    );
  }, []);

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

  const removeCustomLuckActionFromPlayer = useCallback((player: Player) => {
    if (player.customLuckAction === undefined) return;

    setPlayers(oldState =>
      oldState.map(item =>
        item.id === player.id
          ? Object.assign(item, {
              customLuckAction: undefined,
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

  const addCustomLuckActionFromPlayer = useCallback(
    (player: Player, card: Card) => {
      if (card.luckAction === undefined) return;

      const updatedPlayers = players.map(item =>
        item.id === player.id
          ? Object.assign(item, {
              customLuckAction: card.luckAction,
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

  const getNextPlayerIndex = useCallback(
    (actualPlayerIndex: number) => {
      const nextPlayerIndexBeforeCalc = actualPlayerIndex + 1;

      const nextPlayerIndex =
        nextPlayerIndexBeforeCalc >= players.length
          ? 0
          : nextPlayerIndexBeforeCalc;

      return nextPlayerIndex;
    },
    [players],
  );

  const getNextPlayer = useCallback(
    (actualPlayerIndex: number) => {
      let newActualPlayerIndex = getNextPlayerIndex(actualPlayerIndex);

      while (
        players[newActualPlayerIndex].customLuckAction ===
        LuckActions.OneRoundWithoutPlaying
      ) {
        players[newActualPlayerIndex].customLuckAction = undefined;
        newActualPlayerIndex = getNextPlayerIndex(newActualPlayerIndex);
      }

      return players[newActualPlayerIndex];
    },
    [players, getNextPlayerIndex],
  );

  const decideActionForLuckActionChooseDeckByAnswered = useCallback(
    (
      actualPlayer: Player,
      actualPlayerIndex: number,
      answeredCorrectly?: boolean,
    ) => {
      if (answeredCorrectly) {
        setActivePlayer(actualPlayer);
        removeCustomLuckActionFromPlayer(actualPlayer);
      } else {
        const actualPlayerSquareIndex = board.findIndex(
          item => item.id === actualPlayer.square_id,
        );

        updatePlayerScore(actualPlayer, actualPlayerSquareIndex - 1);
        const nextSquare = board[actualPlayerSquareIndex - 1];
        addPlayersToSquare([actualPlayer], nextSquare.id);
        removeCustomLuckActionFromPlayer(actualPlayer);

        setActivePlayer(getNextPlayer(actualPlayerIndex));
      }
    },
    [
      setActivePlayer,
      removeCustomLuckActionFromPlayer,
      updatePlayerScore,
      board,
      addPlayersToSquare,
      getNextPlayer,
    ],
  );

  const passTurnToNextPlayer = useCallback(
    ({ answeredCorrectly }: PassTurnToNextPlayer) => {
      const actualPlayerIndex = players.findIndex(item => item.active);

      if (actualPlayerIndex === -1) return;

      const actualPlayer = players[actualPlayerIndex];

      const isActiveLuckActionThisTurn =
        activeCard?.type !== CardTypes.LuckOrBadLuck ||
        activeCard?.activeLuckActionInTheSameTurn;

      if (
        isActiveLuckActionThisTurn &&
        actualPlayer.customLuckAction === LuckActions.ChooseDeck
      ) {
        decideActionForLuckActionChooseDeckByAnswered(
          actualPlayer,
          actualPlayerIndex,
          answeredCorrectly,
        );
      } else if (
        isActiveLuckActionThisTurn &&
        actualPlayer.customLuckAction === LuckActions.ExtraRoundPlaying
      ) {
        setActivePlayer(actualPlayer);
        removeCustomLuckActionFromPlayer(actualPlayer);
      } else {
        setActivePlayer(getNextPlayer(actualPlayerIndex));
      }
    },
    [
      activeCard,
      getNextPlayer,
      decideActionForLuckActionChooseDeckByAnswered,
      players,
      removeCustomLuckActionFromPlayer,
      setActivePlayer,
    ],
  );

  const startGame = useCallback((data: Player[], timer: number) => {
    const playersWithActivePlayer = data.map((item, i) => ({
      ...item,
      active: i === 0,
    }));

    setPlayers(playersWithActivePlayer);
    setGameStarted(true);
    setStartedAt(new Date());
    setTimer(timer);
  }, []);

  const sendGameInfoReport = useCallback(() => {
    if (!isLogged) return;

    const orderedPlayers = [...players].sort((a, b) => b.score - a.score);

    const ownerPlayerIndex = orderedPlayers.findIndex(
      player => player.id === 1,
    );

    const winnerPlayer = orderedPlayers[0];
    const ownerPlayer = orderedPlayers[ownerPlayerIndex];

    const gameInfo = {
      winnerName: winnerPlayer.name,
      winnerScore: winnerPlayer.score,
      startedAt: startedAt?.toISOString(),
      endAt: new Date().toISOString(),
      ownerName: loggedUser.nickname,
      ownerId: loggedUser._id,
      ownerScore: ownerPlayer.score,
      ownerPlacing: ownerPlayerIndex + 1,
    } as History;

    api
      .post('/history', gameInfo)
      .then(() => {
        console.log('Log do jogo salvo com sucesso!');
      })
      .catch(error => {
        console.log(error);
      });

    queryClient.invalidateQueries('history');
  }, [players, loggedUser, startedAt, isLogged]);

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
      let nextSquareIndex =
        card.luckType === LuckTypes.Luck
          ? actualSquare + card.stars
          : actualSquare - card.stars;

      if (nextSquareIndex < 0) nextSquareIndex = 0;

      const nextSquare = board[nextSquareIndex];

      addPlayersToSquare([player], nextSquare.id);
      passTurnToNextPlayer({});
      setActiveCard(null);

      updatePlayerScore(player, nextSquareIndex);
    },
    [board, updatePlayerScore, addPlayersToSquare, passTurnToNextPlayer],
  );

  const handleEndPlayFromNormalCard = useCallback(
    (card: Card, player: Player, actualSquareIndex: number) => {
      const stars = player.customStarsCalc
        ? player.customStarsCalc(card.stars)
        : card.stars;

      const nextSquareIndex = actualSquareIndex + stars;

      if (nextSquareIndex >= board.length) {
        updatePlayerScore(player, board.length);

        setGameIsBlocked(true);
        endGameSound.play();

        const nextSquare = board[0];

        addPlayersToSquare([player], nextSquare.id);
        setActiveCard(null);
        sendGameInfoReport();

        setTimeout(() => {
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
          passTurnToNextPlayer({ answeredCorrectly: true });
        }

        updatePlayerScore(player, nextSquareIndex);
      }
    },
    [
      board,
      endGameSound,
      updatePlayerScore,
      getCardOfType,
      addPlayersToSquare,
      passTurnToNextPlayer,
      sendGameInfoReport,
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
          removeCustomCalcFromPlayer(turnOf);
          removeCustomLuckActionFromPlayer(turnOf);
          addCustomCalcFromPlayer(turnOf, card);
          addCustomLuckActionFromPlayer(turnOf, card);
          handleEndPlayFromLuckCard(card, turnOf, actualPlayerSquareIndex);
          break;
        case isCorrect:
          handleEndPlayFromNormalCard(card, turnOf, actualPlayerSquareIndex);
          removeCustomCalcFromPlayer(turnOf);
          break;
        default:
          passTurnToNextPlayer({});
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
      addCustomLuckActionFromPlayer,
      removeCustomLuckActionFromPlayer,
    ],
  );

  const restartGame = useCallback(
    (type: 'soft' | 'hard') => {
      if (type === 'hard') {
        setPlayers([]);
        setActivePlayer(null);
        setGameEnd(false);
        setCards(getRestoredCards(cards));
        setBoard(INITIAL_BOARD);
        setActiveCard(null);
        setGameStarted(false);
        setTimer(null);
      }
    },
    [setActivePlayer],
  );

  const forceEndGame = useCallback(() => {
    endGameSound.play();

    setGameEnd(true);
    setGameIsBlocked(false);

    sendGameInfoReport();
  }, [endGameSound, sendGameInfoReport]);

  const value = useMemo(
    () => ({
      players,
      gameStarted,
      gameEnd,
      turnOf,
      board,
      cards,
      timer,
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
      timer,
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

  useEffect(() => {
    refetch().then(translatedCards => {
      const usedCardsIds = cards
        .filter(card => card.used)
        .map(card => card._id);

      translatedCards.data?.forEach(translatedCard => {
        if (usedCardsIds.includes(translatedCard._id))
          translatedCard.used = true;
      });
    });
  }, [i18n.language, refetch]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
