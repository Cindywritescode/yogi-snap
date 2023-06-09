import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { PrimaryFeatures } from '../components/Features';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Container className="z-0">
        <Hero/>
        <PrimaryFeatures/>
      </Container>
      <Footer/>
    </div>
  );
}
