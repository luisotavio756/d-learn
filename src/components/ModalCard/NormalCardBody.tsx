import React, { useCallback, useMemo, useState } from 'react';

import Stars from '../Stars/Stars';

import { NormalCardBodyContainer } from './ModalCard.styles';
import { Card, CardTypes } from '../../types';
import { useGame } from '../../hooks/useGame.hook';

import { Flex } from '../Layout';
import { Headline, Text, Button, ButtonGroup } from '../UI';
import { useAudio } from '../../hooks/useAudio';

const NormalCardBody: React.FC = () => {
  const [answered, setAnswered] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  const { activeCard, turnOf, answer, endPlay } = useGame();
  const { audio: incorrectAudio } = useAudio('incorrect.mp3');
  const { audio: successAudio } = useAudio('success.mp3');

  const {
    title,
    description,
    question,
    solution,
    solutionText,
    stars,
    imgUrl,
  } = useMemo(() => (activeCard || {}) as Card, [activeCard]);

  const absoluteStars = useMemo(
    () => (turnOf?.customStarsCalc ? turnOf.customStarsCalc(stars) : stars),
    [turnOf, stars],
  );

  const handleAnswer = useCallback(
    (solution: string) => {
      const response = answer(solution);

      if (response) {
        successAudio.play();
        setAnsweredCorrectly(true);
      } else {
        incorrectAudio.play();
        setAnsweredCorrectly(false);
      }

      setAnswered(true);
    },
    [answer, incorrectAudio, successAudio],
  );

  const handleEndPlay = useCallback(() => {
    const isAnsweredCorrectly = answered && answeredCorrectly;

    if (activeCard) {
      endPlay(activeCard, isAnsweredCorrectly);

      setAnswered(false);
      setAnsweredCorrectly(false);
    }
  }, [answered, answeredCorrectly, activeCard, endPlay]);

  const getCardImage = useCallback(
    (card: Card) => {
      switch (card.type) {
        case CardTypes.ArchDecisions:
          return `src/assets/cards-images/arch-decision/${imgUrl}`;
        case CardTypes.ArchPattern:
          return `src/assets/cards-images/arch-pattern/${imgUrl}`;
        case CardTypes.QualityAttributes:
          return `src/assets/cards-images/quality-attr/${imgUrl}`;
        default:
          return '';
      }
    },
    [imgUrl],
  );

  return (
    <NormalCardBodyContainer>
      <div>
        <Flex shouldShow={!!imgUrl} justifyContent="center" className="img">
          <img src={getCardImage(activeCard as Card)} alt={title} />
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
              R: {solutionText}
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
              R: {solutionText}
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
              🚀 Avançar {absoluteStars} casas
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
