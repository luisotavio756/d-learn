import styled, { StyledComponentPropsWithRef } from 'styled-components';
import { Slot } from '@radix-ui/react-slot';
import { theme } from '../../../styles/theme';

type TextTypes =
  | 'text'
  | 'primary'
  | 'success'
  | 'danger'
  | 'light'
  | 'neutral'
  | 'warning';
type TextSizes = 'xs' | 'sm' | 'md' | 'lg';
type TextWeights = 'light' | 'medium' | 'heavy';
type TextFamilies = 'mono' | 'sans';

export interface TextStylesProps {
  type?: TextTypes;
  size?: TextSizes;
  weight?: TextWeights;
  family?: TextFamilies;
  align?: 'center' | 'justify' | 'right' | 'left';
}

const TextSizeList: Record<TextSizes, string> = {
  xs: theme.fontSize.xxs,
  sm: theme.fontSize.xs,
  md: theme.fontSize.sm,
  lg: theme.fontSize.base,
};

const TextLineHeighList: Record<TextSizes, string | number> = {
  xs: theme.lineHeight.snug,
  sm: theme.lineHeight[4],
  md: theme.lineHeight[5],
  lg: theme.lineHeight[6],
};

const TextWeightList: Record<TextWeights, number> = {
  light: theme.fontWeight.regular,
  medium: theme.fontWeight.medium,
  heavy: theme.fontWeight.bold,
};

const TextFamilyList: Record<TextFamilies, string> = {
  mono: theme.fontFamily.mono,
  sans: theme.fontFamily.sans,
};

const TextColorsList: Record<TextTypes, string> = {
  text: theme.colors.gray[800],
  neutral: theme.colors.gray[600],
  danger: theme.colors.red[700],
  primary: theme.colors.blue[700],
  success: theme.colors.green[600],
  light: theme.colors.white,
  warning: theme.colors.orange[400],
};

export const Container = styled.p<TextStylesProps>`
  font-weight: ${props => TextWeightList[props.weight ?? 'light']};
  font-size: ${props => TextSizeList[props.size ?? 'md']};
  font-family: ${props => TextFamilyList[props.family ?? 'sans']};
  color: ${props => TextColorsList[props.type ?? 'text']};
  line-height: ${props => TextLineHeighList[props.size ?? 'md']};
  text-align: ${props => props.align ?? 'left'};

  display: flex;
  align-items: center;

  svg {
    margin-right: 2px;
  }
`;

export const ContainerWithSlot = styled(Slot)<TextStylesProps>`
  font-weight: ${props => TextWeightList[props.weight ?? 'light']};
  font-size: ${props => TextSizeList[props.size ?? 'md']};
  font-family: ${props => TextFamilyList[props.family ?? 'sans']};
  color: ${props => TextColorsList[props.type ?? 'text']};
  line-height: ${props => TextLineHeighList[props.size ?? 'md']};
  text-align: ${props => props.align ?? 'left'};

  display: flex;
  align-items: center;

  svg {
    margin-right: 2px;
  }
`;

export type TextStyledProps = StyledComponentPropsWithRef<typeof Container>;
export type TextStyledSlotProps = StyledComponentPropsWithRef<
  typeof ContainerWithSlot
>;
