import styled, { StyledComponentPropsWithRef, css } from 'styled-components';

export interface FlexProps {
  shouldShow?: boolean;
  children: React.ReactNode;
  gap?: number;
  className?: string;
  flexDirection?: 'row' | 'column';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  justifyContent?: 'center' | 'space-between' | 'flex-start' | 'flex-end';
}

export const Container = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection ?? 'row'};

  ${props =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `};

  ${props =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `};

  ${props =>
    props.gap &&
    css`
      gap: ${props.gap}px;
    `};
`;

export type FlexStyledProps = StyledComponentPropsWithRef<typeof Container>;
