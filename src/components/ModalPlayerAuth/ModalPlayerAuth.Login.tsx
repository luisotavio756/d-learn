import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { FiLogIn } from 'react-icons/fi';

import { PlayerMode } from '../../types';
import { Button, Input, Headline } from '../UI';
import { usePlayerAuth } from '../../hooks/usePlayerAuth';
import { useToast } from '../../hooks/useToast';
import { Flex } from '../Layout';

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
    <>
      <Headline type="neutral">Faça seu login</Headline>
      <form onSubmit={onSubmit}>
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
            type="submit"
            width="full"
            loading={isLogging}
            disabled={isLogging}
            loadingText="Aguarde..."
          >
            <FiLogIn /> Entrar
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default PlayerLogin;
