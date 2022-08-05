import { FC } from 'react';
import './BenefitsHeader.scss';

export interface IBenefitsHeader {
  src: string;
  description: string;
}

const BenefitsHeader: FC<IBenefitsHeader> = ({ src, description }) => {
  return (
    <div className="benefits-header_first">
      <div className="benefits-header_second">
        <img src={src} alt={description} className="benefits-header__icon" />
        <h5>{description}</h5>
      </div>
    </div>
  );
};

export { BenefitsHeader };
