import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { Flex, Grid } from '../../../components/Layout';
import { Headline, Text } from '../../../components/UI';
import { Container, Contributor } from './Contributors.styles';

import BiaImg from '../../../assets/contributors/bia.jpeg';
import LuisImg from '../../../assets/contributors/luis.jpeg';
import TamiresImg from '../../../assets/contributors/tamires.jpeg';
import MateusImg from '../../../assets/contributors/mateus.jpg';

const Contributors: React.FC = () => {
  const { t } = useTranslation();

  function handleOnclickOnBadges(url: string) {
    window.open(url, '_blank');
  }

  return (
    <Container id="contributors" flexDirection="column" gap={32}>
      <Flex alignItems="center" justifyContent="center" className="title">
        <Headline weight="heavy" type="light" size="lg">
          {t('landing.contributors.title')}
        </Headline>
      </Flex>
      <Grid
        alignItems="center"
        templateColumns="1fr 1fr 1fr 1fr"
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
            {t('landing.contributors.person1.name')}
          </Headline>
          <Text align="center" type="light" size="lg">
            {t('landing.contributors.person1.description')}
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
            {t('landing.contributors.person2.name')}
          </Headline>
          <Text align="center" type="light" size="lg">
            {t('landing.contributors.person2.description')}
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
            {t('landing.contributors.person3.name')}
          </Headline>
          <Text align="center" type="light" size="lg">
            {t('landing.contributors.person3.description')}
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
        <Contributor alignItems="center" flexDirection="column" gap={4}>
          <img src={MateusImg} alt="Foto Beatriz" />
          <Headline weight="heavy" type="light" size="md">
            {t('landing.contributors.person4.name')}
          </Headline>
          <Text align="center" type="light" size="lg">
            {t('landing.contributors.person4.description')}
          </Text>
          <Flex gap={8}>
            <FaGithub
              onClick={() =>
                handleOnclickOnBadges('https://github.com/mateusxfl')
              }
            />
            <FaLinkedin
              onClick={() =>
                handleOnclickOnBadges('https://www.linkedin.com/in/mateusxfl/')
              }
            />
            <FiMail
              onClick={() =>
                handleOnclickOnBadges('mailto:mateus.xfl@gmail.com')
              }
            />
          </Flex>
        </Contributor>
      </Grid>
    </Container>
  );
};

export default Contributors;
