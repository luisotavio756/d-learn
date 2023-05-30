import styled, { StyledComponentPropsWithRef } from 'styled-components';

export interface BoxProps {
  shouldShow?: boolean;
  children?: React.ReactNode;
}

export const Container = styled.div<BoxProps>``;

export type BoxStyledProps = StyledComponentPropsWithRef<typeof Container>;
