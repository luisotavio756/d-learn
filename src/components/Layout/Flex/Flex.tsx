import React from 'react';

import { Container, FlexProps, FlexStyledProps } from './Flex.styles';

type FullFlexProps = FlexProps & FlexStyledProps;

const Flex: React.FC<FullFlexProps> = ({
  children,
  shouldShow = true,
  ...rest
}) => {
  if (!shouldShow) return null;

  return <Container {...rest}>{children}</Container>;
};

export default Flex;
