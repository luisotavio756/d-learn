import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './Button.styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  loadingText?: string;
  marginTop?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?:
    | 'blue'
    | 'blue-outline'
    | 'red'
    | 'red-outline'
    | 'yellow'
    | 'yellow-outline'
    | 'green'
    | 'green-outline'
    | 'orange'
    | 'orange-outline'
    | 'text';
  width?: 'full' | 'fit-content' | 'flex-fit';
  justIcon?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  loadingText,
  marginTop = 0,
  size = 'lg',
  variant = 'blue',
  width = 'full',
  ...rest
}) => (
  <Container
    type="button"
    size={size}
    variant={variant}
    width={width}
    marginTop={marginTop}
    {...rest}
  >
    {loading ? loadingText : children}
  </Container>
);

export default Button;
