import { FC } from 'react';
import { SectionHero, SectionBenefits, SectionForm, SectionCatalog, Footer } from './sections';

const App: FC = () => {
  return (
    <>
      <SectionHero />
      <main>
        <SectionBenefits />
        <SectionForm />
        <SectionCatalog />
      </main>
      <Footer />
    </>
  );
};

export { App };
