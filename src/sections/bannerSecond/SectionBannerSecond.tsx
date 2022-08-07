import { FC } from 'react';
import './SectionBannerSecond.scss';

const SectionBannerSecond: FC = () => {
  return (
    <section className="section-hero_bg-first">
      <div className="wrapper">
        <div className="banner-wrapper">
          <h2>
            Хочешь так-же?
            <br />
            Жми на кнопку и заказывай
          </h2>
          <button className="submit">Заказать консультацию</button>
        </div>
      </div>
    </section>
  );
};

export { SectionBannerSecond };
