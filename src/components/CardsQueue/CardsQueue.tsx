import React, { useMemo } from 'react';
import { CardTypes } from '../../types';

import { Container } from './CardsQueue.styles';

import ArchDecisionIcon from '../../assets/arch_decisions_icon.png';
import QualityAttrIcon from '../../assets/quality_attr_icon.png';
import ArchPatternsIcon from '../../assets/arch_patterns_icon.png';
import LuckIcon from '../../assets/luck-icon.svg';

interface CardsQueueProps {
  type: CardTypes;
  enabled: boolean;
  onClick(type: CardTypes): void;
}

const CardsQueue: React.FC<CardsQueueProps> = ({ enabled, type, onClick }) => {
  const icons = useMemo(
    () => ({
      [CardTypes.ArchDecisions]: ArchDecisionIcon,
      [CardTypes.QualityAttributes]: QualityAttrIcon,
      [CardTypes.ArchPattern]: ArchPatternsIcon,
      [CardTypes.LuckOrBackLuck]: LuckIcon,
    }),
    [],
  );

  const text = useMemo(
    () => ({
      [CardTypes.ArchDecisions]: 'Decisões arquiteturais',
      [CardTypes.QualityAttributes]: 'Atributos de qualidade',
      [CardTypes.ArchPattern]: 'Padrões arquiteturais',
      [CardTypes.LuckOrBackLuck]: 'Sorte ou revés',
    }),
    [],
  );

  return (
    <Container
      type={type}
      enabled={enabled}
      onClick={() => onClick(type)}
      aria-hidden="true"
    >
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
