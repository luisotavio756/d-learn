import React from 'react';

import { Container } from './Ranking.styles';
import { Headline, Text } from '../../../components/UI';
import HistoryTable from '../../../components/HistoryTable/HistoryTable';
import { Flex } from '../../../components/Layout';

const Ranking: React.FC = () => {
  return (
    <Container id="ranking" flexDirection="column" gap={24}>
      <Flex flexDirection="column">
        <Headline size="lg">🔥 Ranking global</Headline>
        <Text size="lg">
          Ao fim de cada jogo, armazenamos o Log do jogo em nossos servidores,
          para incentivar os jogares a buscarem o topo do ranking
        </Text>
      </Flex>
      <HistoryTable />
    </Container>
  );
};

export default Ranking;
