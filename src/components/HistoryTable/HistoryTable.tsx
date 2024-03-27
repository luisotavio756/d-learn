import React from 'react';
import { useTranslation } from 'react-i18next';

import { differenceInMinutes, parseISO } from 'date-fns';
import { Flex } from '../Layout';
import { Container } from './HistoryTable.styles';
import { useHistoryQuery } from '../../queries/useHistoryQuery';
import { formatDate } from '../../utils/dates';

const HistoryTable: React.FC = () => {
  const { t, i18n } = useTranslation();

  const { data: history, isFetching } = useHistoryQuery();

  if (isFetching) {
    return (
      <Flex shouldShow={isFetching}>
        <div className="loaderContent" />
      </Flex>
    );
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>{t('landing.historyTable.winner')}</th>
            <th>{t('landing.historyTable.score')}</th>
            <th>{t('landing.historyTable.start')}</th>
            <th>{t('landing.historyTable.end')}</th>
            <th>{t('landing.historyTable.gameTime')}</th>
            <th>{t('landing.historyTable.host')}</th>
          </tr>
        </thead>
        <tbody>
          {history?.slice(0, 30).map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>{item.winnerName}</td>
              <td>{item.winnerScore}</td>
              <td>{formatDate(item.startedAt, i18n.language)}</td>
              <td>{formatDate(item.endAt, i18n.language)}</td>
              <td>
                {differenceInMinutes(
                  parseISO(item.endAt),
                  parseISO(item.startedAt),
                )}
                m
              </td>
              <td>{item.ownerName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default HistoryTable;
