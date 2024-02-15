import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { FiLogIn } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button, Headline, Input } from '../../../components/UI';

import { Container } from './SignIn.styles';
import { Flex } from '../../../components/Layout';

import { useAuthAdmin } from '../../../hooks/useAdminAuth';
import { useToast } from '../../../hooks/useToast';

interface ISignInCredentials {
  login: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useAuthAdmin();
  const { register, handleSubmit } = useForm();
  const { addToast } = useToast();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data: any) => {
    if (!data.login || !data.password) {
      addToast({
        title: t("admin.signIn.toastError.title"),
        description: t("admin.signIn.toastError.description"),
        type: 'error',
      });

      return;
    }

    setIsLoading(true);

    try {
      await signIn(data as ISignInCredentials);

      navigate('/admin/cards');
    } catch (error) {
      addToast({
        title: t("admin.signIn.toastError.title"),
        description: t("admin.signIn.toastError.fullDescription"),
        type: 'error',
      });

      console.log(error);
    } finally {
      setIsLoading(false);
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
            <Headline type="neutral">{t("admin.signIn.form.title")}</Headline>

            <Input
              label={t("admin.signIn.form.login")}
              name="login"
              type="text"
              placeholder={t("admin.signIn.form.login")}
              register={register}
            />

            <Input
              label={t("admin.signIn.form.password")}
              name="password"
              type="password"
              placeholder={t("admin.signIn.form.password")}
              register={register}
            />

            <Button
              type="submit"
              width="full"
              loading={isLoading}
              disabled={isLoading}
              loadingText={t("admin.signIn.form.wait")}
            >
              <FiLogIn /> {t("admin.signIn.form.enter")}
            </Button>
          </Flex>
        </form>
      </Flex>
    </Container>
  );
};

export default SignIn;
