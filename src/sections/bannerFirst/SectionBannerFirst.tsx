import { FC } from 'react';
import './SectionBannerFirst.scss';

const SectionBannerFirst: FC = () => {
  return (
    <section className="section-hero__bg-first">
      <div className="wrapper">
        <div className="banner-wrapper">
          <h2>
            <strong>Компания монтаж колец</strong> занимается всеми видами земляных работ, бурением
            скважин и монтажом водоснабжения{' '}
          </h2>
          <button className="submit">Заказать комплексную работу</button>
        </div>
      </div>
    </section>
  );
};

export { SectionBannerFirst };
