import React, { useMemo } from 'react';

import { Container } from './CardFront.styles';

import { ReactComponent as ArchDecisionIcon } from '../../assets/cards-icons/arch_decision.svg';
import { ReactComponent as QualityAttrIcon } from '../../assets/cards-icons/quality_attr.svg';
import { ReactComponent as ArchPatternsIcon } from '../../assets/cards-icons/arch_pattern.svg';
import { ReactComponent as LuckIcon } from '../../assets/luck-icon.svg';

import { CardTypes } from '../../types';

interface CardFrontProps {
  type: CardTypes;
}

const CardFront: React.FC<CardFrontProps> = ({ type }) => {
  const icons = useMemo(
    () => ({
      [CardTypes.ArchDecisions]: <ArchDecisionIcon />,
      [CardTypes.QualityAttributes]: <QualityAttrIcon />,
      [CardTypes.ArchPattern]: <ArchPatternsIcon />,
      [CardTypes.LuckOrBadLuck]: <LuckIcon />,
    }),
    [],
  );

  const text = useMemo(
    () => ({
      [CardTypes.ArchDecisions]: 'Decisões arquiteturais',
      [CardTypes.QualityAttributes]: 'Atributos de qualidade',
      [CardTypes.ArchPattern]: 'Padrões arquiteturais',
      [CardTypes.LuckOrBadLuck]: 'Sorte ou revés',
    }),
    [],
  );
  return (
    <Container className="card-front" type={type}>
      <div className="icon">{icons[type]}</div>
      <div className="text">
        <strong>{text[type]}</strong>
      </div>
    </Container>
  );
};

export default CardFront;
