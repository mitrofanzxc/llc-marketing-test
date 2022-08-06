import { FC } from 'react';
import './BenefitsHeader.scss';

export interface IBenefitsHeader {
  src: string;
  description: string;
  logo: string;
}

const BenefitsHeader: FC<IBenefitsHeader> = ({ src, description, logo }) => {
  return (
    <div className="benefits-header_first">
      <div className="benefits-header_second">
        <img src={src} alt={description} className={`benefits-header__icon ${logo}`} />
        <p className="benefits-header__description">{description}</p>
      </div>
    </div>
  );
};

export { BenefitsHeader };
