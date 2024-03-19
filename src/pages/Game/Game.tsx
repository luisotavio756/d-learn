/* eslint-disable no-alert */
import { useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FiArchive, FiLogOut } from 'react-icons/fi';
import { RiNumbersFill } from 'react-icons/ri';
import { FaHistory } from 'react-icons/fa';

import LogoImg from '../../assets/logo.jpeg';

import BoardSquare from '../../components/BoardSquare';
import CardsQueue from '../../components/CardsQueue';
import ModalStartGame from '../../components/ModalStartGame';
import ModalCard from '../../components/ModalCard';
import PlayerPin from '../../components/PlayerPin';
import ModalRanking from '../../components/ModalRanking';
import ModalPlayerHistory from '../../components/ModalPlayerHistory';
import {
  Headline,
  Text,
  Button,
  ButtonGroup,
  LanguageSelector,
} from '../../components/UI';
import { Box, Flex } from '../../components/Layout';
import { ModalPlayerAuth } from '../../components/ModalPlayerAuth';
import { Board, Container } from './Game.styles';

import api from '../../services/api';
import { CardTypes, PlayerMode, SquareTypes } from '../../types';
import { useModal } from '../../hooks/useModal';
import { useAlert } from '../../hooks/useAlert';
import { useCardsQuery } from '../../queries/useCards';
import { usePlayerAuth } from '../../hooks/usePlayerAuth';
import { useGame } from '../../hooks/useGame.hook';
import { useToast } from '../../hooks/useToast';

function Game() {
  const { t } = useTranslation();
  const healthCheckIntervalRef = useRef<NodeJS.Timer | null>(null);

  const {
    board,
    turnOf,
    activeCard,
    gameIsBlocked,
    chooseCard,
    getCardOfType,
    forceEndGame,
  } = useGame();
  const { isOpen: modalRankingIsOpen, toggleModal: toggleModalRanking } =
    useModal();
  const {
    isOpen: modalPlayerHistoryIsOpen,
    toggleModal: toggleModalPlayerHistory,
  } = useModal();
  const { showAlert } = useAlert();
  const { addToast } = useToast();

  const { data: cardsFromServer = [], isFetching } = useCardsQuery();
  const { isLogged, mode, signOut } = usePlayerAuth();

  const playerSquare = useMemo(() => {
    const findSquare = board.find(item => item.id === turnOf?.square_id);

    return findSquare;
  }, [board, turnOf]);

  function handleChooseCard(type: CardTypes) {
    const card = getCardOfType(type);

    if (card && turnOf) {
      chooseCard(card);
    }
  }

  function isQueueEnabled(queueType: SquareTypes) {
    const playerSquareType = playerSquare?.type;

    return (
      (playerSquareType === queueType ||
        playerSquareType === SquareTypes.Start) &&
      !gameIsBlocked
    );
  }

  function handleEndGame() {
    showAlert({
      title: t('game.modals.endGame.title'),
      message: t('game.modals.endGame.message'),
      confirmAction: closeModal => {
        forceEndGame();
        closeModal();
      },
      cancelAction: closeModal => closeModal(),
    });
  }

  function handleLogout() {
    showAlert({
      title: t('game.modals.logout.title'),
      message: t('game.modals.logout.message'),
      cancelAction: closeAlert => closeAlert(),
      confirmAction: closeAlert => {
        signOut();
        closeAlert();
      },
    });
  }

  useEffect(() => {
    healthCheckIntervalRef.current = setInterval(
      () => {
        api
          .get('/health')
          .then(() => {
            console.log('Server is ok');
          })
          .catch(() => {
            addToast({
              title: t('game.toastServerStatus.title'),
              description: t('game.toastServerStatus.description'),
              type: 'info',
            });
          });
      },
      1000 * 60, // 1 minute
    );

    return () => {
      if (healthCheckIntervalRef?.current) {
        clearInterval(healthCheckIntervalRef?.current);
      }
    };
  }, [addToast]);

  useLayoutEffect(() => {
    const clientHeight = window.innerHeight;
    const clientWidth = window.innerWidth;

    if (clientHeight > clientWidth) {
      window.alert(t('game.alertMobileResolution'));
    }
  }, []);

  return (
    <Container>
      <Board
        shouldShow={
          !isFetching && [PlayerMode.NoAuth, PlayerMode.Ok].includes(mode)
        }
      >
        <div className="top">
          {board.slice(0, 16).map(item => (
            <BoardSquare key={item.id} id={item.id} type={item.type} />
          ))}
        </div>
        <Flex justifyContent="space-between">
          <div className="column1">
            {board.slice(38, 44).map(item => (
              <BoardSquare
                key={item.id}
                id={item.id}
                type={item.type}
                isInColumn
              />
            ))}
          </div>
          <Flex flexDirection="column" className="content-main">
            <Box className="logo">
              <img src={LogoImg} alt="" />
            </Box>
            <Flex flexDirection="column" className="info-and-queues" gap={16}>
              <Flex flexDirection="column">
                <Flex
                  shouldShow={!!turnOf}
                  alignItems="center"
                  gap={4}
                  className="turnOf"
                >
                  <PlayerPin
                    playerId={turnOf?.id ?? 0}
                    color={turnOf?.color ?? ''}
                    name={turnOf?.name ?? ''}
                    score={turnOf?.score ?? 0}
                    active={turnOf?.active ?? false}
                  />

                  <Headline weight="light" size="sm">
                    {t('game.turn')}
                  </Headline>
                  <Headline>{turnOf?.name}</Headline>
                </Flex>

                <Text type="neutral">{t('game.chooseCard')}</Text>
              </Flex>
              <Flex gap={32} className="queues">
                <CardsQueue
                  onClick={handleChooseCard}
                  type={CardTypes.QualityAttributes}
                  enabled={isQueueEnabled(SquareTypes.QualityAttributes)}
                />
                <CardsQueue
                  onClick={handleChooseCard}
                  type={CardTypes.ArchPattern}
                  enabled={isQueueEnabled(SquareTypes.ArchPattern)}
                />
                <CardsQueue
                  onClick={handleChooseCard}
                  type={CardTypes.ArchDecisions}
                  enabled={isQueueEnabled(SquareTypes.ArchDecisions)}
                />
                <CardsQueue
                  onClick={handleChooseCard}
                  type={CardTypes.LuckOrBadLuck}
                  enabled={
                    playerSquare?.type === SquareTypes.LuckOrBadLuck &&
                    !gameIsBlocked
                  }
                />
              </Flex>
            </Flex>
            <div className="controls">
              <ButtonGroup gap={4}>
                {isLogged && (
                  <Button
                    width="fit-content"
                    size="sm"
                    variant="yellow-outline"
                    onClick={toggleModalPlayerHistory}
                    disabled={gameIsBlocked}
                  >
                    <FaHistory />
                    {t('game.history')}
                  </Button>
                )}
                <Button
                  width="fit-content"
                  size="sm"
                  variant="blue-outline"
                  onClick={toggleModalRanking}
                  disabled={gameIsBlocked}
                >
                  <RiNumbersFill />
                  {t('game.ranking')}
                </Button>
                <Button
                  width="fit-content"
                  size="sm"
                  variant="red-outline"
                  onClick={handleEndGame}
                  disabled={gameIsBlocked}
                >
                  <FiArchive />
                  {t('game.endGame')}
                </Button>
                {isLogged && (
                  <Button
                    width="fit-content"
                    size="sm"
                    variant="red-outline"
                    onClick={handleLogout}
                    disabled={gameIsBlocked}
                  >
                    <FiLogOut />
                    {t('game.exit')}
                  </Button>
                )}
                <LanguageSelector size="md" openDirection="left" />
              </ButtonGroup>
            </div>
          </Flex>
          <div className="column2">
            {board.slice(16, 22).map(item => (
              <BoardSquare
                key={item.id}
                id={item.id}
                type={item.type}
                isInColumn
              />
            ))}
          </div>
        </Flex>
        <div className="bottom">
          {board.slice(22, 38).map(item => (
            <BoardSquare key={item.id} id={item.id} type={item.type} />
          ))}
        </div>
      </Board>
      <ModalStartGame isLoading={isFetching || cardsFromServer.length === 0} />
      <ModalPlayerAuth isLoading={isFetching} />
      <ModalCard
        isOpen={!!activeCard}
        toggleModal={() => null}
        type={activeCard?.type ?? 0}
      />
      <ModalRanking
        isOpen={modalRankingIsOpen}
        toggleModal={() => toggleModalRanking()}
      />
      <ModalPlayerHistory
        isOpen={modalPlayerHistoryIsOpen}
        toggleModal={() => toggleModalPlayerHistory()}
      />
    </Container>
  );
}

export default Game;
