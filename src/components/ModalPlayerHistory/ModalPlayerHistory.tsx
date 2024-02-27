import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaHistory } from 'react-icons/fa';
import { format, parseISO } from 'date-fns';

import { Flex } from '../Layout';
import Modal from '../Modal';

import { Container } from './ModalPlayerHistory.styles';
import { useHistoryQuery } from '../../queries/useHistoryQuery';

interface ModalPlayerHistoryProps {
  isOpen: boolean;
  toggleModal(): void;
}

const ModalPlayerHistory: React.FC<ModalPlayerHistoryProps> = ({
  isOpen,
  toggleModal,
}) => {
  const { t } = useTranslation();

  const { data: history, isFetching } = useHistoryQuery();

  function formatDate(date: string) {
    return format(parseISO(date), "dd/MM/YYY 'às' HH:mm");
  }

  //   if (isFetching) {
  //     return (
  //       <Flex shouldShow={isFetching}>
  //         <div className="loaderContent" />
  //       </Flex>
  //     );
  //   }

  return (
    <Modal
      width="454px"
      isOpen={isOpen}
      showCloseButton={isOpen}
      toggleModal={toggleModal}
    >
      <Container>
        <div className="title">
          <FaHistory size={28} />
          <h2>{t('game.modals.history.title')}</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th style={{ width: 90 }}>{t('game.modals.history.placing')}</th>
              <th>{t('game.modals.history.date')}</th>
              <th style={{ width: 80 }}>{t('game.modals.history.score')}</th>
            </tr>
          </thead>
          <tbody>
            {/* {history?.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>{formatDate(item.endAt)}</td>
                <td>{item.winnerScore}</td>
              </tr>
            ))} */}
            <tr>
              <td>{['🥇', '🥈', '🥉', ''][0]}</td>
              <td>27/02/2024 ás 12:31</td>
              <td>40</td>
            </tr>
            <tr>
              <td>{['🥇', '🥈', '🥉', ''][1]}</td>
              <td>27/02/2024 ás 12:31</td>
              <td>30</td>
            </tr>
            <tr>
              <td>{['🥇', '🥈', '🥉', ''][2]}</td>
              <td>27/02/2024 ás 12:31</td>
              <td>20</td>
            </tr>
            <tr>
              <td>4</td>
              <td>27/02/2024 ás 12:31</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </Modal>
  );
};

export default ModalPlayerHistory;
