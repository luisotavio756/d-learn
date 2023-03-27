import React, { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  register: UseFormRegister<any>;
  name: string;
};

const Input: React.FC<InputProps> = ({ register, ...rest }) => {
  return <input {...rest} {...register(rest.name)} />;
};

export default Input;
