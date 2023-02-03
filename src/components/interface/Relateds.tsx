import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import ProductApp from './Product';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = {
  products: any[];
};

const RelatedsApp = ({ products }: Props) => {
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
      {products?.map((produto: any, index: number) => {
        return (
          <SwiperSlide key={`${index}`}>
            <ProductApp
              title={produto.title}
              img={produto.img.url}
              uri={produto.uri}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default RelatedsApp;
