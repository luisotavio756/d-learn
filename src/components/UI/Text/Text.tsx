import { ReactNode } from 'react';
import {
  Container,
  ContainerWithSlot,
  TextStyledProps,
  TextStylesProps,
} from './Text.styles';

type TextProps = TextStyledProps &
  TextStylesProps & {
    asChild?: boolean;
    children: ReactNode;
  };

const Text = ({ asChild, children, ...rest }: TextProps) => {
  const Component = asChild ? ContainerWithSlot : Container;
  return <Component {...rest}>{children}</Component>;
};

export default Text;
