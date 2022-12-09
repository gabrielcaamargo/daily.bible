import { useTranslate } from '../../hooks/useTranslate';
import { Container } from './styles';

export default function VerseOfTheDay() {
  return (
    <Container>
      {useTranslate(
        <p className='title'><strong>Verse of the day</strong></p>,
        <p className='title'><strong>Versículo do dia</strong></p>
      )}

      {useTranslate(
        <p className='description'><strong>Gen 1:1 -</strong> In the beginning God created the heavens and the earth. </p>,
        <p className='description'><strong>Gen 1:1 -</strong> No princípio Deus criou os céus e a terra. </p>
      )}
    </Container>
  );
}
