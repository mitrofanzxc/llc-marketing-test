import { FC } from 'react';
import { SectionHero, SectionBenefits, Footer } from './sections';

const App: FC = () => {
  return (
    <>
      <SectionHero />
      <main>
        <SectionBenefits />
      </main>
      <Footer />
    </>
  );
};

export { App };
