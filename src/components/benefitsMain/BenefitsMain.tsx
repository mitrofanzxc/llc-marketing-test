import { FC } from 'react';
import './BenefitsMain.scss';

export interface IBenefitsMain {
  src: string;
  logo: string;
  description: string;
}

const BenefitsMain: FC<IBenefitsMain> = ({ src, logo, description }) => {
  return (
    <div className="benefits-main">
      <img src={src} alt={description} className={logo} />
      <h4>{description}</h4>
    </div>
  );
};

export { BenefitsMain };
