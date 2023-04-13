import React from 'react';
import { Container } from './ButtonGroup.styles';

interface ButtonGroupProps {
  justifyContent?: 'center' | 'flex-start' | 'flex-end';
  children: React.ReactNode;
  gap?: number;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  justifyContent = 'flex-start',
  gap = 0,
}) => {
  return (
    <Container className="button-group" style={{ justifyContent, gap }}>
      {children}
    </Container>
  );
};

export default ButtonGroup;
