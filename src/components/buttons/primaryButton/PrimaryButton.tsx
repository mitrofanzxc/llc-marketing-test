import { FC } from 'react';
import './PrimaryButton.scss';

export interface IPrimaryButton {
  description: string;
}

const PrimaryButton: FC<IPrimaryButton> = ({ description }) => {
  return (
    <>
      <button>{description}</button>
    </>
  );
};

export { PrimaryButton };
