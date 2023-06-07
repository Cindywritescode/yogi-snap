import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { PrimaryFeatures } from '../components/Features';

export default function Home() {
  return (
    <Container>
      <Hero/>
      <PrimaryFeatures/>
    </Container>
  );
}
