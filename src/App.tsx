import { FC } from 'react';
import { SectionHero, SectionBenefits, SectionForm, Footer } from './sections';

const App: FC = () => {
  return (
    <>
      <SectionHero />
      <main>
        <SectionBenefits />
        <SectionForm />
      </main>
      <Footer />
    </>
  );
};

export { App };
