import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiBox, FiPieChart, FiTablet, FiUsers } from 'react-icons/fi';
import { Flex } from '../../../components/Layout';
import { Headline, Text } from '../../../components/UI';

import { Container } from './Info.styles';
import { useCardsQuery } from '../../../queries/useCards';
import { useHistoryQuery } from '../../../queries/useHistoryQuery';

const Info: React.FC = () => {
  const { t } = useTranslation();

  const { data = [] } = useCardsQuery();
  const { data: history = [] } = useHistoryQuery();

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
          {data.length} {t('landing.info.cards.title')}
        </Headline>
        <Text align="center" type="light" size="lg">
          {t('landing.info.cards.subtitle')}
        </Text>
      </Flex>
      <Flex alignItems="center" flexDirection="column" gap={8}>
        <FiPieChart />
        <Headline weight="heavy" type="light" size="md">
          {t('landing.info.approval.title')}
        </Headline>
        <Text align="center" type="light" size="lg">
          {t('landing.info.approval.subtitle')}
        </Text>
      </Flex>
      <Flex alignItems="center" flexDirection="column" gap={8}>
        <FiBox />
        <Headline weight="heavy" type="light" size="md">
          {history.length} {t('landing.info.matches.title')}
        </Headline>
        <Text align="center" type="light" size="lg">
          {t('landing.info.matches.subtitle')}
        </Text>
      </Flex>
      <Flex alignItems="center" flexDirection="column" gap={8}>
        <FiUsers />
        <Headline weight="heavy" type="light" size="md">
          {t('landing.info.players.title', {
            history_length: history.length * 3,
          })}
        </Headline>
        <Text align="center" type="light" size="lg">
          {t('landing.info.players.subtitle')}
        </Text>
      </Flex>
    </Container>
  );
};

export default Info;
