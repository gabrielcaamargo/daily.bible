import { useTranslate } from '../../hooks/useTranslate';

import PlanBanner from '../../components/PlanBanner';
import ReadNow from '../../components/ReadNow';
import VerseOfTheDay from '../../components/VerseOfTheDay';
import { Container } from './styles';

export default function Home() {

  return (
    <Container>
      {useTranslate(
        <h2>Bringing you <span>closer</span> to God. Step by step. Day by day. </h2>,
        <h2>Levando você <span>mais próxim</span> de Deus. Passo por passo. Dia por dia. </h2>
      )}
      <PlanBanner />
      <VerseOfTheDay />
      <ReadNow />
    </Container>
  );
}
