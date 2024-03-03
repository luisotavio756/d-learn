import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuid } from 'uuid';
import { useForm } from 'react-hook-form';
import {
  FiCheck,
  FiInfo,
  FiLogIn,
  FiUserMinus,
  FiUserPlus,
} from 'react-icons/fi';
import { BsClockHistory } from 'react-icons/bs';
import { useTheme } from 'styled-components';

import Modal from '../Modal';

import { Container } from './ModalStartGame.styles';
import { Button, Text, Input } from '../UI';
import { Flex } from '../Layout';

import { Player, PlayerMode } from '../../types';
import { useGame } from '../../hooks/useGame.hook';
import { usePlayerAuth } from '../../hooks/usePlayerAuth';

type FormData = {
  [key: string]: string;
};

interface IModalStartGameProps {
  isLoading: boolean;
}

const ModalStartGame: React.FC<IModalStartGameProps> = ({ isLoading }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const [playersQuantity, setPlayersQuantity] = useState(1);
  const [isActiveTimer, setIsActiveTimer] = useState(false);

  const { register, unregister, handleSubmit } = useForm<FormData>();
  const { gameStarted, board, startGame } = useGame();
  const { mode, isLogged, setMode } = usePlayerAuth();

  const onSubmit = handleSubmit(({ timer, ...playersData }) => {
    if (Object.values(playersData).every(item => !item)) {
      return;
    }

    const startSquare = board[0];

    const colors = {
      0: theme.colors.red[500],
      1: theme.colors.green[500],
      2: theme.colors.gray[700],
      3: theme.colors.blue[300],
    };

    const updatedPlayers = Object.values(playersData).map<Player>(
      (name, index) => ({
        id: index + 1,
        name,
        score: 0,
        color: colors[index as 0 | 1 | 2 | 3],
        square_id: startSquare.id,
        active: false,
      }),
    );

    startGame(updatedPlayers, parseInt(timer, 10));
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

  const goToAuth = useCallback(() => {
    setMode(PlayerMode.NoChoosen);
  }, [setMode]);

  const handleActiveTimer = useCallback(() => {
    unregister('timer');
    setIsActiveTimer(!isActiveTimer);
  }, [unregister, isActiveTimer]);

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
      width="550px"
      isOpen={
        !gameStarted &&
        ![
          PlayerMode.NoChoosen,
          PlayerMode.Authenticated,
          PlayerMode.CreateAccount,
        ].includes(mode)
      }
      title={t('game.modals.startGame.title')}
      showCloseButton={false}
      toggleModal={() => null}
    >
      <Flex shouldShow={isLoading} flexDirection="column" alignItems="center">
        <div className="loaderContent" />
        <Text align="center" size="lg">
          {t('game.modals.startGame.wait')}
        </Text>
      </Flex>
      <Container shouldShow={!isLoading} flexDirection="column">
        <Flex flexDirection="column" className="welcome">
          <Text size="lg">{t('game.modals.startGame.welcome')}</Text>
          <Text size="md" type="warning" weight="medium">
            <FiInfo /> {t('game.modals.startGame.maxPlayers')}
          </Text>
        </Flex>
        <form onSubmit={onSubmit}>
          <Flex flexDirection="column" gap={8}>
            {Array.from({ length: playersQuantity }).map((_, i) => (
              <Input
                key={uuid()}
                type="text"
                id={`player${i}`}
                label={`${t('game.modals.startGame.inputs.player.label')} ${
                  i + 1
                }`}
                placeholder={t(
                  'game.modals.startGame.inputs.player.placeholder',
                )}
                name={`player${i}`}
                register={register}
                required={true}
              />
            ))}
            {isActiveTimer && (
              <Input
                type="number"
                label={t('game.modals.startGame.inputs.timer.label')}
                placeholder={t(
                  'game.modals.startGame.inputs.timer.placeholder',
                )}
                name="timer"
                register={register}
                min={30}
                max={90}
                required={true}
              />
            )}
          </Flex>
          <div className="button-group">
            <Button
              width="fit-content"
              size="sm"
              variant={`${isActiveTimer ? 'yellow' : 'green'}-outline`}
              onClick={handleActiveTimer}
            >
              <BsClockHistory />{' '}
              {isActiveTimer
                ? t('game.modals.startGame.disableTimer')
                : t('game.modals.startGame.enableTimer')}
            </Button>
            {playersQuantity > 1 && (
              <Button
                width="fit-content"
                size="sm"
                variant="red-outline"
                onClick={removePlayer}
              >
                <FiUserMinus /> {t('game.modals.startGame.removeLast')}
              </Button>
            )}
            {playersQuantity < 4 && (
              <Button
                width="fit-content"
                size="sm"
                variant="blue-outline"
                onClick={addPlayer}
              >
                <FiUserPlus /> {t('game.modals.startGame.addPlayer')}
              </Button>
            )}
          </div>
          <Button marginTop={1} width="full" type="submit">
            <FiCheck /> {t('game.modals.startGame.startGame')}
          </Button>
        </form>
        {!isLogged && (
          <Button marginTop={0.5} size="md" variant="text" onClick={goToAuth}>
            <FiLogIn /> {t('game.modals.startGame.authenticate')}
          </Button>
        )}
      </Container>
    </Modal>
  );
};

export default ModalStartGame;
