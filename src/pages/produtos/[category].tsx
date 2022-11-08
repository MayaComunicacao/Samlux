import { NextPage, GetStaticProps, GetServerSideProps } from 'next';
import React from 'react';
import ApiDataProvider from '../../components/context/apiDataContext';
import BreadcrumbApp from '../../components/interface/Breadcrumb';
import FilterApp from '../../components/interface/Filter';
import ProductApp from '../../components/interface/Product';
import { ProductsOBJ } from '../../hooks/querys';
import { getApolloClient } from '../../lib/apollo';

type Props = {
  apiData: any;
};

const Products: NextPage<Props> = ({ apiData }: Props) => {
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

  return (
    <ApiDataProvider initialProps={apiData}>
      <div className="container">
        <BreadcrumbApp path={'Teto'} />
        <div className="pt-8 pb-14 block lg:flex">
          <div className="w-full lg:w-[280px] lg:mt-14">
            <FilterApp />
          </div>
          <div className="w-full lg:w-[calc(100%_-_280px)]">
            <h1 className="text-3xl text-gray mb-5">Todos os produtos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 2xl:grid-cols-3 gap-4 lg:gap-6">
              {produtos.map((item: any, index: number) => {
                const { produto } = item;

                return (
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </ApiDataProvider>
  );
};

export default Products;

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = getApolloClient();

  const [{ produtos }] = await Promise.all([
    await (await apolloClient.query({ query: ProductsOBJ.query() })).data
  ]);

  return {
    props: {
      apiData: {
        produtos
      }
    }
  };
};
