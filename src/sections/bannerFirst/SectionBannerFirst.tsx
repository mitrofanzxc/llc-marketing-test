import { FC } from 'react';
import './SectionBannerFirst.scss';

const SectionBannerFirst: FC = () => {
  return (
    <section className="section-banner_bg section-banner_first">
      <div className="wrapper">
        <div className="banner-wrapper">
          <h2 className="section-banner__description">
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
