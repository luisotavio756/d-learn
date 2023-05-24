import React from 'react';

import { differenceInMinutes, format, parseISO } from 'date-fns';
import { Flex } from '../Layout';
import { Container } from './HistoryTable.styles';
import { useHistoryQuery } from '../../queries/useHistoryQuery';

const HistoryTable: React.FC = () => {
  const { data: history, isFetching } = useHistoryQuery();

  function formatDate(date: string) {
    return format(parseISO(date), "dd/MM/YYY 'às' HH:mm");
  }

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
            <th>Vencedor</th>
            <th>Score do vencedor</th>
            <th>Inicio</th>
            <th>Fim</th>
            <th>Tempo de jogo</th>
            <th>Host do jogo</th>
          </tr>
        </thead>
        <tbody>
          {history?.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>{item.winnerName}</td>
              <td>{item.winnerScore}</td>
              <td>{formatDate(item.startedAt)}</td>
              <td>{formatDate(item.endAt)}</td>
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
