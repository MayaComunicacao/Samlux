import { GetStaticProps, GetStaticPaths } from 'next';
import React from 'react';
import BreadcrumbApp from '../../components/interface/Breadcrumb';
import FilterApp from '../../components/interface/Filter';
import ProductApp from '../../components/interface/Product';
import { CategoriesOBJ, ProductsOBJ } from '../../hooks/querys';

type Props = {
  apiData: any;
};

const Products = ({ apiData }: Props) => {
  return (
    <div className="container">
      <BreadcrumbApp />
      <div className="pt-8 pb-14 block lg:flex">
        <div className="w-full lg:w-[280px] lg:mt-14">
          <FilterApp />
        </div>
        <div className="w-full lg:w-[calc(100%_-_280px)]">
          <h1 className="text-3xl text-gray mb-5">Todos os produtos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 2xl:grid-cols-3 gap-4 lg:gap-6">
            {apiData.products.map((produto: any, index: number) => {
              return (
                <ProductApp
                  key={`${index}`}
                  title={produto.title}
                  cod={produto.codigo}
                  img={produto.img.url}
                  uri={produto.uri}
                  slug={produto.slug}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

export const getStaticPaths: GetStaticPaths = async () => {
  const navigation = await (await CategoriesOBJ.queryExecute()).navigation;

  const paths = navigation?.map((item: { slug: string }) => {
    return {
      params: {
        category: item.slug
      }
    };
  });

  return {
    paths,
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const navigation = await (await CategoriesOBJ.queryExecute()).navigation;
  const products = await (await ProductsOBJ.queryExecute()).products;

  return {
    props: {
      apiData: {
        navigation,
        products
      }
    },
    revalidate: 30
  };
};
