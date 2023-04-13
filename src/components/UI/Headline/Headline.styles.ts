import styled, { StyledComponentPropsWithRef } from 'styled-components';
import { Slot } from '@radix-ui/react-slot';
import { theme } from '../../../styles/theme';

type HeadingTypes = 'neutral' | 'primary' | 'success' | 'danger' | 'light';
type HeadingSizes = 'sm' | 'md' | 'lg';
type HeadingWeights = 'light' | 'heavy';
type HeadingFamilies = 'mono' | 'sans';

export interface HeadingStylesProps {
  type?: HeadingTypes;
  size?: HeadingSizes;
  weight?: HeadingWeights;
  family?: HeadingFamilies;
}

const HeadingSizeList: Record<HeadingSizes, string> = {
  sm: theme.fontSize.lg,
  md: theme.fontSize.xl,
  lg: theme.fontSize['2xl'],
};

const HeadingLineHeighList: Record<HeadingSizes, string> = {
  sm: theme.lineHeight[6],
  md: theme.lineHeight[7],
  lg: theme.lineHeight[8],
};

const HeadingWeightList: Record<HeadingWeights, number> = {
  light: theme.fontWeight.regular,
  heavy: theme.fontWeight.bold,
};

const HeadingColorsList: Record<HeadingTypes, string> = {
  neutral: theme.colors.gray[800],
  danger: theme.colors.red[700],
  primary: theme.colors.blue[700],
  success: theme.colors.green[600],
  light: theme.colors.white,
};

const HeadlineFamilyList: Record<HeadingFamilies, string> = {
  mono: theme.fontFamily.mono,
  sans: theme.fontFamily.sans,
};

export const Container = styled.h2<HeadingStylesProps>`
  display: inline-flex;
  font-weight: ${props => HeadingWeightList[props.weight ?? 'heavy']};
  font-family: ${props => HeadlineFamilyList[props.family ?? 'sans']};
  font-size: ${props => HeadingSizeList[props.size ?? 'md']};
  color: ${props => HeadingColorsList[props.type ?? 'neutral']};
  line-height: ${props => HeadingLineHeighList[props.size ?? 'md']};
`;

export const ContainerWithSlot = styled(Slot)<HeadingStylesProps>`
  display: inline-flex;
  font-weight: ${props => HeadingWeightList[props.weight ?? 'heavy']};
  font-family: ${props => HeadlineFamilyList[props.family ?? 'sans']};
  font-size: ${props => HeadingSizeList[props.size ?? 'md']};
  color: ${props => HeadingColorsList[props.type ?? 'neutral']};
  line-height: ${props => HeadingLineHeighList[props.size ?? 'md']};
`;

export type HeadlineStyledProps = StyledComponentPropsWithRef<typeof Container>;
export type HeadlineStyledSlotProps = StyledComponentPropsWithRef<
  typeof ContainerWithSlot
>;
