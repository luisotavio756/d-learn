import React, { useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useForm } from 'react-hook-form';
import { FiCheck, FiUserMinus, FiUserPlus } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import Modal from '../Modal';
import Button from '../Button';

import { Container } from './ModalStartGame.styles';
import { Player } from '../../types';

interface IModalStartGameProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

type FormData = {
  [key: string]: string;
};

const ModalStartGame: React.FC<IModalStartGameProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const theme = useTheme();
  const [players, setPlayers] = useState(1);

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(data => {
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
    }));

    console.log(players);
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

  return (
    <Modal
      width="454px"
      isOpen={isOpen}
      title="Iniciar jogo"
      setIsOpen={setIsOpen}
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
            <div key={uuid()} className="input-form">
              <label htmlFor={`player${i}`}>Jogador {i + 1}</label>
              <input
                id={`player${i}`}
                type="text"
                placeholder="Digite um nome"
                {...register(`player${i}`)}
              />
            </div>
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
