import React, { useEffect, useMemo, useState } from 'react';

import { useGame } from '../../hooks/useGame.hook';
import { CardTypes } from '../../types';
import Modal from '../Modal';

import { Container } from './ModalCard.styles';
import LuckCardBody from './LuckCardBody';
import NormalCardBody from './NormalCardBody';

import { Flex } from '../Layout';
import CardFront from '../CardFront/CardFront';
import { Text } from '../UI';

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
      [CardTypes.LuckOrBadLuck]: 'Sorte ou revés',
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
          <Flex className="front">
            <CardFront type={type} />
          </Flex>
        )}
        {isFlipped && (
          <Flex flexDirection="column" className="back">
            <Flex
              alignItems="center"
              justifyContent="center"
              className="header"
            >
              <Text size="lg" weight="heavy">
                {activeCard.title}
              </Text>
            </Flex>
            <div className="body">
              {type === CardTypes.LuckOrBadLuck ? (
                <LuckCardBody />
              ) : (
                <NormalCardBody />
              )}
            </div>
          </Flex>
        )}
      </Container>
    </Modal>
  );
};

export default ModalCard;
