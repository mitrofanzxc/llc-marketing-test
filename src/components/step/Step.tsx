import { FC } from 'react';
import './Step.scss';

export interface IStep {
  src: string;
  step: string;
  header: string;
  description: string;
}

const Step: FC<IStep> = ({ src, step, header, description }) => {
  return (
    <div className={`step-wrapper step-wrapper_${step}`}>
      <div className={`step step_${step}`}>
        {/* <div className={`step-${step}`} /> */}
        <h4 className="step-number">{step}</h4>
        <img src={src} alt="" className="step-icon" />
        <h4 className="step-header color_blue">{header}</h4>
        <h5 className="step-description color_blue">{description}</h5>
      </div>
    </div>
  );
};

export { Step };
