import React, { useEffect, useState } from 'react';

import { useGame } from '../../hooks/useGame.hook';
import { CardTypes } from '../../types';
import Modal from '../Modal';

import { Container } from './ModalCard.styles';
import LuckCardBody from './LuckCardBody';
import NormalCardBody from './NormalCardBody';

import { Flex } from '../Layout';
import CardFront from '../CardFront/CardFront';
import { Headline } from '../UI';

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
      isOpen={isOpen}
      showCloseButton={false}
      toggleModal={toggleModal}
      style={{
        content: {
          maxWidth: '412px',
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
              <Headline size="sm" weight="heavy">
                {activeCard.title}
              </Headline>
            </Flex>
            <div className="body">
              {type === CardTypes.LuckOrBadLuck ? (
                <LuckCardBody />
              ) : (
                <NormalCardBody type={type} />
              )}
            </div>
          </Flex>
        )}
      </Container>
    </Modal>
  );
};

export default ModalCard;
