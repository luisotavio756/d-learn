import React, { useMemo } from 'react';
import { SquareTypes } from '../../types';

import { Container } from './CardsQueue.styles';

import ArchDecisionIcon from '../../assets/arch_decisions_icon.png';
import QualityAttrIcon from '../../assets/quality_attr_icon.png';
import ArchPatternsIcon from '../../assets/arch_patterns_icon.png';
import LuckIcon from '../../assets/luck-icon.svg';

interface CardsQueueProps {
  type: SquareTypes;
  enabled: boolean;
}

const CardsQueue: React.FC<CardsQueueProps> = ({ enabled, type }) => {
  const icons = useMemo(
    () => ({
      [SquareTypes.ArchDecisions]: ArchDecisionIcon,
      [SquareTypes.QualityAttributes]: QualityAttrIcon,
      [SquareTypes.ArchPattern]: ArchPatternsIcon,
      [SquareTypes.LuckOrBackLuck]: LuckIcon,
    }),
    [],
  );

  const text = useMemo(
    () => ({
      [SquareTypes.ArchDecisions]: 'Decisões arquiteturais',
      [SquareTypes.QualityAttributes]: 'Atributos de qualidade',
      [SquareTypes.ArchPattern]: 'Padrões arquiteturais',
      [SquareTypes.LuckOrBackLuck]: 'Sorte ou revés',
    }),
    [],
  );

  return (
    <Container type={type} enabled={enabled}>
      <div className="icon">
        {icons[type] && <img src={icons[type]} alt="" />}
      </div>
      <div className="text">
        <strong>{text[type]}</strong>
      </div>
    </Container>
  );
};

export default CardsQueue;
