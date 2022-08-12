import { FC, useEffect } from 'react';
import './ProgressBar.scss';

export interface IProgressBar {
  header: string;
  description: string;
  fw: string;
  id: number;
  progress: number;
}

const ProgressBar: FC<IProgressBar> = ({ header, description, fw, id, progress }) => {
  const progressEndValue = progress;

  useEffect(() => {
    const progressBar = document.querySelector(`.progress-ring__circle${id}`) as HTMLDivElement;
    const dot = document.querySelector(`.dot${id}`) as HTMLDivElement;
    let progressValue = 0;
    // const speed = 50;
    // const radius = 132;

    const tick = () => {
      progressValue++;

      progressBar.style.background = `conic-gradient(rgba(96, 136, 25, 1) ${
        progressValue * 3.6
      }deg, rgba(96, 136, 25, 0.15) ${progressValue * 3.6}deg)`;

      // dot.style.transform = `translate(${Math.cos(progressValue * 3.6) * radius}px, ${
      //   Math.sin(progressValue * 3.6) * radius
      // }px)`;

      if (progressValue < progressEndValue) {
        requestAnimationFrame(tick);
      }
    };

    tick();

    setTimeout(() => {
      dot.classList.add('opacity_one');
    }, 1000);
  }, []);

  return (
    <div className={`circle progress-ring__circle${id}`}>
      <div className={`dot dot${id} opacity_zero`} />
      <h2 className="color_orange">{header}</h2>
      <p className={`progress-bar__description ${fw}`}>{description}</p>
    </div>
  );
};

export { ProgressBar };
