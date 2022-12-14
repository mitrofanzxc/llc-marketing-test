import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import review1 from '../../images/review-1.png';
import review2 from '../../images/review-2.png';
import './SectionReviews.scss';

const SectionReviews: FC = () => {
  return (
    <section className="reviews" id="reviews">
      <div className="wrapper">
        <h2 className="text-align_center">
          Что <strong>о нас говорят</strong> наши клиенты
        </h2>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          keyboard={true}
          slidesPerView={2}
          spaceBetween={107}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          breakpoints={{
            993: {
              slidesPerView: 2,
            },
            1: {
              slidesPerView: 1,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="review-slider__item">
            <img src={review1} alt="review1" className="review-slider__item-img" />
            <div className="review-slider__item-description color_blue">
              <p>Спасибо компании за установку канализаций. Сделали быстро и на совесть!</p>
              <p>Еще раз огромное спасибо и хороших клиентов!</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="review-slider__item">
            <img src={review2} alt="review2" className="review-slider__item-img" />
            <div className="review-slider__item-description color_blue">
              <p>Обратился за помощью в установке канализации в новый дом за Минском.</p>
              <p>Доволен работой и профессионализмом компании!</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="review-slider__item">
            <img src={review1} alt="review1" className="review-slider__item-img" />
            <div className="review-slider__item-description color_blue">
              <p>Спасибо компании за установку канализаций. Сделали быстро и на совесть!</p>
              <p>Еще раз огромное спасибо и хороших клиентов!</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="review-slider__item">
            <img src={review2} alt="review2" className="review-slider__item-img" />
            <div className="review-slider__item-description color_blue">
              <p>Обратился за помощью в установке канализации в новый дом за Минском.</p>
              <p>Доволен работой и профессионализмом компании!</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export { SectionReviews };
