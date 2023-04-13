import React, { useCallback, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useForm } from 'react-hook-form';
import { FiCheck, FiUserMinus, FiUserPlus } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import Modal from '../Modal';

import { Container } from './ModalStartGame.styles';
import { Player } from '../../types';
import InputForm from '../InputForm';
import { useGame } from '../../hooks/useGame.hook';
import { Button } from '../UI';

interface IModalStartGameProps {
  isOpen: boolean;
  toggleModal: () => void;
}

type FormData = {
  [key: string]: string;
};

const ModalStartGame: React.FC = () => {
  const theme = useTheme();
  const [players, setPlayers] = useState(1);

  const { register, handleSubmit } = useForm<FormData>();
  const { gameStarted, board, startGame } = useGame();

  const onSubmit = handleSubmit(data => {
    const startSquare = board[0];

    const colors = {
      0: theme.colors.cyan[500],
      1: theme.colors.green[500],
      2: theme.colors.gray[700],
      3: theme.colors.blue[300],
    };

    const players = Object.values(data).map<Player>((name, index) => ({
      id: index + 1,
      name,
      score: 0,
      color: colors[index as 0 | 1 | 2 | 3],
      square_id: startSquare.id,
      active: false,
    }));

    startGame(players);
  });

  const addPlayer = useCallback(() => {
    if (players >= 4) {
      return;
    }

    setPlayers(oldState => oldState + 1);
  }, [players]);

  const removePlayer = useCallback(() => {
    setPlayers(oldState => oldState - 1);
  }, []);

  useEffect(() => {
    window.addEventListener('keypress', event => {
      if (event.key === 'Enter') {
        event.preventDefault();
      }
    });

    return () => {
      window.removeEventListener('keypress', event => {
        if (event.key === 'Enter') {
          event.preventDefault();
        }
      });
    };
  }, []);

  return (
    <Modal
      width="454px"
      isOpen={!gameStarted}
      title="Iniciar jogo"
      showCloseButton={false}
      toggleModal={() => null}
    >
      <Container>
        <div className="welcome">
          <p>
            Bem vindo ao D-LEARN Board Game. Adicione os jogadores para iniciar
            o jogo agora mesmo!
          </p>
        </div>
        <form onSubmit={onSubmit}>
          {Array.from({ length: players }).map((_, i) => (
            <InputForm
              key={uuid()}
              type="text"
              id={`player${i}`}
              label={`Player ${i + 1}`}
              placeholder="Digite um nome"
              name={`player${i}`}
              register={register}
            />
          ))}
          <div className="button-group">
            {players > 1 && (
              <Button size="sm" variant="red-outline" onClick={removePlayer}>
                <FiUserMinus /> Remover ultimo
              </Button>
            )}
            {players < 4 && (
              <Button size="sm" variant="blue-outline" onClick={addPlayer}>
                <FiUserPlus /> Adicionar jogador
              </Button>
            )}
          </div>
          <Button marginTop={1} width="full" type="submit">
            <FiCheck /> Iniciar jogo
          </Button>
        </form>
      </Container>
    </Modal>
  );
};

export default ModalStartGame;
