import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useForm } from 'react-hook-form';
import { FiLogIn, FiUserMinus } from 'react-icons/fi';

import { Button, Input, ButtonGroup } from '../UI';
import { Flex } from '../Layout';

import { usePlayerAuth } from '../../hooks/usePlayerAuth';
import { useToast } from '../../hooks/useToast';
import { PlayerMode } from '../../types';
import { FormContainer } from './ModalPlayerAuth.styles';

type FormData = {
  nickname: string;
  password: string;
};

const PlayerLogin: React.FC = () => {
  const { t } = useTranslation();
  const [isLogging, setIsLogging] = useState(false);

  const { register, handleSubmit } = useForm<FormData>();
  const { signIn, setMode } = usePlayerAuth();
  const { addToast } = useToast();

  const onSubmit = handleSubmit(async data => {
    setIsLogging(true);

    try {
      const player = await signIn(data);

      addToast({
        title: t('game.modals.playerAuthLogin.toastWelcome.title', {
          playerNickname: player.nickname,
        }),
        description: t('game.modals.playerAuthLogin.toastWelcome.description'),
        type: 'success',
      });

      setMode(PlayerMode.Ok);
    } catch (error) {
      console.log(error);

      addToast({
        title: t('game.modals.playerAuthLogin.toastError.title'),
        description: t('game.modals.playerAuthLogin.toastError.description'),
        type: 'error',
      });
    } finally {
      setIsLogging(false);
    }
  });

  return (
    <FormContainer onSubmit={onSubmit}>
      <Flex gap={8} flexDirection="column">
        <Input
          label={t('game.modals.playerAuthLogin.inputs.nickname.label')}
          name="nickname"
          type="text"
          placeholder={t(
            'game.modals.playerAuthLogin.inputs.nickname.placeholder',
          )}
          register={register}
        />

        <Input
          label={t('game.modals.playerAuthLogin.inputs.password.label')}
          name="password"
          type="password"
          placeholder={t(
            'game.modals.playerAuthLogin.inputs.password.placeholder',
          )}
          register={register}
        />

        <Button
          marginTop={1}
          type="submit"
          width="full"
          loading={isLogging}
          disabled={isLogging}
          loadingText={t('game.modals.playerAuthLogin.wait')}
        >
          <FiLogIn /> {t('game.modals.playerAuthLogin.enter')}
        </Button>

        <ButtonGroup>
          <Button
            size="md"
            variant="text"
            type="submit"
            onClick={() => setMode(PlayerMode.CreateAccount)}
          >
            <FiLogIn /> {t('game.modals.playerAuthLogin.register')}
          </Button>
          <Button
            size="md"
            variant="text"
            type="submit"
            onClick={() => setMode(PlayerMode.Ok)}
          >
            <FiUserMinus /> {t('game.modals.playerAuthLogin.guest')}
          </Button>
        </ButtonGroup>
      </Flex>
    </FormContainer>
  );
};

export default PlayerLogin;
