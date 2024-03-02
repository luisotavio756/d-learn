import React from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { Text } from '../UI';
import { Container } from './Timer.styles';

interface TimerProps {
  remainingTime: number;
  timeIsOver: () => void;
  timeIsRunning: boolean;
}

const Timer: React.FC<TimerProps> = ({
  remainingTime = 10,
  timeIsOver,
  timeIsRunning
}) => {
  const renderTime = (remainingTime: number) => {
    return (
      <Text size="lg" weight="heavy">{remainingTime}</Text>
    );
  };

  return (
    <Container>
      <CountdownCircleTimer
        duration={remainingTime}
        colors={['#1ED300', '#E9D202', '#FEA800', '#D30D00']}
        colorsTime={[
          remainingTime, 
          remainingTime * 0.66 , 
          remainingTime * 0.33, 
          0
        ]}
        isPlaying={timeIsRunning}
        size={40}
        strokeWidth={5}
        trailStrokeWidth={5}
        strokeLinecap={"round"}
        trailColor={"#D9D9D9"}
        onComplete={() => { timeIsOver() }}
      >
        {({ remainingTime }) => renderTime(remainingTime)}
      </CountdownCircleTimer>
    </Container>
  );
};

export default Timer;
