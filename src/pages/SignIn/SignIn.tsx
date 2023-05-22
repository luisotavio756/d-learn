import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { Button, Headline } from '../../components/UI';
import InputForm from '../../components/InputForm/InputForm';

import { Container } from './SignIn.styles';
import { Flex } from '../../components/Layout';

const SignIn: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(data => {
    console.log(data);
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

            <InputForm
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
              register={register}
            />

            <InputForm
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
