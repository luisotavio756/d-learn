import { Container } from './Footer.styles';
import { Text } from '../../../components/UI';

export default function Footer() {
  return (
    <Container justifyContent="center">
      <Text type="light">Copyright © {new Date().getFullYear()} D-LEARN.</Text>
    </Container>
  );
}
