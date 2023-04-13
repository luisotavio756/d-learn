import { ReactNode } from 'react';
import {
  Container,
  ContainerWithSlot,
  HeadlineStyledProps,
  HeadingStylesProps,
} from './Headline.styles';

type HeadlineProps = HeadlineStyledProps &
  HeadingStylesProps & {
    asChild?: boolean;
    children: ReactNode;
  };

const Headline = ({ asChild, children, ...rest }: HeadlineProps) => {
  const Component = asChild ? ContainerWithSlot : Container;
  return <Component {...rest}>{children}</Component>;
};

export default Headline;
