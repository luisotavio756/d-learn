import React, { useCallback, useMemo } from 'react';

import { FiMeh, FiSmile } from 'react-icons/fi';
import Button from '../Button';
import { Row } from '../Layout';

import { LuckCardBodyContainer } from './ModalCard.styles';
import { Card } from '../../types';
import { useGame } from '../../hooks/useGame.hook';

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
      <Row flexDirection="column" alignItems="center">
        <div className="icon">
          {luckType === 'luck' ? <FiSmile size={60} /> : <FiMeh size={60} />}
        </div>
        <div className="description">
          <strong>
            {luckType === 'luck'
              ? 'Você teve sorte dessa vez! 🎉'
              : '😅 Poxa que azar!'}
          </strong>
        </div>
        <div className="info">
          <strong>{description}</strong>
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
      </Row>
    </LuckCardBodyContainer>
  );
};

export default LuckCardBody;
