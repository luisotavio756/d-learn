import React, { useMemo } from 'react';
import { FiStar } from 'react-icons/fi';
import { Container } from './Stars.styles';

interface StarsProps {
  value: number;
  size?: 'lg' | 'md' | 'sm';
}

const Stars: React.FC<StarsProps> = ({ value, size = 'md' }) => {
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
    <Container>
      {Array.from({ length: 5 }, (_, i) => {
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
