import { FC } from 'react';
import { BenefitsMain } from '../../components/benefitsMain/BenefitsMain';
import { ProgressBar } from '../../components/progressBar/ProgressBar';

import ground from '../../images/icons/ground.png';
import water from '../../images/icons/water.png';
import leaf from '../../images/icons/leaf.png';
import earth from '../../images/icons/earth.png';
import ecoFriendly from '../../images/icons/eco-friendly.png';
import worker from '../../images/icons/worker.png';
import quality from '../../images/icons/quality.png';
import bestPrice from '../../images/icons/best-price.png';
import './SectionBenefits.scss';

const SectionBenefits: FC = () => {
  return (
    <section className="benefits">
      <section className="progress-bars wrapper">
        <ProgressBar
          header="6 лет"
          description="Устанавливаем канализацию"
          fw="fw_regular"
          id={1}
          progress={28}
        />
        <ProgressBar
          header="1300+"
          description="Объектов реализовано за все время"
          fw="fw_regular"
          id={2}
          progress={46}
        />
        <ProgressBar
          header="1 год"
          description="Гарантии на канализацию"
          fw="fw_regular"
          id={3}
          progress={67}
        />
        <ProgressBar header="0 BYN" description="Предоплата" fw="fw_medium" id={4} progress={89} />
      </section>
      <section className="septics wrapper">
        <h2 className="text-align_center">
          <strong>Почему септики</strong> из бетонных колец лучшее решение
        </h2>
        <div className="benefits-main__wrapper">
          <BenefitsMain src={ground} logo="ground" description="Монтаж в любом типе почвы" />
          <BenefitsMain src={water} logo="water" description="Не всплывают" />
          <BenefitsMain src={leaf} logo="leaf" description="Эффективная очистка" />
          <BenefitsMain src={earth} logo="earth" description="Соответствие санитарным нормам" />
          <BenefitsMain
            src={ecoFriendly}
            logo="ecoFriendly"
            description="Экологичность, отсутствие неприятного запаха"
          />
          <BenefitsMain
            src={worker}
            logo="worker"
            description="Бесперебойная работа без доп. обслуживания"
          />
          <BenefitsMain src={quality} logo="quality" description="Долговечность" />
          <BenefitsMain src={bestPrice} logo="bestPrice" description="Небольшая цена" />
        </div>
      </section>
    </section>
  );
};

export { SectionBenefits };
