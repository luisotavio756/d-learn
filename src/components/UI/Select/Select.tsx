import React, { SelectHTMLAttributes, useMemo } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Container, SelectElement } from './Select.styles';

type Option = {
  label: string;
  value: string | number;
};

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  register: UseFormRegister<any>;
  name: string;
  label?: string;
  options: Option[];
};

const Select: React.FC<SelectProps> = ({
  register,
  id,
  label,
  options,
  ...rest
}) => {
  const selectElement = useMemo(
    () => (
      <SelectElement defaultValue="-1" {...rest} {...register(rest.name)}>
        {rest.placeholder && (
          <option value="-1" disabled>
            {rest.placeholder}
          </option>
        )}
        {options.map(item => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </SelectElement>
    ),
    [rest, register, options],
  );

  if (label) {
    return (
      <Container>
        <label htmlFor={id}>{label}</label>
        {selectElement}
      </Container>
    );
  }

  return selectElement;
};

export default Select;
