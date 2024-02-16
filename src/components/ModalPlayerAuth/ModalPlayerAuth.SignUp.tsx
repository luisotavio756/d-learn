import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

import { useForm } from 'react-hook-form';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';

import { AxiosError } from 'axios';
import { Button, Input } from '../UI';
import { Flex } from '../Layout';

import { usePlayerAuth } from '../../hooks/usePlayerAuth';
import { useToast } from '../../hooks/useToast';
import { PlayerMode } from '../../types';
import { FormContainer } from './ModalPlayerAuth.styles';
import api from '../../services/api';

type FormData = {
  nickname: string;
  password: string;
  confirm_password: string;
};

const PlayerSignUp: React.FC = () => {
  const { t } = useTranslation();
  const [isLogging, setIsLogging] = useState(false);

  const { register, handleSubmit } = useForm<FormData>();
  const { setMode } = usePlayerAuth();
  const { addToast } = useToast();

  const onSubmit = handleSubmit(
    async ({ nickname, password, confirm_password }) => {
      if (!nickname.length || !password.length || !confirm_password.length) {
        addToast({
          title: t("game.modals.signUp.toastAllData.title"),
          description: t("game.modals.signUp.toastAllData.description"),
          type: 'error',
        });

        return;
      }

      if (password.length < 6) {
        addToast({
          title: t("game.modals.signUp.toastMinimumCharacters.title"),
          description: t("game.modals.signUp.toastMinimumCharacters.description"),
          type: 'error',
        });

        return;
      }

      if (password !== confirm_password) {
        addToast({
          title: t("game.modals.signUp.toastIncorrectPassword.title"),
          description: t("game.modals.signUp.toastIncorrectPassword.description"),
          type: 'error',
        });

        return;
      }

      try {
        setIsLogging(true);

        await api.post('/players', {
          nickname,
          password,
        });

        addToast({
          title: t("game.modals.signUp.toastUserCreated.title"),
          description: t("game.modals.signUp.toastUserCreated.description"),
          type: 'success',
        });

        setMode(PlayerMode.Authenticated);
      } catch (error) {
        let responseMessage = t("game.modals.signUp.toastUserNotCreated.description");

        if (error instanceof AxiosError) {
          responseMessage = error.response?.data?.message;
        }

        addToast({
          title: t("game.modals.signUp.toastUserNotCreated.title"),
          description: responseMessage,
          type: 'error',
        });
      } finally {
        setIsLogging(false);
      }
    },
  );

  return (
    <FormContainer onSubmit={onSubmit}>
      <Flex gap={8} flexDirection="column">
        <Input
          label={t("game.modals.signUp.inputs.nickname.label")}
          name="nickname"
          type="text"
          placeholder={t("game.modals.signUp.inputs.nickname.placeholder")}
          register={register}
        />

        <Input
          label={t("game.modals.signUp.inputs.password.label")}
          name="password"
          type="password"
          placeholder={t("game.modals.signUp.inputs.password.placeholder")}
          register={register}
        />

        <Input
          label={t("game.modals.signUp.inputs.confirmPassword.label")}
          name="confirm_password"
          type="password"
          placeholder={t("game.modals.signUp.inputs.confirmPassword.placeholder")}
          register={register}
        />

        <Button
          marginTop={1}
          type="submit"
          width="full"
          loading={isLogging}
          disabled={isLogging}
          loadingText={t("game.modals.signUp.wait")}
        >
          <FiCheck /> {t("game.modals.signUp.createAccount")}
        </Button>
        <Button
          size="md"
          variant="text"
          type="submit"
          onClick={() => setMode(PlayerMode.Authenticated)}
        >
          <FiArrowLeft /> {t("game.modals.signUp.backToLogin")}
        </Button>
      </Flex>
    </FormContainer>
  );
};

export default PlayerSignUp;
