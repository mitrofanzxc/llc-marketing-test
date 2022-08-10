import { FC } from 'react';
import './SectionBannerSecond.scss';

const SectionBannerSecond: FC = () => {
  return (
    <section className="section-banner_bg section-banner_second">
      <div className="wrapper">
        <div className="banner-wrapper">
          <h2 className="section-banner__description">
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
