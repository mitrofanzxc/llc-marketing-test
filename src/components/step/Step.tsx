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
    <div className="step">
      <h4>{step}</h4>
      <img src={src} alt="" className="step-icon" />
      <h3 className="color_blue">{header}</h3>
      <h4 className="color_blue">{description}</h4>
    </div>
  );
};

export { Step };
