import React, { useState } from 'react';

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
  const [isLogging, setIsLogging] = useState(false);

  const { register, handleSubmit } = useForm<FormData>();
  const { setMode } = usePlayerAuth();
  const { addToast } = useToast();

  const onSubmit = handleSubmit(
    async ({ nickname, password, confirm_password }) => {
      if (!nickname.length || !password.length || !confirm_password.length) {
        addToast({
          title: 'Erro',
          description: 'Preencha todos os dados para continuar',
          type: 'error',
        });

        return;
      }

      if (password.length < 6) {
        addToast({
          title: 'Erro',
          description: 'A senha deve conter no mínimo 6 caracteres',
          type: 'error',
        });

        return;
      }

      if (password !== confirm_password) {
        addToast({
          title: 'Erro',
          description: 'A senha e confirmação de senha devem ser iguais!',
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
          title: `Usuário criado com sucesso`,
          description: 'Agora você pode fazer o login para jogar autenticado!',
          type: 'success',
        });

        setMode(PlayerMode.Authenticated);
      } catch (error) {
        let responseMessage =
          'Não foi possível realizar o cadastro, verifique as credencias e tente novamente';

        if (error instanceof AxiosError) {
          responseMessage = error.response?.data?.message;
        }

        addToast({
          title: 'Erro',
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
          label="Nickname"
          name="nickname"
          type="text"
          placeholder="Nickname"
          register={register}
        />

        <Input
          label="Senha"
          name="password"
          type="password"
          placeholder="Senha"
          register={register}
        />

        <Input
          label="Confirme a Senha"
          name="confirm_password"
          type="password"
          placeholder="Confirme a Senha"
          register={register}
        />

        <Button
          marginTop={1}
          type="submit"
          width="full"
          loading={isLogging}
          disabled={isLogging}
          loadingText="Aguarde..."
        >
          <FiCheck /> Criar conta
        </Button>
        <Button
          size="md"
          variant="text"
          type="submit"
          onClick={() => setMode(PlayerMode.Authenticated)}
        >
          <FiArrowLeft /> Voltar para login
        </Button>
      </Flex>
    </FormContainer>
  );
};

export default PlayerSignUp;
