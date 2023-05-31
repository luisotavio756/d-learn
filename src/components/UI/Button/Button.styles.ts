import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';
import { theme } from '../../../styles/theme';

const colors = {
  blue: {
    background: theme.colors.blue[600],
    color: theme.colors.blue[50],
    border: '1px solid transparent',
  },
  'blue-outline': {
    background: 'transparent',
    color: theme.colors.blue[600],
    border: `1px solid ${theme.colors.blue[600]}`,
  },
  red: {
    background: theme.colors.red[600],
    color: theme.colors.red[50],
    border: '1px solid transparent',
  },
  'red-outline': {
    background: 'transparent',
    color: theme.colors.red[600],
    border: `1px solid ${theme.colors.red[600]}`,
  },
  yellow: {
    background: theme.colors.yellow[600],
    color: theme.colors.yellow[50],
    border: '1px solid transparent',
  },
  'yellow-outline': {
    background: 'transparent',
    color: theme.colors.yellow[600],
    border: `1px solid ${theme.colors.yellow[600]}`,
  },
  green: {
    background: theme.colors.green[600],
    color: theme.colors.green[50],
    border: '1px solid transparent',
  },
  'green-outline': {
    background: 'transparent',
    color: theme.colors.green[600],
    border: `1px solid ${theme.colors.green[600]}`,
  },
  text: {
    background: 'transparent',
    color: theme.colors.gray[600],
    border: '1px solid transparent',
  },
};

export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${props => props.theme.fontWeight.semiBold};
  background: ${props => colors[props?.variant ?? 'blue'].background};
  color: ${props => colors[props?.variant ?? 'blue'].color};

  border: ${props => colors[props?.variant ?? 'blue'].border};
  margin-top: ${props => props.marginTop}rem;
  transition: filter, text-decoration 0.2s;

  ${props =>
    !props.justIcon &&
    css`
      svg {
        margin-right: 6px;
      }
    `}

  &:hover {
    filter: brightness(90%);

    ${props =>
      props.variant === 'text' &&
      css`
        text-decoration: underline;
      `}
  }

  ${props =>
    props.width === 'flex-fit' &&
    css`
      flex: 1;
    `}

  ${props =>
    props.width === 'full' &&
    css`
      width: 100%;
    `}

  ${props =>
    props.width === 'fit-content' &&
    css`
      width: fit-content;
    `}

  ${props =>
    props.size === 'lg' &&
    css`
      height: 52px;
      font-size: ${props => props.theme.fontSize.base};
      padding: 0 1rem;
      border-radius: 0.625rem;
    `}

  ${props =>
    props.size === 'md' &&
    css`
      height: 2.5rem; // 40px
      font-size: ${props => props.theme.fontSize.sm};
      padding: 0 0.75rem;
      border-radius: 6px;
    `}

  ${props =>
    props.size === 'sm' &&
    css`
      height: 1.875rem; // 30px
      font-size: ${props => props.theme.fontSize.xs};
      padding: 0.5rem;
      border-radius: 4px;
    `}

  &:disabled {
    cursor: not-allowed;
    filter: brightness(80%);
  }
`;
