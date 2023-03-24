import { useState } from 'react';

import BoardSquare from '../../components/BoardSquare';
import INITIAL_BOARD from '../../initialBoard';

import { Square, SquareTypes } from '../../types';
import { Board, Container } from './Home.styles';

import LogoImg from '../../assets/logo.jpeg';
import CardsQueue from '../../components/CardsQueue';
import { useModal } from '../../hooks/useModal';
import ModalStartGame from '../../components/ModalStartGame';

function Home() {
  const { isOpen, toggleModal } = useModal();
  const [board, setBoard] = useState<Square[]>(INITIAL_BOARD);

  return (
    <Container>
      <Board>
        <div className="top">
          {board.slice(0, 14).map((item, i) => (
            <BoardSquare
              key={item.id}
              id={item.id}
              players={item.players}
              type={item.type}
            />
          ))}
        </div>
        <div className="main">
          <div className="column1">
            {board.slice(34, 40).map(item => (
              <BoardSquare
                key={item.id}
                id={item.id}
                players={item.players}
                type={item.type}
                isInColumn
              />
            ))}
          </div>
          <div className="content-main">
            <img src={LogoImg} alt="" />
            <div className="cards">
              <CardsQueue type={SquareTypes.ArchDecisions} enabled />
              <CardsQueue type={SquareTypes.QualityAttributes} enabled />
              <CardsQueue type={SquareTypes.ArchPattern} enabled />
              <CardsQueue type={SquareTypes.LuckOrBackLuck} enabled />
            </div>
          </div>
          <div className="column2">
            {board.slice(14, 20).map(item => (
              <BoardSquare
                key={item.id}
                id={item.id}
                players={item.players}
                type={item.type}
                isInColumn
              />
            ))}
          </div>
        </div>
        <div className="bottom">
          {board.slice(20, 34).map(item => (
            <BoardSquare
              key={item.id}
              id={item.id}
              players={item.players}
              type={item.type}
            />
          ))}
        </div>
      </Board>
      <ModalStartGame isOpen setIsOpen={toggleModal} />
    </Container>
  );
}

export default Home;
