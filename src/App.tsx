import { FC } from 'react';
import {
  SectionHero,
  SectionBenefits,
  SectionForm,
  SectionCatalog,
  SectionBannerFirst,
  SectionBannerSecond,
  Footer,
} from './sections';

const App: FC = () => {
  return (
    <>
      <SectionHero />
      <main>
        <SectionBenefits />
        <SectionForm />
        <SectionCatalog />
        <SectionBannerFirst />
        <SectionBannerSecond />
      </main>
      <Footer />
    </>
  );
};

export { App };
