import React from 'react';

import { Container, GridStyledProps, GridProps } from './Grid.styles';

type FullGridProps = GridStyledProps & GridProps;

const Grid: React.FC<FullGridProps> = ({
  children,
  shouldShow = true,
  ...rest
}) => {
  if (!shouldShow) return null;

  return <Container {...rest}>{children}</Container>;
};

export default Grid;
