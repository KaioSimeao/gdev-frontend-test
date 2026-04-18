import { TopNavBar } from '../organisms/TopNavBar';

import { Footer } from '../organisms/Footer';
import { InfoCardsSection } from '../organisms/InfoCardsSection';
import { HeroSection } from '../organisms/HeroSection';

export const HomeTemplate = () => {
  return (
    <div>
      <TopNavBar />
      <main className="pt-16">
        <HeroSection/>
        <InfoCardsSection/>
      </main>

      <Footer />
    </div>
  );
};