import React, { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Container, InputElement } from './Input.styles';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  register: UseFormRegister<any>;
  name: string;
  label?: string;
};

const Input: React.FC<InputProps> = ({ register, id, label, ...rest }) => {
  if (label) {
    return (
      <Container>
        <label htmlFor={id}>{label}</label>
        <InputElement {...rest} {...register(rest.name)} />
      </Container>
    );
  }

  return <InputElement {...rest} {...register(rest.name)} />;
};

export default Input;
