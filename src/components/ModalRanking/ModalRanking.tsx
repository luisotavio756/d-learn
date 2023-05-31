import React, { useMemo } from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import { RiNumbersFill } from 'react-icons/ri';

import { useGame } from '../../hooks/useGame.hook';

import { ButtonGroup, Button, Text, Headline } from '../UI';
import Modal from '../Modal';

import { Container } from './ModalRanking.styles';
import { usePlayerAuth } from '../../hooks/usePlayerAuth';
import { Flex } from '../Layout';

interface ModalRankingProps {
  isOpen: boolean;
  toggleModal(): void;
}

const ModalRanking: React.FC<ModalRankingProps> = ({ isOpen, toggleModal }) => {
  const { players, gameEnd, restartGame } = useGame();
  const { isLogged } = usePlayerAuth();

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
        <Flex
          shouldShow={gameEnd}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          className="play-again"
          gap={8}
        >
          <Headline>Obrigado por jogarem o D-LEARN!</Headline>
          {isLogged && (
            <Text align="center" type="success">
              O log do jogo foi armazenado em nossos servidores, você pode
              consultar clicando em Ranking Global
            </Text>
          )}
          <Text>
            Dê seu feedback clicando{' '}
            <a
              href="https://forms.gle/JzX6VLx3et8jwcgT7"
              target="_blank"
              rel="noreferrer"
            >
              aqui
            </a>
          </Text>
          <ButtonGroup gap={8}>
            <Button
              marginTop={1}
              variant="blue"
              size="sm"
              onClick={() => restartGame('hard')}
            >
              <FiRefreshCw /> Reiniciar jogo
            </Button>
          </ButtonGroup>
        </Flex>
      </Container>
    </Modal>
  );
};

export default ModalRanking;
