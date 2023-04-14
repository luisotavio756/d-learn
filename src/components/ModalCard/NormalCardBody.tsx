import React, { useCallback, useMemo, useState } from 'react';

import Stars from '../Stars/Stars';

import { NormalCardBodyContainer } from './ModalCard.styles';
import { Card } from '../../types';
import { useGame } from '../../hooks/useGame.hook';

import { Flex } from '../Layout';
import { Headline, Text, Button, ButtonGroup } from '../UI';

const NormalCardBody: React.FC = () => {
  const [answered, setAnswered] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  const { activeCard, answer, endPlay } = useGame();

  const { id, title, description, question, solutionText, stars, imgUrl } =
    useMemo(() => (activeCard || {}) as Card, [activeCard]);

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
        <Flex justifyContent="center" className="img">
          <img src={`src/assets/cards-images/${imgUrl}`} alt={title} />
        </Flex>
        <Flex className="description">
          <Text size="lg" weight="heavy">
            Descrição:
          </Text>
          <Text family="mono">{description}</Text>
        </Flex>
        <Flex className="question">
          <Text weight="medium" family="mono">
            {question}
          </Text>
        </Flex>
        <Flex justifyContent="center" className="stars">
          <Stars value={stars} size="lg" />
        </Flex>
        {answered && answeredCorrectly && (
          <Flex
            alignItems="center"
            flexDirection="column"
            className="answer correctly"
          >
            <Headline size="sm" type="success">
              Parabéns, você acertou! 🎉
            </Headline>
            <Text type="success" family="mono">
              {solutionText}
            </Text>
          </Flex>
        )}
        {answered && !answeredCorrectly && (
          <Flex
            alignItems="center"
            flexDirection="column"
            className="answer wrong"
          >
            <Headline size="sm" type="danger">
              Poxa, você errou! 😕
            </Headline>
            <Text type="danger" family="mono">
              {solutionText}
            </Text>
          </Flex>
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
