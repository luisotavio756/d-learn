import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from './Ranking.styles';
import { Headline, Text } from '../../../components/UI';
import HistoryTable from '../../../components/HistoryTable/HistoryTable';
import { Flex } from '../../../components/Layout';

const Ranking: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container id="ranking" flexDirection="column" gap={24}>
      <Flex flexDirection="column">
        <Headline size="lg">{t('landing.ranking.title')}</Headline>
        <Text size="lg">{t('landing.ranking.subtitle')}</Text>
      </Flex>
      <HistoryTable />
    </Container>
  );
};

export default Ranking;
