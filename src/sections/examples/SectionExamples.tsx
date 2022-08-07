import { FC } from 'react';
import workExample1 from '../../images/work-example-1.jpg';
import workExample2 from '../../images/work-example-2.jpg';
import workExample3 from '../../images/work-example-3.jpg';
import workExample4 from '../../images/work-example-4.jpg';
import './SectionExamples.scss';

const SectionExamples: FC = () => {
  return (
    <section className="examples">
      <div className="wrapper">
        <h2 className="text-align_center">
          <strong>Примеры</strong> наших работ
        </h2>
        <div className="slider">
          <div className="slide">
            <img src={workExample1} alt="workExample1" />
          </div>
          <div className="slide">
            <img src={workExample2} alt="workExample2" />
          </div>
          <div className="slide">
            <img src={workExample3} alt="workExample3" />
          </div>
          <div className="slide">
            <img src={workExample4} alt="workExample4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { SectionExamples };
