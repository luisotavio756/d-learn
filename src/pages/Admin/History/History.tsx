import React from 'react';
import { useTranslation } from "react-i18next";

import { Container } from './History.styles';
import { Headline } from '../../../components/UI';
import HistoryTable from '../../../components/HistoryTable/HistoryTable';

const History: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container flexDirection="column" gap={24}>
      <Headline family="mono" weight="light">
        {t("admin.history.title")}
      </Headline>
      <HistoryTable />
    </Container>
  );
};

export default History;
