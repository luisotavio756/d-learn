import React, { useState } from 'react';

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
  const [isLogging, setIsLogging] = useState(false);

  const { register, handleSubmit } = useForm<FormData>();
  const { signIn, setMode } = usePlayerAuth();
  const { addToast } = useToast();

  const onSubmit = handleSubmit(async data => {
    setIsLogging(true);

    try {
      const player = await signIn(data);

      addToast({
        title: `Bem vindo ${player.nickname}`,
        description: 'Login realizado com sucesso!',
        type: 'success',
      });

      setMode(PlayerMode.Ok);
    } catch (error) {
      console.log(error);

      addToast({
        title: 'Erro',
        description:
          'Não foi possível realizar o login, verifique as credencias e tente novamente',
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

        <Button
          marginTop={1}
          type="submit"
          width="full"
          loading={isLogging}
          disabled={isLogging}
          loadingText="Aguarde..."
        >
          <FiLogIn /> Entrar
        </Button>

        <ButtonGroup>
          <Button
            size="md"
            variant="text"
            type="submit"
            onClick={() => setMode(PlayerMode.CreateAccount)}
          >
            <FiLogIn /> Não tem uma conta? Cadastre-se!
          </Button>
          <Button
            size="md"
            variant="text"
            type="submit"
            onClick={() => setMode(PlayerMode.Ok)}
          >
            <FiUserMinus /> Jogar como Guest
          </Button>
        </ButtonGroup>
      </Flex>
    </FormContainer>
  );
};

export default PlayerLogin;
