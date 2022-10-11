import type { NextPage } from 'next';
import React from 'react';
import SlideApp from '../components/interface/Slides';
import TitleApp from '../components/interface/Title';
import EnvironmentApp from '../components/interface/Environment';
import Link from 'next/link';
import ProductApp from '../components/interface/Product';

// Imagens
import image_1 from '../assets/img/banner.jpg';
import image_2 from '../assets/img/banner1.jpg';

const imagens = [
  {
    src: image_1,
    text: 'Projetos pensados para você.',
    text_button: 'Faça um projeto personalizado'
  },
  {
    src: image_2,
    text: 'Projetos Ixclusivos.',
    text_button: 'Faça o seu'
  }
];

// Logos
import logo_1 from '../assets/img/logo/01.jpg';
import logo_2 from '../assets/img/logo/02.jpg';
import logo_3 from '../assets/img/logo/03.jpg';
import logo_4 from '../assets/img/logo/04.jpg';
import logo_5 from '../assets/img/logo/05.jpg';
import logo_6 from '../assets/img/logo/06.jpg';

const logos = [
  {
    src: logo_1
  },
  {
    src: logo_2
  },
  {
    src: logo_3
  },
  {
    src: logo_4
  },
  {
    src: logo_5
  },
  {
    src: logo_6
  }
];

const Home: NextPage = () => {
  return (
    <>
      <div className="banner-home">
        <SlideApp
          dot={true}
          nav={false}
          qnt={[1, 1, 1]}
          imgs={imagens}
          size={false}
          play={true}
        />
      </div>

      <div className="container pt-14 px swipper-dots">
        <TitleApp text={'Marcas exclusivas'} />
        <div className="py-6">
          <SlideApp
            dot={true}
            nav={false}
            qnt={[3, 4, 6]}
            imgs={logos}
            size={false}
            play={true}
          />
        </div>
      </div>

      <EnvironmentApp />

      <div className="container py-14">
        <TitleApp text={'Lançamentos'} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8 my-8">
          <ProductApp />
          <ProductApp />
          <ProductApp />
          <ProductApp />
          <ProductApp />
          <ProductApp />
          <ProductApp />
          <ProductApp />
        </div>
        <div className="text-center mt-5">
          <Link href="/produtos">
            <a className="py-2 px-8 bg-bg text-gray">Veja todos os produtos</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
