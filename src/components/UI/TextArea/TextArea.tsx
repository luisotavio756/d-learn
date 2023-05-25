import React, { TextareaHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Container, TextAreaElement } from './TextArea.styles';

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  register: UseFormRegister<any>;
  name: string;
  label?: string;
};

const TextArea: React.FC<TextAreaProps> = ({
  register,
  id,
  label,
  ...rest
}) => {
  if (label) {
    return (
      <Container>
        <label htmlFor={id}>{label}</label>
        <TextAreaElement {...rest} {...register(rest.name)} />
      </Container>
    );
  }

  return <TextAreaElement {...rest} {...register(rest.name)} />;
};

export default TextArea;
