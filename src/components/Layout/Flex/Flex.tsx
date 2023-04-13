import React from 'react';

import { Container } from './Flex.styles';

export interface FlexProps {
  shouldShow?: boolean;
  children: React.ReactNode;
  gap?: number;
  className?: string;
  flexDirection?: 'row' | 'column';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  justifyContent?: 'center' | 'space-between' | 'flex-start' | 'flex-end';
}

const Flex: React.FC<FlexProps> = ({
  children,
  shouldShow = true,
  ...rest
}) => {
  if (!shouldShow) return null;

  return <Container {...rest}>{children}</Container>;
};

export default Flex;
