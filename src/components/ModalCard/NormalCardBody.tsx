import React, { useCallback, useMemo, useState } from 'react';

import Stars from '../Stars/Stars';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

import { NormalCardBodyContainer } from './ModalCard.styles';
import { Card } from '../../types';
import { useGame } from '../../hooks/useGame.hook';

const NormalCardBody: React.FC = () => {
  const [answered, setAnswered] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  const { activeCard, answer, endPlay } = useGame();

  const { description, question, solutionText, stars } = useMemo(
    () => (activeCard || {}) as Card,
    [activeCard],
  );

  const handleAnswer = useCallback(
    (solution: string) => {
      const response = answer(solution);

      if (response) {
        setAnsweredCorrectly(true);
      } else {
        setAnsweredCorrectly(false);
      }

      setAnswered(true);
    },
    [answer],
  );

  const handleEndPlay = useCallback(() => {
    const isAnsweredCorrectly = answered && answeredCorrectly;

    if (activeCard) {
      endPlay(activeCard, isAnsweredCorrectly);

      setAnswered(false);
      setAnsweredCorrectly(false);
    }
  }, [answered, answeredCorrectly, activeCard, endPlay]);

  return (
    <NormalCardBodyContainer>
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
            <Button
              variant="green"
              size="md"
              width="fit-content"
              onClick={handleEndPlay}
            >
              🚀 Avançar {stars} casas
            </Button>
          </ButtonGroup>
        )}
        {answered && !answeredCorrectly && (
          <ButtonGroup justifyContent="flex-end">
            <Button
              variant="red"
              size="md"
              width="fit-content"
              onClick={handleEndPlay}
            >
              Passar para o próximo
            </Button>
          </ButtonGroup>
        )}
      </div>
    </NormalCardBodyContainer>
  );
};

export default NormalCardBody;
