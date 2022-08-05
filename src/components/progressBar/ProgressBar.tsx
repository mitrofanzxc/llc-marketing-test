import { FC } from 'react';
import './ProgressBar.scss';

export interface IProgressBar {
  header: string;
  description: string;
}

const ProgressBar: FC<IProgressBar> = ({ header, description }) => {
  return (
    <div>
      <h2>{header}</h2>
      <p>{description}</p>
    </div>
  );
};

export { ProgressBar };
