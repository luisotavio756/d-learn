import styled from 'styled-components';
import { Flex } from '../../../components/Layout';

export const Container = styled(Flex)`
  min-height: 60px;
  background-color: ${props => props.theme.colors.blue[900]};
`;
