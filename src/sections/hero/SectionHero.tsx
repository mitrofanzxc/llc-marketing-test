import { FC } from 'react';
import { Header } from '../header/Header';
import { BenefitsHeader } from '../../components/benefitsHeader/BenefitsHeader';
import { PrimaryButton } from '../../components/buttons';

import engineer from '../../images/icons/engineer.png';
import mounting from '../../images/icons/mounting.png';
import payment from '../../images/icons/payment.png';
import sewerage from '../../images/sewerage.png';
import './SectionHero.scss';

const SectionHero: FC = () => {
  return (
    <section className="section-hero__bg-first">
      <Header />
      <div className="wrapper-hero section-hero__wrapper">
        <h1>
          Установка канализации
          <br />
          из бетонных колец в Минске и области
        </h1>
        <div className="benefits-header__wrapper">
          <BenefitsHeader src={engineer} logo="engineer" description="Выезд инженера бесплатно" />
          <BenefitsHeader
            src={mounting}
            logo="mounting"
            description="Все монтажные работы за 1 день"
          />
          <BenefitsHeader src={payment} logo="payment" description="Оплата по факту" />
        </div>
        <PrimaryButton description="Заказать консультацию инженера" />
        <img src={sewerage} alt="sewerage" className="sewerage" />
      </div>
    </section>
  );
};

export { SectionHero };
