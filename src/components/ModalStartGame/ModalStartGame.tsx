import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../Modal/Modal';

import { Container } from './ModalStartGame.styles';

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
  const [players, setPlayers] = useState(1);

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(data => {
    console.log(data);
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
            <div key={i + 1} className="input-form">
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
              <button type="button" onClick={removePlayer}>
                Remover ultimo
              </button>
            )}
            {players < 4 && (
              <button type="button" onClick={addPlayer}>
                Adicionar jogador
              </button>
            )}
          </div>
          <input type="submit" />
        </form>
      </Container>
    </Modal>
  );
};

export default ModalStartGame;
