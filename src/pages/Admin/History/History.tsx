import React from 'react';

import { Container } from './History.styles';
import { Headline } from '../../../components/UI';
import HistoryTable from '../../../components/HistoryTable/HistoryTable';

const History: React.FC = () => {
  return (
    <Container flexDirection="column" gap={24}>
      <Headline family="mono" weight="light">
        Histórico
      </Headline>
      <HistoryTable />
    </Container>
  );
};

export default History;
