import { GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';
import SlideApp from '../components/interface/Slides';
import TitleApp from '../components/interface/Title';
import Image from 'next/image';
import Video from '../assets/img/video.jpg';

// Imagens
import image_1 from '../assets/img/empresa-1.jpg';
import image_2 from '../assets/img/empresa-2.jpg';
import image_3 from '../assets/img/empresa-3.jpg';
import { CategoriesOBJ } from '../hooks/querys';

const imagens = [
  {
    url: image_1
  },
  {
    url: image_2
  },
  {
    url: image_3
  }
];

const AboutApp = () => {
  const [paddingLeft, setPaddingLeft] = useState(0);

  useEffect(() => {
    const width = document.querySelector('.container')?.getBoundingClientRect();

    if (width) {
      setPaddingLeft(width.left + 15);
    }
  }, []);

  return (
    <>
      <div className="bg-bg relative min-h-[480px]">
        <div className="lg:flex lg:items-center">
          <div
            className="lg:pl-4 w-full lg:w-1/2 py-20 lg:pr-12 text-gray"
            style={{ paddingLeft: paddingLeft }}
          >
            <TitleApp text={'A Samlux'} />
            <p className="leading-10">
              Surgiu com o propósito de inovar e proporcionar ao mercado a
              melhor experiência quando se diz respeito a decoração e
              iluminação.
            </p>
            <p className="my-6 leading-10">
              Encontre em nossa loja uma variedade de itens para a decoração do
              seu espaço, como: arandelas, plafons, spots, abajures, lâmpadas,
              ventiladores, lustres e pendentes.
            </p>
            <p className="leading-10">
              Com uma equipe constituída por profissionais qualificados e em
              constante evolução, nossa proposta é trazer ao segmento peças de
              qualidade premium com um design único, por um excelente custo
              benefício.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <SlideApp
              dot={true}
              nav={false}
              qnt={[1, 1, 1]}
              imgs={imagens}
              play={true}
            />
          </div>
        </div>
      </div>
      <div className="container sm:max-w-screen-lg py-16">
        <Image layout="responsive" src={Video} alt="Vídeo Samlux" />
      </div>
    </>
  );
};

export default AboutApp;

export const getStaticProps: GetStaticProps = async () => {
  const navigation = await (await CategoriesOBJ.queryExecute()).navigation;

  return {
    props: {
      apiData: {
        navigation
      }
    },
    revalidate: 30
  };
};
