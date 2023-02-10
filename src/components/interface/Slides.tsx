import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ConditionWrapper from '../conditionWrapper/conditionWrapper';

interface PropsSlide {
  nav?: boolean;
  dot?: boolean;
  qnt: [number, number, number];
  imgs:
    | {
        url: StaticImageData | string;
        bannerText?: string;
        bannerTxButton?: string;
        link?: string;
        slug?: string;
        id?: string;
      }[]
    | undefined;
  size?: boolean;
  play?: boolean;
}

const SlideApp = ({ nav, dot, qnt, imgs, size, play }: PropsSlide) => {
  const [larg, setLarg] = useState(0);
  const [load, setLoad] = useState(false);
  const [naturalSizes, setNaturalSizes] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    setLoad(true);
  }, []);

  useEffect(() => {
    const value = document.querySelector('.container')?.getBoundingClientRect();

    if (value) {
      setLarg(value.width);
    }
  }, []);
  const pad = larg > 1200 ? 40 : 20;

  if (!load) {
    return null;
  }

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
        const anchorLink = item.slug
          ? `/produtos/marcas/?s=${item.slug}`
          : null;

        return (
          <SwiperSlide key={index}>
            <div
              className={
                size
                  ? 'relative h-[250] xl:h-[500px]'
                  : 'relative w-full h-full max-h-[768px]'
              }
              style={
                size
                  ? undefined
                  : {
                      width: `${naturalSizes.width}px`,
                      height: `${naturalSizes.height}px`
                    }
              }
            >
              <ConditionWrapper
                condition={!!anchorLink}
                wrapper={(children: JSX.Element) => (
                  <Link href={anchorLink ? anchorLink : ''} passHref={true}>
                    <a>{children}</a>
                  </Link>
                )}
              >
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={item.url}
                  priority={true}
                  onLoadingComplete={({
                    naturalWidth: width,
                    naturalHeight: height
                  }) => setNaturalSizes({ width, height })}
                ></Image>
              </ConditionWrapper>
            </div>

            <div
              className={
                item.bannerText || item.bannerTxButton
                  ? 'flex items-center absolute top-0 left-0 w-full h-full bg-black/70'
                  : 'hidden'
              }
            >
              <div className="content-tx text-white container py-30 sm:py-4">
                {item.bannerText && (
                  <p className="text-3xl w-full font-bold sm:text-5xl xl:text-7xl sm:w-[60%] xl:w-[33%]">
                    {item.bannerText}
                  </p>
                )}
                {item.bannerTxButton && item.link && (
                  <Link href={item.link} passHref={true}>
                    <a className="block w-[fit-content] bg-white text-sm sm:text-base mt-5 text-black py-2 px-5 uppercase">
                      {item.bannerTxButton}
                    </a>
                  </Link>
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
