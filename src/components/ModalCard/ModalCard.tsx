import React, { useEffect, useMemo, useState } from 'react';

import { useGame } from '../../hooks/useGame.hook';
import { CardTypes } from '../../types';
import Modal from '../Modal';

import { Container } from './ModalCard.styles';
import LuckCardBody from './LuckCardBody';
import NormalCardBody from './NormalCardBody';

import { Row } from '../Layout';
import CardFront from '../CardFront/CardFront';

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
  const [isFlipped, setIsFlipped] = useState(false);
  const { activeCard } = useGame();

  const text = useMemo(
    () => ({
      [CardTypes.ArchDecisions]: 'Decisões arquiteturais',
      [CardTypes.QualityAttributes]: 'Atributos de qualidade',
      [CardTypes.ArchPattern]: 'Padrões arquiteturais',
      [CardTypes.LuckOrBackLuck]: 'Sorte ou revés',
    }),
    [],
  );

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;

    if (isOpen) {
      timeout = setTimeout(() => {
        setIsFlipped(true);
      }, 1000);
    } else if (!isOpen) {
      setIsFlipped(false);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isOpen]);

  if (!activeCard) return null;

  return (
    <Modal
      width="454px"
      isOpen={isOpen}
      showCloseButton={false}
      toggleModal={toggleModal}
      style={{
        content: {
          width: '380px',
          padding: '0',
          background: 'unset',
        },
      }}
    >
      <Container isFlipped={isFlipped} type={type}>
        {!isFlipped && (
          <Row className="front">
            <CardFront type={type} />
          </Row>
        )}
        {isFlipped && (
          <Row flexDirection="column" className="back">
            <div className="header">
              <h4>{text[type]}</h4>
            </div>
            <div className="body">
              {type === CardTypes.LuckOrBackLuck ? (
                <LuckCardBody />
              ) : (
                <NormalCardBody />
              )}
            </div>
          </Row>
        )}
      </Container>
    </Modal>
  );
};

export default ModalCard;
