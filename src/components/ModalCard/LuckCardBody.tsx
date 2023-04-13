import React, { useCallback, useMemo } from 'react';

import { FiMeh, FiSmile } from 'react-icons/fi';
import Button from '../Button';
import { Flex } from '../Layout';

import { LuckCardBodyContainer } from './ModalCard.styles';
import { Card } from '../../types';
import { useGame } from '../../hooks/useGame.hook';
import { Text } from '../UI';

const LuckCardBody: React.FC = () => {
  const { activeCard, endPlay } = useGame();

  const { description, luckType } = useMemo(
    () => (activeCard || {}) as Card,
    [activeCard],
  );

  const handleEndPlay = useCallback(() => {
    if (activeCard) {
      endPlay(activeCard);
    }
  }, [activeCard, endPlay]);

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
            weight="medium"
            type={luckType === 'luck' ? 'success' : 'danger'}
          >
            {description}
          </Text>
        </div>

        <div className="actions">
          <Button
            variant={luckType === 'luck' ? 'green' : 'red'}
            size="md"
            width="fit-content"
            onClick={handleEndPlay}
          >
            Continuar
          </Button>
        </div>
      </Flex>
    </LuckCardBodyContainer>
  );
};

export default LuckCardBody;
