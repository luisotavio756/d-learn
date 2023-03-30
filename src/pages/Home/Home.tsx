import BoardSquare from '../../components/BoardSquare';

import { CardTypes, SquareTypes } from '../../types';
import { Board, Container } from './Home.styles';

import LogoImg from '../../assets/logo.jpeg';
import CardsQueue from '../../components/CardsQueue';
import ModalStartGame from '../../components/ModalStartGame';
import { useGame } from '../../hooks/useGame.hook';
import ModalCard from '../../components/ModalCard';

function Home() {
  const { board } = useGame();

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
        isOpen
        toggleModal={() => null}
        type={CardTypes.ArchDecisions}
      />
    </Container>
  );
}

export default Home;
