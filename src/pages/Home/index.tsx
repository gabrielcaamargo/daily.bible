import PlanBanner from '../../components/PlanBanner';
import ReadNow from '../../components/ReadNow';
import VerseOfTheDay from '../../components/VerseOfTheDay';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <h2>Bringing you <span>closer</span> to God. Step by step. Day by day. </h2>
      <PlanBanner />
      <VerseOfTheDay />
      <ReadNow />
    </Container>
  );
}
