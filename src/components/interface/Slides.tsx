import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import Image, { StaticImageData } from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PropsSlide {
  nav: boolean;
  dot: boolean;
  qnt: [number, number, number];
  imgs: {
    src: StaticImageData;
    text?: string;
    text_button?: string;
  }[];
  size?: boolean;
  play: boolean;
}

const SlideApp = ({ nav, dot, qnt, imgs, size, play }: PropsSlide) => {
  const [larg, setLarg] = useState(0);

  useEffect(() => {
    const value = document.querySelector('.container')?.getBoundingClientRect();

    if (value) {
      setLarg(value.width);
    }
  }, []);
  const pad = larg > 1200 ? 40 : 20;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop={play}
      spaceBetween={qnt.length > 1 ? pad : 0}
      navigation={nav}
      pagination={dot ? { clickable: true } : false}
      autoplay={play ? { delay: 5000, pauseOnMouseEnter: true } : false}
      breakpoints={{
        0: {
          slidesPerView: qnt[0]
        },
        576: {
          slidesPerView: qnt[1]
        },
        768: {
          slidesPerView: qnt[2]
        }
      }}
    >
      {imgs?.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className={size ? 'relative h-[250px] xl:h-[500px]' : 'h-full'}
            >
              <Image
                layout={size ? 'fill' : 'intrinsic'}
                objectFit={size ? 'cover' : 'initial'}
                objectPosition={size ? 'center center' : 'initial'}
                src={item.src}
              ></Image>
            </div>

            <div
              className={
                item.text || item.text_button
                  ? 'flex items-center absolute top-0 left-0 w-full h-full bg-black/70'
                  : 'hidden'
              }
            >
              <div className="text-white container py-30 sm:py-4 text-center sm:text-left">
                {item.text && (
                  <p className="text-3xl w-full font-bold sm:text-5xl xl:text-7xl sm:w-[60%] xl:w-[33%]">
                    {item.text}
                  </p>
                )}
                {item.text_button && (
                  <button className="bg-white text-sm sm:text-base mt-5 text-black py-2 px-5 uppercase">
                    {item.text_button}
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SlideApp;
