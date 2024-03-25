import React, { useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { FiMeh, FiSmile, FiInfo } from 'react-icons/fi';
import { FaRegSurprise } from 'react-icons/fa';
import { Flex } from '../Layout';

import PlayerPin from '../PlayerPin';
import { LuckCardBodyContainer } from './ModalCard.styles';
import { Card, LuckTypes, Player } from '../../types';
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

  function renderIcon(luckType?: LuckTypes) {
    if (luckType === LuckTypes.Luck) return <FiSmile size={60} />;
    if (luckType === LuckTypes.BadLuck) return <FiMeh size={60} />;
    return <FaRegSurprise size={60} />;
  }

  function renderDescription(luckType?: LuckTypes) {
    if (luckType === LuckTypes.Luck) return t('game.cards.luck');
    if (luckType === LuckTypes.BadLuck) return t('game.cards.badLuck');
    return t('game.cards.luckOrBadLuckDescription');
  }

  function renderInfo(luckType?: LuckTypes) {
    if (luckType === LuckTypes.Luck) return 'success';
    if (luckType === LuckTypes.BadLuck) return 'danger';
    return 'warning';
  }

  function renderButton(luckType?: LuckTypes) {
    if (luckType === LuckTypes.Luck) return 'green';
    if (luckType === LuckTypes.BadLuck) return 'red';
    return 'orange';
  }

  useEffect(() => {
    if (luckType === LuckTypes.Luck || luckType === LuckTypes.LuckOrBadLuck) {
      luckAudio.play();
    } else {
      badLuckAudio.play();
    }
  }, [luckType, luckAudio, badLuckAudio]);

  return (
    <LuckCardBodyContainer luckType={luckType}>
      <Flex flexDirection="column" alignItems="center">
        <div className="icon">{renderIcon(luckType)}</div>
        <div className="description">
          <Text size="lg" type="text" weight="heavy">
            {renderDescription(luckType)}
          </Text>
        </div>
        <div className="info">
          <Text
            size="lg"
            weight="medium"
            type={renderInfo(luckType)}
            align="center"
          >
            {description}
          </Text>
        </div>
        <div className="warning">
          <Flex
            shouldShow={!!turnOf?.customStarsCalc || !!turnOf?.customLuckAction}
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
              variant={renderButton(luckType)}
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
