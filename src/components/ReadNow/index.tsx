import { Container, SelectBibleInfo } from './styles';

export default function ReadNow() {
  return (
    <Container>
      <h3>Read now</h3>

      <SelectBibleInfo>
        <button>Genesis 1</button>
        <button>NIV</button>
        <button>Aa</button>
      </SelectBibleInfo>
    </Container>
  );
}
