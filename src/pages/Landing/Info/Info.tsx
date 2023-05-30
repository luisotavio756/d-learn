import React from 'react';
import { FiBox, FiPieChart, FiTablet, FiUsers } from 'react-icons/fi';
import { Flex } from '../../../components/Layout';
import { Headline, Text } from '../../../components/UI';

import { Container } from './Info.styles';

const Info: React.FC = () => {
  return (
    <Container
      alignItems="center"
      templateColumns="1fr 1fr 1fr 1fr"
      gap={24}
      breakpoints={{
        lg: {
          templateColumns: '1fr',
        },
      }}
    >
      <Flex alignItems="center" flexDirection="column" gap={8}>
        <FiTablet />
        <Headline weight="heavy" type="light" size="md">
          51 cartas
        </Headline>
        <Text align="center" type="light" size="lg">
          As cartas são de atributos de qualidade, padrões arquiteturais,
          decisões arquiteturais e sorte ou revés
        </Text>
      </Flex>
      <Flex alignItems="center" flexDirection="column" gap={8}>
        <FiPieChart />
        <Headline weight="heavy" type="light" size="md">
          80% de aprovação
        </Headline>
        <Text align="center" type="light" size="lg">
          Essa é a atual porcentagem de aprovação entre os participantes do jogo
        </Text>
      </Flex>
      <Flex alignItems="center" flexDirection="column" gap={8}>
        <FiBox />
        <Headline weight="heavy" type="light" size="md">
          56 partidas jogadas
        </Headline>
        <Text align="center" type="light" size="lg">
          Esse é a quantidade de partidas jogadas no D-LEARN
        </Text>
      </Flex>
      <Flex alignItems="center" flexDirection="column" gap={8}>
        <FiUsers />
        <Headline weight="heavy" type="light" size="md">
          1020 jogadores
        </Headline>
        <Text align="center" type="light" size="lg">
          Passaram pelo D-LEARN e tiverem a experiência de jogar o jogo
        </Text>
      </Flex>
    </Container>
  );
};

export default Info;
