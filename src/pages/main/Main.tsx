import { FC } from 'react';
import { BenefitsHeader } from '../../components/benefitsHeader/BenefitsHeader';
import { PrimaryButton } from '../../components/buttons';
import engineer from '../../images/engineer.png';
import mounting from '../../images/mounting.png';
import payment from '../../images/payment.png';
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
    </>
  );
};

export { Main };
