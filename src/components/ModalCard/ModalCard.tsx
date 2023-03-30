import React, { useCallback, useMemo, useState } from 'react';
import { useGame } from '../../hooks/useGame.hook';
import { Card, CardTypes } from '../../types';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Modal from '../Modal';
import Stars from '../Stars';

import { Container } from './ModalCard.styles';

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
  const [answered, setAnswered] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  const { activeCard, turnOf, answer, passTurnToNextPlayer } = useGame();

  const { id, description, question, solution, solutionText, stars } = useMemo(
    () => (activeCard || {}) as Card,
    [activeCard],
  );

  const cardsTitle = useMemo(
    () => ({
      [CardTypes.ArchDecisions]: 'Decisões arquiteturais',
      [CardTypes.QualityAttributes]: 'Atributos de qualidade',
      [CardTypes.ArchPattern]: 'Padrões arquiteturais',
      [CardTypes.LuckOrBackLuck]: 'Sorte ou revés',
    }),
    [],
  );

  const handleAnswer = useCallback(
    (solution: string) => {
      if (turnOf) {
        const response = answer(turnOf, solution);

        if (response) {
          setAnsweredCorrectly(true);
        } else {
          setAnsweredCorrectly(false);
        }

        setAnswered(true);
      }
    },
    [turnOf, answer],
  );

  // console.log(type);

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
          <div>
            <div className="description">
              <strong>Descrição:</strong>
              <p>{description}</p>
            </div>
            <div className="question">
              <p>{question}</p>
            </div>
            <div className="stars">
              <Stars value={stars} size="lg" />
            </div>
            {answered && answeredCorrectly && (
              <div className="answer correctly">
                <h3>Parabéns, você acertou! 🎉</h3>
                <p>{solutionText}</p>
              </div>
            )}
            {answered && !answeredCorrectly && (
              <div className="answer wrong">
                <h3>Poxa, você errou! 😕</h3>
                <p>{solutionText}</p>
              </div>
            )}
          </div>
          <div className="actions">
            {!answered && (
              <ButtonGroup justifyContent="center" gap={10}>
                <Button
                  variant="red"
                  size="sm"
                  width="flex-fit"
                  onClick={() => handleAnswer('F')}
                >
                  Falso
                </Button>
                <Button
                  variant="green"
                  size="sm"
                  width="flex-fit"
                  onClick={() => handleAnswer('V')}
                >
                  Verdadeiro
                </Button>
              </ButtonGroup>
            )}
            {answered && answeredCorrectly && (
              <ButtonGroup justifyContent="flex-end">
                <Button variant="green" size="md" width="fit-content">
                  Avançar 2 casas
                </Button>
              </ButtonGroup>
            )}
            {answered && !answeredCorrectly && (
              <ButtonGroup justifyContent="flex-end">
                <Button variant="red" size="md" width="fit-content">
                  Fechar
                </Button>
              </ButtonGroup>
            )}
          </div>
        </div>
      </Container>
    </Modal>
  );
};

export default ModalCard;
