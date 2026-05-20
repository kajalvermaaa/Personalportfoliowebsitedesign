import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Work } from '../components/Work';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}