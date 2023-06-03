import styled, { css, StyledComponentPropsWithRef } from 'styled-components';
import { breakpoints as widthBreakpoints } from '../../../styles/breakpoints';

type GridTemplate = {
  templateColumns?: string;
  templateRows?: string;
};

export interface GridProps {
  shouldShow?: boolean;
  children: React.ReactNode;
  gap?: number;
  templateColumns?: string;
  templateRows?: string;
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  breakpoints?: {
    xl?: GridTemplate;
    lg?: GridTemplate;
    md?: GridTemplate;
    sm?: GridTemplate;
  };
}

export const Container = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${props => props.templateColumns ?? '1fr'};
  grid-template-rows: ${props => props.templateRows ?? '1fr'};
  align-items: ${props => props.alignItems ?? 'initial'};

  ${props =>
    props.gap &&
    css`
      gap: ${props.gap}px;
    `};

  @media screen and (max-width: ${widthBreakpoints.xl}) {
    ${({ breakpoints }) =>
      breakpoints?.xl &&
      css`
        grid-template-columns: ${breakpoints?.xl.templateColumns};
        grid-template-rows: ${breakpoints?.xl.templateRows};
      `}
  }

  @media screen and (max-width: ${widthBreakpoints.lg}) {
    ${({ breakpoints }) =>
      breakpoints?.lg &&
      css`
        grid-template-columns: ${breakpoints?.lg.templateColumns};
        grid-template-rows: ${breakpoints?.lg.templateRows};
      `}
  }

  @media screen and (max-width: ${widthBreakpoints.md}) {
    ${({ breakpoints }) =>
      breakpoints?.md &&
      css`
        grid-template-columns: ${breakpoints?.md.templateColumns};
        grid-template-rows: ${breakpoints?.md.templateRows};
      `}
  }

  @media screen and (max-width: ${widthBreakpoints.sm}) {
    ${({ breakpoints }) =>
      breakpoints?.sm &&
      css`
        grid-template-columns: ${breakpoints?.sm.templateColumns};
        grid-template-rows: ${breakpoints?.sm.templateRows};
      `}
  }
`;

export type GridStyledProps = StyledComponentPropsWithRef<typeof Container>;
