import { FC } from 'react';
import { BenefitsMain } from '../../components/benefitsMain/BenefitsMain';

import ground from '../../images/ground.png';
import water from '../../images/water.png';
import leaf from '../../images/leaf.png';
import earth from '../../images/earth.png';
import ecoFriendly from '../../images/eco-friendly.png';
import worker from '../../images/worker.png';
import quality from '../../images/quality.png';
import bestPrice from '../../images/best-price.png';
import './Benefits.scss';

const Benefits: FC = () => {
  return (
    <section className="septics wrapper">
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
  );
};

export { Benefits };
