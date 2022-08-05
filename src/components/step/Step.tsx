import { FC } from 'react';
import './Step.scss';
import application from '../../images/icons/application.png';

const Step: FC = () => {
  return (
    <div className="step">
      <h4>01</h4>
      <img src={application} alt="" className="step-icon" />
      <h3 className="color_blue">Заявка</h3>
      <h4 className="color_blue">
        Оставьте заявку или наберите по номеру
        <br />
        +375 (25)903–32–06
      </h4>
    </div>
  );
};

export { Step };
