import React, { useCallback, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useForm } from 'react-hook-form';
import { FiCheck, FiInfo, FiUserMinus, FiUserPlus } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import Modal from '../Modal';

import { Container } from './ModalStartGame.styles';
import { Player } from '../../types';
import InputForm from '../InputForm';
import { useGame } from '../../hooks/useGame.hook';
import { Button, Text } from '../UI';
import { Flex } from '../Layout';

type FormData = {
  [key: string]: string;
};

const ModalStartGame: React.FC = () => {
  const theme = useTheme();
  const [playersQuantity, setPlayersQuantity] = useState(1);

  const { register, unregister, handleSubmit } = useForm<FormData>();
  const { gameStarted, board, startGame } = useGame();

  const onSubmit = handleSubmit(data => {
    if (Object.values(data).every(item => !item)) {
      return;
    }

    const startSquare = board[0];

    const colors = {
      0: theme.colors.red[500],
      1: theme.colors.green[500],
      2: theme.colors.gray[700],
      3: theme.colors.blue[300],
    };

    const updatedPlayers = Object.values(data).map<Player>((name, index) => ({
      id: index + 1,
      name,
      score: 0,
      color: colors[index as 0 | 1 | 2 | 3],
      square_id: startSquare.id,
      active: false,
    }));

    startGame(updatedPlayers);
  });

  const addPlayer = useCallback(() => {
    if (playersQuantity >= 4) {
      return;
    }

    setPlayersQuantity(oldState => oldState + 1);
  }, [playersQuantity]);

  const removePlayer = useCallback(() => {
    unregister(`player${playersQuantity - 1}`);
    setPlayersQuantity(oldState => oldState - 1);
  }, [unregister, playersQuantity]);

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
        <Flex flexDirection="column" className="welcome">
          <Text size="lg">
            Bem vindo ao D-LEARN Board Game. Adicione os jogadores para iniciar
            o jogo agora mesmo!
          </Text>
          <Text size="md" type="warning" weight="medium">
            <FiInfo /> Máximo de 4 jogadores
          </Text>
        </Flex>
        <form onSubmit={onSubmit}>
          {Array.from({ length: playersQuantity }).map((_, i) => (
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
            {playersQuantity > 1 && (
              <Button size="sm" variant="red-outline" onClick={removePlayer}>
                <FiUserMinus /> Remover ultimo
              </Button>
            )}
            {playersQuantity < 4 && (
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
