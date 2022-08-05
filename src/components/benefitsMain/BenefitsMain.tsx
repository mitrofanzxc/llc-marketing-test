import { FC } from 'react';
import './BenefitsMain.scss';

export interface IBenefitsMain {
  src: string;
  description: string;
}

const BenefitsMain: FC<IBenefitsMain> = ({ src, description }) => {
  return (
    <div className="benefits-main">
      <img src={src} alt={description} className="benefits-main__icon" />
      <h4>{description}</h4>
    </div>
  );
};

export { BenefitsMain };
