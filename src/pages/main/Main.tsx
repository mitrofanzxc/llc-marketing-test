import { FC } from 'react';
import { BenefitsHeader } from '../../components/benefitsHeader/BenefitsHeader';
import { PrimaryButton } from '../../components/buttons';
import engineer from '../../images/engineer.png';
import mounting from '../../images/mounting.png';
import payment from '../../images/payment.png';
import { BenefitsMain } from '../../components/benefitsMain/BenefitsMain';
import ground from '../../images/ground.png';
import water from '../../images/water.png';
import leaf from '../../images/leaf.png';
import earth from '../../images/earth.png';
import ecoFriendly from '../../images/eco-friendly.png';
import worker from '../../images/worker.png';
import quality from '../../images/quality.png';
import bestPrice from '../../images/best-price.png';
import { Step } from '../../components/step/Step';

import './Main.scss';

const Main: FC = () => {
  return (
    <>
      <div>
        <h1>Установка канализации из бетонных колец в Минске и области</h1>
        <div className="benefits-header__wrapper">
          <BenefitsHeader src={engineer} description="Выезд инженера бесплатно" />
          <BenefitsHeader src={mounting} description="Все монтажные работы за один день" />
          <BenefitsHeader src={payment} description="Оплата по факту" />
        </div>
        <PrimaryButton description="Заказать консультацию инженера" />
      </div>
      <section>
        <h2 className="text-align_center">
          <strong>Почему септики</strong> из бетонных колец лучшее решение
        </h2>
        <div className="benefits-main__wrapper">
          <BenefitsMain src={ground} description="Монтаж в любом типе почвы" />
          <BenefitsMain src={water} description="Не всплывают" />
          <BenefitsMain src={leaf} description="Эффективная очистка" />
          <BenefitsMain src={earth} description="Соответствие санитарным нормам" />
          <BenefitsMain
            src={ecoFriendly}
            description="Экологичность, отсутствие неприятного запаха"
          />
          <BenefitsMain src={worker} description="Бесперебойная работа без доп. обслуживания" />
          <BenefitsMain src={quality} description="Долговечность" />
          <BenefitsMain src={bestPrice} description="Небольшая цена" />
        </div>
      </section>
      <Step />
    </>
  );
};

export { Main };
