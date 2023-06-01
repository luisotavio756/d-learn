import { useEffect, useMemo, useRef } from 'react';
import { FiArchive, FiLogOut } from 'react-icons/fi';
import { RiNumbersFill } from 'react-icons/ri';

import LogoImg from '../../assets/logo.jpeg';

import BoardSquare from '../../components/BoardSquare';
import CardsQueue from '../../components/CardsQueue';
import ModalStartGame from '../../components/ModalStartGame';
import ModalCard from '../../components/ModalCard';
import PlayerPin from '../../components/PlayerPin';
import ModalRanking from '../../components/ModalRanking';
import { Headline, Text, Button, ButtonGroup } from '../../components/UI';
import { Flex } from '../../components/Layout';
import { ModalPlayerAuth } from '../../components/ModalPlayerAuth';
import { Board, Container } from './Game.styles';

import { CardTypes, PlayerMode, SquareTypes } from '../../types';
import { useModal } from '../../hooks/useModal';
import { useAlert } from '../../hooks/useAlert';
import { useCardsQuery } from '../../queries/useCards';
import { usePlayerAuth } from '../../hooks/usePlayerAuth';
import { useGame } from '../../hooks/useGame.hook';
import api from '../../services/api';
import { useToast } from '../../hooks/useToast';

function Game() {
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
  const { showAlert } = useAlert();
  const { addToast } = useToast();

  const { isFetching } = useCardsQuery();
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
      title: 'Cancelar jogo',
      message: 'Tem certeza que deseja encerrar o jogo agora?',
      confirmAction: closeModal => {
        forceEndGame();
        closeModal();
      },
      cancelAction: closeModal => closeModal(),
    });
  }

  function handleLogout() {
    showAlert({
      title: 'Logout',
      message: 'Deseja realmente deslogar da aplicação?',
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
              title: 'Servidor indisponível',
              description:
                'Estamos tendo instabilidades no servidor, por favor, aguarde um momento',
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

  return (
    <Container>
      <Board
        shouldShow={
          !isFetching && [PlayerMode.NoAuth, PlayerMode.Ok].includes(mode)
        }
      >
        <div className="top">
          {board.slice(0, 14).map((item, i) => (
            <BoardSquare key={item.id} id={item.id} type={item.type} />
          ))}
        </div>
        <div className="main">
          <div className="column1">
            {board.slice(34, 40).map(item => (
              <BoardSquare
                key={item.id}
                id={item.id}
                type={item.type}
                isInColumn
              />
            ))}
          </div>
          <div className="content-main">
            <img src={LogoImg} alt="" />
            <Flex flexDirection="column" className="info">
              {turnOf && (
                <Flex alignItems="center" gap={4} className="turnOf">
                  <PlayerPin
                    playerId={turnOf.id}
                    color={turnOf.color}
                    name={turnOf.name}
                    score={turnOf.score}
                    active={turnOf.active}
                  />

                  <Headline weight="light" size="sm">
                    vez de
                  </Headline>
                  <Headline>{turnOf?.name}</Headline>
                </Flex>
              )}
              <Text type="neutral">Escolha uma carta abaixo</Text>
            </Flex>
            <div className="cards">
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
            </div>
            <div className="controls">
              <ButtonGroup gap={4}>
                <Button
                  width="fit-content"
                  size="sm"
                  variant="blue-outline"
                  onClick={toggleModalRanking}
                  disabled={gameIsBlocked}
                >
                  <RiNumbersFill />
                  Ranking
                </Button>
                <Button
                  width="fit-content"
                  size="sm"
                  variant="red-outline"
                  onClick={handleEndGame}
                  disabled={gameIsBlocked}
                >
                  <FiArchive />
                  Finalizar jogo
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
                    Sair
                  </Button>
                )}
              </ButtonGroup>
            </div>
          </div>
          <div className="column2">
            {board.slice(14, 20).map(item => (
              <BoardSquare
                key={item.id}
                id={item.id}
                type={item.type}
                isInColumn
              />
            ))}
          </div>
        </div>
        <div className="bottom">
          {board.slice(20, 34).map(item => (
            <BoardSquare key={item.id} id={item.id} type={item.type} />
          ))}
        </div>
      </Board>
      <ModalStartGame isLoading={isFetching} />
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
    </Container>
  );
}

export default Game;
