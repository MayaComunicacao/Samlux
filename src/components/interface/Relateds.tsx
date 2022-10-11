import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import ProductApp from './Product';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const RelatedsApp = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={15}
      navigation={false}
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
          slidesPerView: 1
        },
        576: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
        }
      }}
    >
      <SwiperSlide>
        <ProductApp />
      </SwiperSlide>
      <SwiperSlide>
        <ProductApp />
      </SwiperSlide>
      <SwiperSlide>
        <ProductApp />
      </SwiperSlide>
      <SwiperSlide>
        <ProductApp />
      </SwiperSlide>
    </Swiper>
  );
};

export default RelatedsApp;
