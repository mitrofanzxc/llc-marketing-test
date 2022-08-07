import { FC } from 'react';
import { Step } from '../../components/step/Step';
import stepApplication from '../../images/icons/step-application.png';
import stepConsulting from '../../images/icons/step-consulting.png';
import stepEngineer from '../../images/icons/step-engineer.png';
import stepContract from '../../images/icons/step-contract.png';
import stepInstallation from '../../images/icons/step-installation.png';
import stepSaveMoney from '../../images/icons/step-save-money.png';
import './SectionSteps.scss';

const SectionSteps: FC = () => {
  return (
    <section className="stages" id="stages">
      <div className="wrapper">
        <h2 className="text-align_center">
          <strong>5 шагов</strong> как будет выполняться ваш заказ
        </h2>
        <div className="steps-wrapper_first">
          <Step
            src={stepApplication}
            step="01"
            header="Заявка"
            description="Оставьте заявку или наберите по номеру +375 (25)903-32-06"
          />
          <Step
            src={stepConsulting}
            step="02"
            header="Консультация"
            description="С вами свяжется консультант и уточнит детали"
          />
          <Step
            src={stepEngineer}
            step="03"
            header="Выезд инженера"
            description="К Вам приедет инженер и определит итоговую стоимость работы с учетом всех особенностей Вашего участка"
          />
          <Step
            src={stepContract}
            step="04"
            header="Договор"
            description="Мы заключим договор. В договоре будут установлены сроки и гарантии"
          />
        </div>
        <div className="steps-wrapper_second">
          <Step
            src={stepInstallation}
            step="06"
            header="Монтаж канализации"
            description="Бригада наших мастеров со специальным оборудованием производит монтаж и пусконаладку"
          />
          <Step
            src={stepSaveMoney}
            step="05"
            header="Оплата по факту"
            description="Вы оплачиваете наши работы по договоры и пользуетесь канализацией "
          />
        </div>
      </div>
    </section>
  );
};

export { SectionSteps };
