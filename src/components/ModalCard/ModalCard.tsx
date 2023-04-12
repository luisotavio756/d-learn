import React, { useMemo } from 'react';

import { useGame } from '../../hooks/useGame.hook';
import { CardTypes } from '../../types';
import Modal from '../Modal';

import { Container } from './ModalCard.styles';
import LuckCardBody from './LuckCardBody';
import NormalCardBody from './NormalCardBody';

interface IModalCardProps {
  isOpen: boolean;
  type: CardTypes;
  toggleModal: () => void;
}

const ModalCard: React.FC<IModalCardProps> = ({
  isOpen,
  type,
  toggleModal,
}) => {
  const { activeCard } = useGame();

  const cardsTitle = useMemo(
    () => ({
      [CardTypes.ArchDecisions]: 'Decisões arquiteturais',
      [CardTypes.QualityAttributes]: 'Atributos de qualidade',
      [CardTypes.ArchPattern]: 'Padrões arquiteturais',
      [CardTypes.LuckOrBackLuck]: 'Sorte ou revés',
    }),
    [],
  );

  if (!activeCard) return null;

  return (
    <Modal
      width="454px"
      isOpen={isOpen}
      showCloseButton={false}
      toggleModal={toggleModal}
      style={{
        content: {
          width: '408px',
          padding: '0',
          background: 'unset',
        },
      }}
    >
      <Container type={type}>
        <div className="header">
          <h4>{cardsTitle[type]}</h4>
        </div>
        <div className="body">
          {type === CardTypes.LuckOrBackLuck ? (
            <LuckCardBody />
          ) : (
            <NormalCardBody />
          )}
        </div>
      </Container>
    </Modal>
  );
};

export default ModalCard;
