import type { GetStaticProps } from 'next';
import React from 'react';
import SlideApp from '../components/interface/Slides';
import TitleApp from '../components/interface/Title';
import EnvironmentApp from '../components/interface/Environment';
import Link from 'next/link';
import ProductApp from '../components/interface/Product';
import { ExecuteAllQuerys } from '../hooks/querys';

type Props = {
  apiData: any;
};

const Home = ({ apiData }: Props) => {
  return (
    <>
      <div className="banner-home">
        <SlideApp
          dot={true}
          nav={false}
          qnt={[1, 1, 1]}
          imgs={apiData.banners}
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
            imgs={apiData.marcasExclusivas}
            size={false}
            play={true}
          />
        </div>
      </div>

      <EnvironmentApp data={apiData.environments} />

      <div className="container py-14">
        <TitleApp text={'Lançamentos'} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8 my-8">
          {apiData.products.map((produto: any, index: number) => {
            return (
              <ProductApp
                key={`${index}`}
                title={produto.title}
                cod={produto.codigo}
                img={produto.img.url}
                originalWidth={produto.img.width}
                originalHeight={produto.img.height}
                uri={produto.uri}
                slug={produto.slug}
              />
            );
          })}
        </div>
        <div className="text-center mt-5">
          <Link href="/produtos/todos">
            <a className="py-2 px-8 bg-bg text-gray">Veja todos os produtos</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const resultado = await ExecuteAllQuerys();

  return {
    props: {
      apiData: resultado
    },
    revalidate: 30
  };
};
