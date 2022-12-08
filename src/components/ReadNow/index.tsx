import { Container, SelectBibleInfo, Text } from './styles';

export default function ReadNow() {
  return (
    <Container>
      <h3>Read now</h3>

      <SelectBibleInfo>
        <button>Genesis 1</button>
        <button>NIV</button>
        <button>Aa</button>
      </SelectBibleInfo>

      <Text>
        <p><strong>1</strong> Lorem ipsum dolor sit amet.</p>
        <p><strong>2</strong> Lorem ipsum dolor sit amet.</p>
        <p><strong>3</strong> Lorem ipsum dolor sit amet.</p>
        <p><strong>4</strong> Lorem ipsum dolor sit amet.</p>
        <p><strong>5</strong> Lorem ipsum dolor sit amet.</p>
        <p><strong>6</strong> Lorem ipsum dolor sit amet.</p>
        <p><strong>7</strong> Lorem ipsum dolor sit amet.</p>
      </Text>
    </Container>
  );
}
