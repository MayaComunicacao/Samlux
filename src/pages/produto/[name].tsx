import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import BreadcrumbApp from '../../components/interface/Breadcrumb';
import ProductSlideImage from '../../components/interface/ProductSlideImage';
import ButtonsApp from '../../components/interface/Buttons';
import TitleApp from '../../components/interface/Title';
import RelatedsApp from '../../components/interface/Relateds';
import { CategoriesOBJ, ProductOBJ, ProductsOBJ } from '../../hooks/querys';

type Props = {
  apiData: any;
};

const Produto = ({ apiData }: Props) => {
  const data = apiData.product.produto;

  return (
    <div className="container">
      <BreadcrumbApp />
      <div className="sm:flex pt-8 sm:pt-14 pb-14">
        <div className="w-full sm:w-1/2 pr-0 sm:pr-8">
          <ProductSlideImage gallery={data.produto.proImagens} />
        </div>
        <div className="w-full mt-8 sm:mt-0 sm:w-1/2 pl-0 lg:pl-8 text-gray">
          <h1 className="text-4xl font-semibold text-green">{data.title}</h1>
          {data.prodCodigo && <span>{data.prodCodigo}</span>}
          {data.produto.prodDescricao && (
            <div className="py-4">
              <span className="text-green text-lg font-bold">Descrição:</span>
              <p
                dangerouslySetInnerHTML={{
                  __html: data.produto.prodDescricao
                }}
              />
            </div>
          )}
          {data.produto.prodCarac.length > 0 && (
            <ul className="py-4">
              <li className="mb-2">
                <span className="text-green text-lg font-bold">
                  Especificações técnicas:
                </span>
              </li>
              {data.produto.prodCarac.map((item: any, index: number) => {
                return (
                  <li
                    key={index}
                    className="odd:bg-zinc-100 even:bg-zinc-50 py-2 px-4"
                  >
                    {item.prodCaracItem}
                  </li>
                );
              })}
            </ul>
          )}
          {data.produto.prodItensinclusosDescricao && (
            <p className="py-4">
              <span className="text-green text-lg font-bold">
                Itens inclusos:
              </span>
              <span
                dangerouslySetInnerHTML={{
                  __html: data.produto.prodItensinclusosDescricao
                }}
              />
            </p>
          )}
          {data.produto.prodItensnaoinc && (
            <div className="border border-zinc-300 p-3">
              <span>{data.produto.prodItensnaoinc}</span>
            </div>
          )}
          <ButtonsApp
            page={'product'}
            title={data.title}
            slug={data.slug}
            codigo={data.prodCodigo}
            img={data.featuredImage.node.sourceUrl}
            uri={data.uri}
          />
        </div>
      </div>

      <TitleApp text={'Produtos relacionados'} />
      <div className="relateds mt-4">
        <RelatedsApp products={apiData.products} />
      </div>
    </div>
  );
};

export default Produto;

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await (await ProductsOBJ.queryExecute()).products;

  const paths = products?.map((product: { slug: string }) => {
    return {
      params: {
        name: product.slug
      }
    };
  });

  return {
    paths,
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params && params.name) {
    const { name } = params;

    const navigation = await (await CategoriesOBJ.queryExecute()).navigation;
    const products = await (await ProductsOBJ.queryExecute()).products;
    const product = await (
      await ProductOBJ.queryExecute(name as string)
    ).result;

    if (!product) {
      return {
        notFound: true
      };
    }

    return {
      props: {
        apiData: {
          navigation,
          products,
          product
        }
      },
      revalidate: 30
    };
  }

  return {
    notFound: true
  };
};
