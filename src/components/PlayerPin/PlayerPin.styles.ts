import styled from 'styled-components';
import { PlayerPinProps } from './PlayerPin';

export const Container = styled.div<PlayerPinProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 22px;
  height: 22px;
  border-radius: 50%;

  background-color: ${props => props.color};

  transition: all 0.2s;
  cursor: pointer;
`;
