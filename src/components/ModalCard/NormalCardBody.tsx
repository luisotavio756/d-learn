/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Stars from '../Stars/Stars';

import PlayerPin from '../PlayerPin';
import Timer from '../Timer';
import { NormalCardBodyContainer } from './ModalCard.styles';
import { Card, Player } from '../../types';
import { useGame } from '../../hooks/useGame.hook';

import { Flex } from '../Layout';
import { Headline, Text, Button, ButtonGroup } from '../UI';
import { useAudio } from '../../hooks/useAudio';

const NormalCardBody: React.FC = () => {
  const { t } = useTranslation();
  const [answered, setAnswered] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const [timeIsOver, setTimeIsOver] = useState(false);
  const [timeIsRunning, setTimeIsRunning] = useState(true);

  const { timer, activeCard, turnOf, answer, endPlay } = useGame();
  const { audio: incorrectAudio } = useAudio('incorrect.mp3');
  const { audio: successAudio } = useAudio('success.mp3');
  const { audio: timerAudio } = useAudio('timer.mp3');

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
      setTimeIsRunning(false);
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

  const handleTimeIsOver = useCallback(() => {
    setTimeIsOver(true);
    timerAudio.play();
  }, []);
  
  return (
    <NormalCardBodyContainer>
      <div>
        {timer !== null && !isNaN(timer) && (
        <Flex className="timer" justifyContent="flex-end" >
          <Timer remainingTime={timer} timeIsOver={handleTimeIsOver} timeIsRunning={timeIsRunning} />
        </Flex>
        )}
        <Flex shouldShow={!!imgUrl} justifyContent="center" className="img">
          <img src={activeCard?.imgUrl} alt={title} />
        </Flex>
        <Flex className="description">
          <Text size="lg" weight="heavy">
            {t('game.cards.description')}
          </Text>
          <Text size="lg" family="mono">
            {description}
          </Text>
        </Flex>
        <Flex className="question">
          <Text size="lg" weight="medium" family="mono">
            {question}
          </Text>
        </Flex>
        <Flex justifyContent="center" className="stars">
          <Stars value={stars} size="lg" />
        </Flex>
        <Flex
          shouldShow={answered && answeredCorrectly}
          alignItems="center"
          flexDirection="column"
          className="answer correctly"
        >
          <Headline size="sm" type="success">
            {t('game.cards.congratulations')}
          </Headline>
          <Text size="lg" type="success" family="mono" align="center">
            {t('game.cards.acronymResponse')} {solutionText}
          </Text>
        </Flex>

        <Flex
          shouldShow={answered && !answeredCorrectly}
          alignItems="center"
          flexDirection="column"
          className="answer wrong"
        >
          <Headline size="sm" type="danger">
            {t('game.cards.damn')}
          </Headline>
          <Text size="lg" type="danger" family="mono" align="center">
            {t('game.cards.acronymResponse')} {solutionText}
          </Text>
        </Flex>

        <Flex
          shouldShow={timeIsOver}
          alignItems="center"
          flexDirection="column"
          className="answer wrong"
        >
          <Headline size="sm" type="danger">
            {t('game.cards.timerIsOver')}
          </Headline>
          <Text size="lg" type="danger" family="mono" align="center">
            {t('game.cards.beFaster')}
          </Text>
        </Flex>
      </div>
      <div className="actions">
        <Flex gap={16} shouldShow={!answered && !timeIsOver} flexDirection="column">
          <Flex justifyContent="center" gap={4}>
            <PlayerPin
              playerId={turnOf?.id as number}
              {...(turnOf as Player)}
            />
            <Text size="lg" weight="light">
              {turnOf?.name}
            </Text>
          </Flex>
          <ButtonGroup justifyContent="center" gap={10}>
            <Button
              variant="red"
              size="sm"
              width="flex-fit"
              onClick={() => handleAnswer('F')}
            >
              {t('game.cards.false')}
            </Button>
            <Button
              variant="green"
              size="sm"
              width="flex-fit"
              onClick={() => handleAnswer('V')}
            >
              {t('game.cards.true')}
            </Button>
          </ButtonGroup>
        </Flex>
        {answered && answeredCorrectly && (
          <ButtonGroup justifyContent="flex-end">
            <Button
              variant="green"
              size="md"
              width="fit-content"
              onClick={handleEndPlay}
            >
              {t('game.cards.advance', { absoluteStars })}
            </Button>
          </ButtonGroup>
        )}
        {timeIsOver || (answered && !answeredCorrectly) ? (
          <ButtonGroup justifyContent="flex-end">
            <Button
              variant="red"
              size="md"
              width="fit-content"
              onClick={handleEndPlay}
            >
              {t('game.cards.pass')}
            </Button>
          </ButtonGroup>
        ): null}
      </div>
    </NormalCardBodyContainer>
  );
};

export default NormalCardBody;
