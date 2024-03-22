import React, { useMemo } from 'react';
import { FiStar } from 'react-icons/fi';
import { Container } from './Stars.styles';
import { CardTypes } from '../../types';

interface StarsProps {
  value: number;
  size?: 'lg' | 'md' | 'sm';
  type: CardTypes;
}

const Stars: React.FC<StarsProps> = ({ value, size = 'md', type }) => {
  const absoluteValue = Math.ceil(value);

  const sizeEnum = useMemo(
    () => ({
      lg: 24,
      md: 16,
      sm: 12,
    }),
    [],
  );

  return (
    <Container type={type}>
      {Array.from({ length: 6 }, (_, i) => {
        return (
          <FiStar
            size={sizeEnum[size]}
            className={i + 1 <= absoluteValue ? 'fill' : ''}
            key={i}
          />
        );
      })}
    </Container>
  );
};

export default Stars;
