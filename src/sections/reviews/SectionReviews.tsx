import { FC, useRef, useState } from 'react';
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
          slidesPerView={3}
          spaceBetween={100}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
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
        {/* <div className="reviews-slider__wrapper">
          <div className="reviews-slider__button left" />
          <div className="review-slider">
            <div className="review-slider__item">
              <img src={review1} alt="review1" className="review-slider__item-img" />
              <div className="review-slider__item-description color_blue">
                <p>Спасибо компании за установку канализаций. Сделали быстро и на совесть!</p>
                <p>Еще раз огромное спасибо и хороших клиентов!</p>
              </div>
            </div>
            <div className="review-slider__item">
              <img src={review2} alt="review2" className="review-slider__item-img" />
              <div className="review-slider__item-description color_blue">
                <p>Обратился за помощью в установке канализации в новый дом за Минском.</p>
                <p>Доволен работой и профессионализмом компании!</p>
              </div>
            </div>
          </div>
          <div className="reviews-slider__button right" />
        </div> */}
      </div>
    </section>
  );
};

export { SectionReviews };
