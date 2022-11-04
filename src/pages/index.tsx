import type { GetStaticProps, GetServerSideProps, NextPage } from 'next';
import React from 'react';
import SlideApp from '../components/interface/Slides';
import TitleApp from '../components/interface/Title';
import EnvironmentApp from '../components/interface/Environment';
import Link from 'next/link';
import ProductApp from '../components/interface/Product';
import ApiDataProvider from '../components/context/apiDataContext';
import { getApolloClient } from '../lib/apollo';
import {
  BannersOBJ,
  BrandsOBJ,
  ProductsOBJ,
  EnvironmentsOBJ
} from '../hooks/querys';

type Props = {
  apiData: any;
};

const Home: NextPage<Props> = ({ apiData }: Props) => {
  const banners = apiData[BannersOBJ.postType].nodes.map((obj: any) => {
    return {
      src: obj.bannerHome.bannerImgDesktop.mediaItemUrl,
      text: obj.bannerHome.bannerText,
      text_button: obj.bannerHome.bannerTxBotao
    };
  });

  const logos = apiData[BrandsOBJ.postType].nodes.map((obj: any) => {
    return {
      src: obj[BrandsOBJ.postType].mexLogotipo.mediaItemUrl
    };
  });

  const produtos = apiData[ProductsOBJ.postType].nodes.map((obj: any) => {
    return {
      produto: {
        title: obj.title,
        ...obj.produto,
        featuredImage: {
          url: obj.featuredImage?.node.sourceUrl,
          sizes: obj.featuredImage?.node.mediaDetails
        },
        url: obj.uri
      }
    };
  });

  const environment = apiData[EnvironmentsOBJ.postType].nodes.map(
    (obj: any) => {
      return {
        src: obj.ambientes.imagemDoAmbiente.mediaItemUrl,
        category: obj.categories
      };
    }
  );

  return (
    <ApiDataProvider initialProps={apiData}>
      <div className="banner-home">
        <SlideApp
          dot={true}
          nav={false}
          qnt={[1, 1, 1]}
          imgs={banners}
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

      <EnvironmentApp data={environment} />

      <div className="container py-14">
        <TitleApp text={'Lançamentos'} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8 my-8">
          {produtos.map((item: any, index: number) => {
            const { produto } = item;

            return (
              <ProductApp
                key={`${index}`}
                title={produto.title}
                cod={produto.prodCodigo}
                img={produto?.featuredImage.url}
                originalWidth={produto.featuredImage.sizes.width}
                originalHeight={produto.featuredImage.sizes.height}
                url={produto.url}
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
    </ApiDataProvider>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = getApolloClient();

  const [{ marcasExclusivas }, { banners }, { produtos }, { ambientes }] =
    await Promise.all([
      await (await apolloClient.query({ query: BrandsOBJ.query() })).data,
      await (await apolloClient.query({ query: BannersOBJ.query() })).data,
      await (await apolloClient.query({ query: ProductsOBJ.query() })).data,
      await (await apolloClient.query({ query: EnvironmentsOBJ.query() })).data
    ]);

  return {
    props: {
      apiData: {
        marcasExclusivas,
        produtos,
        banners,
        ambientes
      }
    }
  };
};
