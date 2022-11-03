import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import ProductApp from './Product';
import { useApiData } from '../../components/context/apiDataContext';
import { ProductOBJ } from '../../hooks/querys';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const RelatedsApp = () => {
  const { apiData } = useApiData();

  const produtos = apiData[ProductOBJ.postType].nodes.map((obj: any) => {
    return {
      produto: {
        title: obj.title,
        ...obj.produto,
        homeImg: {
          url: obj.featuredImage.node.sourceUrl,
          sizes: obj.featuredImage.node.mediaDetails
        },
        url: obj.uri
      }
    };
  });

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
      {produtos.map((item: any, index: number) => {
        const { produto } = item;

        return (
          <SwiperSlide key={`${index}`}>
            <ProductApp
              key={`${index}`}
              title={produto.title}
              cod={produto.prodCodigo}
              img={produto.homeImg.url}
              originalWidth={produto.homeImg.sizes.width}
              originalHeight={produto.homeImg.sizes.height}
              url={produto.url}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default RelatedsApp;
