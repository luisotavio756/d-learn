// eslint-disable-next-line import/no-extraneous-dependencies
import { get } from 'lodash';
import { DefaultTheme } from 'styled-components';

interface StyledComponentProps {
  theme: DefaultTheme;
}

export const token = (key: string) => (props: StyledComponentProps) =>
  get(props.theme, key);
