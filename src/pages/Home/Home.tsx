import { useState } from 'react';

import BoardSquare from '../../components/BoardSquare';
import INITIAL_BOARD from '../../initialBoard';

import { Square } from '../../types';
import { Board, Container } from './Home.styles';

function Home() {
  const [board, setBoard] = useState<Square[]>(INITIAL_BOARD);

  return (
    <Container>
      <Board>
        <div className="top">
          {board.slice(0, 13).map((item, i) => (
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
            {board.slice(33, 40).map(item => (
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
            <div className="logo" />
            <div className="cards">
              <div className="queue" />
              <div className="queue" />
              <div className="queue" />
              <div className="queue" />
            </div>
          </div>
          <div className="column2">
            {board.slice(13, 20).map(item => (
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
          {board.slice(21, 34).map(item => (
            <BoardSquare
              key={item.id}
              id={item.id}
              players={item.players}
              type={item.type}
            />
          ))}
        </div>
      </Board>
    </Container>
  );
}

export default Home;
