import React from 'react';

import { Container } from './Row.styles';

export interface RowProps {
  shouldShow?: boolean;
  children: React.ReactNode;
  gap?: number;
  flexDirection?: 'row' | 'column';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  justifyContent?: 'center' | 'space-between' | 'flex-start' | 'flex-end';
}

const Row: React.FC<RowProps> = ({ children, shouldShow = true, ...rest }) => {
  if (!shouldShow) return null;

  return <Container {...rest}>{children}</Container>;
};

export default Row;
