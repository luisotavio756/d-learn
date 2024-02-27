import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaHistory } from 'react-icons/fa';
import { format, parseISO } from 'date-fns';

import Modal from '../Modal';

import { Container } from './ModalPlayerHistory.styles';
import { useHistoryByUserIdQuery } from '../../queries/useHistoryQuery';

interface ModalPlayerHistoryProps {
  isOpen: boolean;
  toggleModal(): void;
}

const ModalPlayerHistory: React.FC<ModalPlayerHistoryProps> = ({
  isOpen,
  toggleModal,
}) => {
  const { t } = useTranslation();

  const { data: history } = useHistoryByUserIdQuery("65b7c2ea889859d3d5218433"); // MOCKADO

  function formatDate(date: string) {
    return format(parseISO(date), "dd/MM/YYY 'às' HH:mm");
  }

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
            {history?.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>{formatDate(item.endAt)}</td>
                <td>{item.winnerScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Modal>
  );
};

export default ModalPlayerHistory;
