import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaHistory } from 'react-icons/fa';
import { format, parseISO } from 'date-fns';

import Modal from '../Modal';

import { Container } from './ModalPlayerHistory.styles';
import { useHistoryQuery } from '../../queries/useHistoryQuery';
import { usePlayerAuth } from '../../hooks/usePlayerAuth';

interface ModalPlayerHistoryProps {
  isOpen: boolean;
  toggleModal(): void;
}

const ModalPlayerHistory: React.FC<ModalPlayerHistoryProps> = ({
  isOpen,
  toggleModal,
}) => {
  const { t } = useTranslation();

  const { data: history } = useHistoryQuery();
  const { isLogged, player } = usePlayerAuth();

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
            {isLogged &&
              history
                ?.filter(log => log.ownerId === player._id)
                .sort(
                  (a, b) =>
                    new Date(b.endAt).getTime() - new Date(a.endAt).getTime(),
                )
                .slice(0, 10)
                .map((item, i) => (
                  <tr key={item._id}>
                    <td>{item.ownerPlacing}º</td>
                    <td>{formatDate(item.endAt)}</td>
                    <td>{item.ownerScore}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </Container>
    </Modal>
  );
};

export default ModalPlayerHistory;
