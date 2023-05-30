import React from 'react';

import Modal from '../Modal';

import { PlayerMode } from '../../types';
import { Button, Text } from '../UI';
import { Flex } from '../Layout';
import { usePlayerAuth } from '../../hooks/usePlayerAuth';
import PlayerLogin from './ModalPlayerAuth.Login';

interface IModalPlayerAuthProps {
  isLoading: boolean;
}

const ModalPlayerAuth: React.FC<IModalPlayerAuthProps> = ({ isLoading }) => {
  const { isLogged, mode, setMode } = usePlayerAuth();

  return (
    <Modal
      width="454px"
      isOpen={
        [PlayerMode.NoChoosen, PlayerMode.Authenticated].includes(mode) &&
        !isLogged
      }
      title="Iniciar jogo"
      showCloseButton={false}
      toggleModal={() => null}
    >
      <Flex shouldShow={isLoading} flexDirection="column" alignItems="center">
        <div className="loaderContent" />
        <Text align="center" size="lg">
          Aguarde um momento enquanto carregamos os recursos do jogo...
        </Text>
      </Flex>
      <Flex
        shouldShow={!isLoading && mode === PlayerMode.NoChoosen}
        flexDirection="column"
        gap={8}
      >
        <Text align="center" size="lg">
          Como desejar jogar?
        </Text>
        <Flex flexDirection="column" gap={8}>
          <Button onClick={() => setMode(PlayerMode.Authenticated)}>
            Quero me autenticar
          </Button>
          <Button
            onClick={() => setMode(PlayerMode.NoAuth)}
            variant="blue-outline"
          >
            Jogar como Guest
          </Button>
        </Flex>
      </Flex>
      <Flex
        shouldShow={!isLoading && mode === PlayerMode.Authenticated}
        flexDirection="column"
        gap={16}
      >
        <PlayerLogin />
      </Flex>
    </Modal>
  );
};

export default ModalPlayerAuth;
