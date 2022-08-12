import { FC } from 'react';
import {
  SectionHero,
  SectionBenefits,
  SectionForm,
  SectionCatalog,
  SectionBannerFirst,
  SectionSteps,
  SectionExamples,
  SectionBannerSecond,
  SectionReviews,
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
        <SectionSteps />
        <SectionExamples />
        <SectionBannerSecond />
        <SectionReviews />
      </main>
      <Footer />
    </>
  );
};

export { App };
