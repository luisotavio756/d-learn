import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
      [CardTypes.ArchDecisions]: t('game.cards.archDecisions'),
      [CardTypes.QualityAttributes]: t('game.cards.qualityAttributes'),
      [CardTypes.ArchPattern]: t('game.cards.archPattern'),
      [CardTypes.LuckOrBadLuck]: t('game.cards.luckOrBadLuck'),
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
