import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button, Headline, Input } from '../../../components/UI';

import { Container } from './SignIn.styles';
import { Flex } from '../../../components/Layout';

import { useAuthAdmin } from '../../../hooks/useAdminAuth';

interface ISignInCredentials {
  login: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useAuthAdmin();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data: any) => {
    if (!data.login || !data.password) {
      return;
    }

    try {
      await signIn(data as ISignInCredentials);

      navigate('/admin/dashboard');
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <Container>
      <Flex
        flexDirection="column"
        alignItems="center"
        gap={24}
        className="container-with-shadown"
      >
        <img src="/shortcut-icon.svg" alt="Logo" />
        <form onSubmit={onSubmit} autoComplete="off" autoCorrect="off">
          <Flex flexDirection="column" gap={16}>
            <Headline type="neutral">Faça seu login</Headline>

            <Input
              label="Login"
              name="login"
              type="text"
              placeholder="Login"
              register={register}
            />

            <Input
              label="Senha"
              name="password"
              type="password"
              placeholder="Senha"
              register={register}
            />

            <Button type="submit" width="full">
              <FiLogIn /> Entrar
            </Button>
          </Flex>
        </form>
      </Flex>
    </Container>
  );
};

export default SignIn;
