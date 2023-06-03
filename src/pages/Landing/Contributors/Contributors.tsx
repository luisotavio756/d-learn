import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { Flex, Grid } from '../../../components/Layout';
import { Headline, Text } from '../../../components/UI';
import { Container, Contributor } from './Contributors.styles';

import BiaImg from '../../../assets/contributors/bia.jpeg';
import LuisImg from '../../../assets/contributors/luis.jpeg';
import TamiresImg from '../../../assets/contributors/tamires.jpeg';

const Contributors: React.FC = () => {
  function handleOnclickOnBadges(url: string) {
    window.open(url, '_blank');
  }

  return (
    <Container id="contributors" flexDirection="column" gap={32}>
      <Flex alignItems="center" justifyContent="center" className="title">
        <Headline weight="heavy" type="light" size="lg">
          🔍 Contribuidores
        </Headline>
      </Flex>
      <Grid
        alignItems="center"
        templateColumns="1fr 1fr 1fr"
        gap={24}
        breakpoints={{
          xl: {
            templateColumns: '1fr',
          },
        }}
      >
        <Contributor alignItems="center" flexDirection="column" gap={4}>
          <img src={BiaImg} alt="Foto Beatriz" />
          <Headline weight="heavy" type="light" size="md">
            Profa. Dra. Ana Beatriz Marques
          </Headline>
          <Text align="center" type="light" size="lg">
            Professora Dra. na UFC Campus Russas, Orientadora do LEARN e do
            D-LEARN Board Game
          </Text>
          <Flex gap={8}>
            <FaLinkedin
              onClick={() =>
                handleOnclickOnBadges(
                  'https://www.linkedin.com/in/anna-beatriz-marques/',
                )
              }
            />
            <FiMail
              onClick={() =>
                handleOnclickOnBadges('mailto:annaamarques@gmail.com')
              }
            />
          </Flex>
        </Contributor>
        <Contributor alignItems="center" flexDirection="column" gap={4}>
          <img src={LuisImg} alt="Foto Beatriz" />
          <Headline weight="heavy" type="light" size="md">
            Luis Otávio Lima Caminha
          </Headline>
          <Text align="center" type="light" size="lg">
            Estudante de Engenharia de Software da UFC Campus Russas e
            Desenvolvedor do D-LEARN Board Game
          </Text>
          <Flex gap={8}>
            <FaGithub
              onClick={() =>
                handleOnclickOnBadges('https://github.com/luisotavio756')
              }
            />
            <FaLinkedin
              onClick={() =>
                handleOnclickOnBadges(
                  'https://www.linkedin.com/in/luisotavio756/',
                )
              }
            />
            <FiMail
              onClick={() =>
                handleOnclickOnBadges('mailto:luis.otavio2425@gmail.com')
              }
            />
          </Flex>
        </Contributor>
        <Contributor alignItems="center" flexDirection="column" gap={4}>
          <img src={TamiresImg} alt="Foto Beatriz" />
          <Headline weight="heavy" type="light" size="md">
            Tamires Ariane
          </Headline>
          <Text align="center" type="light" size="lg">
            Graduada em Engenharia de Software na UFC Campus Russas e criadora
            do LEARN Board Game
          </Text>
          <Flex gap={8}>
            <FaGithub
              onClick={() =>
                handleOnclickOnBadges('https://github.com/tamiresariane')
              }
            />
            <FaLinkedin
              onClick={() =>
                handleOnclickOnBadges(
                  'https://www.linkedin.com/in/tamires-ariane-009376190/',
                )
              }
            />
            <FiMail
              onClick={() =>
                handleOnclickOnBadges('mailto:eng.soft.tamires@gmail.com')
              }
            />
          </Flex>
        </Contributor>
      </Grid>
    </Container>
  );
};

export default Contributors;
