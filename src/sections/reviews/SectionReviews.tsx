import { FC } from 'react';
import './SectionReviews.scss';

const SectionReviews: FC = () => {
  return (
    <section className="reviews" id="reviews">
      <div className="wrapper">
        <h2 className="text-align_center">
          Что <strong>о нас говорят</strong> наши клиенты
        </h2>
      </div>
    </section>
  );
};

export { SectionReviews };
