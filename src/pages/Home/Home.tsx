import { useMemo } from 'react';
import { FiInfo } from 'react-icons/fi';
import { RiNumbersFill } from 'react-icons/ri';
import BoardSquare from '../../components/BoardSquare';

import { CardTypes, SquareTypes } from '../../types';
import { Board, Container } from './Home.styles';

import LogoImg from '../../assets/logo.jpeg';

import CardsQueue from '../../components/CardsQueue';
import ModalStartGame from '../../components/ModalStartGame';
import { useGame } from '../../hooks/useGame.hook';
import ModalCard from '../../components/ModalCard';
import PlayerPin from '../../components/PlayerPin';
import ModalRanking from '../../components/ModalRanking';
import { useModal } from '../../hooks/useModal';
import Button from '../../components/Button/Button';
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';
import { Headline, Text } from '../../components/UI';
import { Flex } from '../../components/Layout';

function Home() {
  const { board, turnOf, activeCard, chooseCard, getCardOfType } = useGame();
  const { isOpen: modalRankingIsOpen, toggleModal: toggleModalRanking } =
    useModal();

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

  return (
    <Container>
      <Board>
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
                type={CardTypes.ArchDecisions}
                enabled={
                  playerSquare?.type === SquareTypes.ArchDecisions ||
                  playerSquare?.type === SquareTypes.Start
                }
              />
              <CardsQueue
                onClick={handleChooseCard}
                type={CardTypes.QualityAttributes}
                enabled={
                  playerSquare?.type === SquareTypes.QualityAttributes ||
                  playerSquare?.type === SquareTypes.Start
                }
              />
              <CardsQueue
                onClick={handleChooseCard}
                type={CardTypes.ArchPattern}
                enabled={
                  playerSquare?.type === SquareTypes.ArchPattern ||
                  playerSquare?.type === SquareTypes.Start
                }
              />
              <CardsQueue
                onClick={handleChooseCard}
                type={CardTypes.LuckOrBackLuck}
                enabled={playerSquare?.type === SquareTypes.LuckOrBackLuck}
              />
            </div>
            <div className="controls">
              <ButtonGroup gap={4}>
                <Button
                  size="sm"
                  variant="blue-outline"
                  onClick={toggleModalRanking}
                >
                  <RiNumbersFill />
                  Ranking
                </Button>
                <Button size="sm" variant="blue-outline" justIcon>
                  <FiInfo />
                </Button>
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
      <ModalStartGame />
      <ModalCard
        isOpen={!!activeCard}
        toggleModal={() => null}
        type={activeCard?.type || 0}
      />
      <ModalRanking
        isOpen={modalRankingIsOpen}
        toggleModal={() => toggleModalRanking()}
      />
    </Container>
  );
}

export default Home;
