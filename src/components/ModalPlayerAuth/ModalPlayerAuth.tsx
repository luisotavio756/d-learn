import React, { useMemo } from 'react';

import Modal from '../Modal';

import { PlayerMode } from '../../types';
import { Button, Text } from '../UI';
import { Flex } from '../Layout';
import { usePlayerAuth } from '../../hooks/usePlayerAuth';
import PlayerLogin from './ModalPlayerAuth.Login';
import PlayerSignUp from './ModalPlayerAuth.SignUp';

interface IModalPlayerAuthProps {
  isLoading: boolean;
}

const ModalPlayerAuth: React.FC<IModalPlayerAuthProps> = ({ isLoading }) => {
  const { isLogged, mode, setMode } = usePlayerAuth();

  const titleByMode = useMemo(
    () => ({
      [PlayerMode.Authenticated]: 'Faça seu login',
      [PlayerMode.CreateAccount]: 'Criar conta',
      [PlayerMode.NoChoosen]: 'Como deseja entrar?',
      [PlayerMode.NoAuth]: null,
      [PlayerMode.Ok]: null,
    }),
    [],
  );

  return (
    <Modal
      width="454px"
      isOpen={
        [
          PlayerMode.NoChoosen,
          PlayerMode.Authenticated,
          PlayerMode.CreateAccount,
        ].includes(mode) && !isLogged
      }
      title={titleByMode[mode] ?? 'Iniciar jogo'}
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
      <Flex
        shouldShow={!isLoading && mode === PlayerMode.CreateAccount}
        flexDirection="column"
        gap={16}
      >
        <PlayerSignUp />
      </Flex>
    </Modal>
  );
};

export default ModalPlayerAuth;
