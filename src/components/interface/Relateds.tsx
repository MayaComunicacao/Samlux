import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import ProductApp from './Product';
import { useApiData } from '../../components/context/apiDataContext';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const RelatedsApp = () => {
  const { apiData } = useApiData();

  const produtos = apiData.produtos.nodes.map((obj: any) => {
    return {
      produto: {
        title: obj.title,
        ...obj.produto,
        featuredImage: {
          url: obj.featuredImage?.node.sourceUrl,
          sizes: obj.featuredImage?.node.mediaDetails
        },
        url: obj.uri,
        slug: obj.slug
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
              img={produto.featuredImage.url}
              originalWidth={produto.featuredImage.sizes.width}
              originalHeight={produto.featuredImage.sizes.height}
              url={produto.url}
              slug={produto.slug}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default RelatedsApp;
