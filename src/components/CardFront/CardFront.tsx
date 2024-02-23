import React, { useMemo } from 'react';

import { Container } from './CardFront.styles';

import { ReactComponent as ArchDecisionIcon } from '../../assets/cards-icons/arch_decision.svg';
import { ReactComponent as QualityAttrIcon } from '../../assets/cards-icons/quality_attr.svg';
import { ReactComponent as ArchPatternsIcon } from '../../assets/cards-icons/arch_pattern.svg';
import { ReactComponent as LuckOrBadLuckIcon } from '../../assets/cards-icons/luck_or_bad_luck.svg';

import { CardTypes } from '../../types';
import { Headline } from '../UI';

interface CardFrontProps {
  type: CardTypes;
}

const CardFront: React.FC<CardFrontProps> = ({ type }) => {
  const icons = useMemo(
    () => ({
      [CardTypes.ArchDecisions]: <ArchDecisionIcon />,
      [CardTypes.QualityAttributes]: <QualityAttrIcon />,
      [CardTypes.ArchPattern]: <ArchPatternsIcon />,
      [CardTypes.LuckOrBadLuck]: <LuckOrBadLuckIcon />,
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
    <Container
      type={type}
      className="card-front"
      gap={12}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <div className="icon">{icons[type]}</div>
      <Headline
        size="sm"
        type={type === CardTypes.LuckOrBadLuck ? 'neutral' : 'light'}
      >
        {text[type]}
      </Headline>
    </Container>
  );
};

export default CardFront;
