import React from 'react';
import Input, { InputProps } from '../Input/Input';

import { Container } from './InputForm.styles';

type InputFormProps = InputProps & {
  label: string;
};

const InputForm: React.FC<InputFormProps> = ({ label, id, ...rest }) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <Input id={id} {...rest} />
    </Container>
  );
};

export default InputForm;
