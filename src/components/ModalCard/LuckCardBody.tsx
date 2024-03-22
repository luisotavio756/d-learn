import React, { useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { FiMeh, FiSmile, FiInfo } from 'react-icons/fi';
import { FaRegSurprise } from 'react-icons/fa';
import { Flex } from '../Layout';

import PlayerPin from '../PlayerPin';
import { LuckCardBodyContainer } from './ModalCard.styles';
import { Card, Player } from '../../types';
import { useGame } from '../../hooks/useGame.hook';
import { Text, Button } from '../UI';
import { useAudio } from '../../hooks/useAudio';

const LuckCardBody: React.FC = () => {
  const { t } = useTranslation();
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
    if (luckType === 'luck' || luckType === 'luck-or-bad-luck') {
      luckAudio.play();
    } else {
      badLuckAudio.play();
    }
  }, [luckType, luckAudio, badLuckAudio]);

  return (
    <LuckCardBodyContainer luckType={luckType}>
      <Flex flexDirection="column" alignItems="center">
        <div className="icon">
          {luckType === 'luck' ? (
            <FiSmile size={60} />
          ) : luckType === 'bad-luck' ? (
            <FiMeh size={60} />
          ) : (
            <FaRegSurprise size={60} />
          )}
        </div>
        <div className="description">
          <Text size="lg" type="text" weight="heavy">
            {luckType === 'luck'
              ? t('game.cards.luck')
              : luckType === 'bad-luck'
              ? t('game.cards.badLuck')
              : t('game.cards.luckOrBadLuckDescription')}
          </Text>
        </div>
        <div className="info">
          <Text
            size="lg"
            weight="medium"
            type={
              luckType === 'luck'
                ? 'success'
                : luckType === 'bad-luck'
                ? 'danger'
                : 'warning'
            }
            align="center"
          >
            {description}
          </Text>
        </div>
        <div className="warning">
          <Flex
            shouldShow={
              turnOf?.customStarsCalc !== undefined ||
              turnOf?.customLuckAction !== undefined
            }
          >
            <Text size="md" type="neutral" weight="medium">
              <FiInfo /> {t('game.cards.canceledActions')}
            </Text>
          </Flex>
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
              variant={
                luckType === 'luck'
                  ? 'green'
                  : luckType === 'bad-luck'
                  ? 'red'
                  : 'orange'
              }
              size="md"
              width="fit-content"
              onClick={handleEndPlay}
            >
              {t('game.cards.continue')}
            </Button>
          </Flex>
        </div>
      </Flex>
    </LuckCardBodyContainer>
  );
};

export default LuckCardBody;
