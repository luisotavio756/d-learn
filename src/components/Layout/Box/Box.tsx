import React from 'react';

import { Container, BoxProps, BoxStyledProps } from './Box.styles';

type FullBoxProps = BoxProps & BoxStyledProps;

const Box: React.FC<FullBoxProps> = ({
  children,
  shouldShow = true,
  ...rest
}) => {
  if (!shouldShow) return null;

  return <Container {...rest}>{children}</Container>;
};

export default Box;
