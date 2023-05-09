import React, { useMemo } from 'react';
import { FiRefreshCw, FiUsers } from 'react-icons/fi';
import { RiNumbersFill } from 'react-icons/ri';

import { useGame } from '../../hooks/useGame.hook';

import { ButtonGroup, Button } from '../UI';
import Modal from '../Modal';

import { Container } from './ModalRanking.styles';

interface ModalRankingProps {
  isOpen: boolean;
  toggleModal(): void;
}

const ModalRanking: React.FC<ModalRankingProps> = ({ isOpen, toggleModal }) => {
  const { players, gameEnd, restartGame } = useGame();

  const orderedPlayers = useMemo(
    () => [...players].sort((a, b) => b.score - a.score),
    [players],
  );

  return (
    <Modal
      width="454px"
      isOpen={isOpen || gameEnd}
      showCloseButton={isOpen}
      toggleModal={toggleModal}
    >
      <Container>
        <div className="title">
          <RiNumbersFill size={28} />
          <h2>Ranking do jogo</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th style={{ width: 40 }}>#</th>
              <th>Nome</th>
              <th style={{ width: 80 }}>Score</th>
            </tr>
          </thead>
          <tbody>
            {orderedPlayers.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  {['🥇', '🥈', '🥉', ''][index]}
                  {item.name}
                </td>
                <td>{item.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {gameEnd && (
          <div className="play-again">
            <h3>Obrigado por jogarem o D-LEARN !</h3>
            <p>
              Por favor, responda essa pequena pesquisa para nos ajudar a
              melhorar o jogo ainda mais{' '}
              <a
                href="https://forms.gle/JzX6VLx3et8jwcgT7"
                target="_blank"
                rel="noreferrer"
              >
                aqui
              </a>
            </p>
            <ButtonGroup gap={8}>
              <Button variant="blue" size="sm">
                <FiUsers /> Reiniciar com os mesmos jogadores
              </Button>
              <Button
                variant="blue-outline"
                size="sm"
                onClick={() => restartGame('hard')}
              >
                <FiRefreshCw /> Reiniciar jogo
              </Button>
            </ButtonGroup>
          </div>
        )}
      </Container>
    </Modal>
  );
};

export default ModalRanking;
