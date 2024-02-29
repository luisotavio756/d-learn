import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const { isLogged, mode, setMode } = usePlayerAuth();

  const modalTitle = useMemo(() => {
    const titlesByMode = {
      [PlayerMode.Authenticated]: t('game.modals.playerAuth.login'),
      [PlayerMode.CreateAccount]: t('game.modals.playerAuth.createAccount'),
      [PlayerMode.NoChoosen]: t('game.modals.playerAuth.enterMode'),
      [PlayerMode.NoAuth]: null,
      [PlayerMode.Ok]: null,
    };

    if (isLoading) {
      return t('game.modals.playerAuth.startGame');
    }

    return titlesByMode[mode];
  }, [isLoading, mode]);

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
      title={modalTitle}
      showCloseButton={false}
      toggleModal={() => null}
    >
      <Flex shouldShow={isLoading} flexDirection="column" alignItems="center">
        <div className="loaderContent" />
        <Text align="center" size="lg">
          {t('game.modals.playerAuth.wait')}
        </Text>
      </Flex>
      <Flex
        shouldShow={!isLoading && mode === PlayerMode.NoChoosen}
        flexDirection="column"
        gap={8}
      >
        <Flex flexDirection="column" gap={8}>
          <Button onClick={() => setMode(PlayerMode.Authenticated)}>
            {t('game.modals.playerAuth.authenticate')}
          </Button>
          <Button
            onClick={() => setMode(PlayerMode.NoAuth)}
            variant="blue-outline"
          >
            {t('game.modals.playerAuth.guest')}
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
