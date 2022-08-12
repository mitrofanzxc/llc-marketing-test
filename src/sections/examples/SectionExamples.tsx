import { FC } from 'react';
import workExample1 from '../../images/work-example-1.jpg';
import workExample2 from '../../images/work-example-2.jpg';
import workExample3 from '../../images/work-example-3.jpg';
import workExample4 from '../../images/work-example-4.jpg';
import './SectionExamples.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SectionExamples: FC = () => {
  return (
    <section className="examples">
      <div className="wrapper">
        <h2 className="text-align_center">
          <strong>Примеры</strong> наших работ
        </h2>
        <div className="slider">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            mousewheel={true}
            keyboard={true}
            slidesPerView={4}
            spaceBetween={40}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            breakpoints={{
              1: {
                slidesPerView: 1,
              },
              361: {
                slidesPerView: 2,
              },
              769: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide className="slide">
              <img src={workExample1} alt="workExample1" />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <img src={workExample2} alt="workExample2" />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <img src={workExample3} alt="workExample3" />
            </SwiperSlide>
            <SwiperSlide className="slide">
              <img src={workExample4} alt="workExample4" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export { SectionExamples };
