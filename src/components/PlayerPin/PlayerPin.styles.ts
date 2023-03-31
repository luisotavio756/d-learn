import styled from 'styled-components';
import PlayerImg from '../../assets/player.png';
import { PlayerPinProps } from './PlayerPin';

export const Container = styled.div<PlayerPinProps>`
  width: 22px;
  height: 22px;
  border-radius: 50%;

  background-image: url(${PlayerImg});
  background-color: ${props => props.color};
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.2s;
  cursor: pointer;
`;
