import React, { useCallback, useEffect, useMemo } from 'react';

import { FiMeh, FiSmile } from 'react-icons/fi';
import { Flex } from '../Layout';

import PlayerPin from '../PlayerPin';
import { LuckCardBodyContainer } from './ModalCard.styles';
import { Card, Player } from '../../types';
import { useGame } from '../../hooks/useGame.hook';
import { Text, Button } from '../UI';
import { useAudio } from '../../hooks/useAudio';

const LuckCardBody: React.FC = () => {
  const { activeCard, turnOf, endPlay } = useGame();
  const { audio: luckAudio } = useAudio('luck.flac');
  const { audio: badLuckAudio } = useAudio('bad-luck.mp3');

  const { description, luckType } = useMemo(
    () => (activeCard || {}) as Card,
    [activeCard],
  );

  const handleEndPlay = useCallback(() => {
    if (activeCard) {
      endPlay(activeCard);
    }
  }, [activeCard, endPlay]);

  useEffect(() => {
    if (luckType === 'luck') {
      luckAudio.play();
    } else {
      badLuckAudio.play();
    }
  }, [luckType, luckAudio, badLuckAudio]);

  return (
    <LuckCardBodyContainer luckType={luckType}>
      <Flex flexDirection="column" alignItems="center">
        <div className="icon">
          {luckType === 'luck' ? <FiSmile size={60} /> : <FiMeh size={60} />}
        </div>
        <div className="description">
          <Text size="lg" type="text" weight="heavy">
            {luckType === 'luck'
              ? 'Você teve sorte dessa vez! 🎉'
              : '😅 Poxa que azar!'}
          </Text>
        </div>
        <div className="info">
          <Text
            size="lg"
            weight="medium"
            type={luckType === 'luck' ? 'success' : 'danger'}
            align="center"
          >
            {description}
          </Text>
        </div>

        <div className="actions">
          <Flex gap={16} flexDirection="column" alignItems="center">
            <Flex justifyContent="center" gap={4}>
              <PlayerPin
                playerId={turnOf?.id as number}
                {...(turnOf as Player)}
              />
              <Text size="lg" weight="medium">
                {turnOf?.name}
              </Text>
            </Flex>
            <Button
              variant={luckType === 'luck' ? 'green' : 'red'}
              size="md"
              width="fit-content"
              onClick={handleEndPlay}
            >
              Continuar
            </Button>
          </Flex>
        </div>
      </Flex>
    </LuckCardBodyContainer>
  );
};

export default LuckCardBody;
