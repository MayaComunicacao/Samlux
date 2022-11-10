import React from 'react';
import { GetServerSideProps } from 'next';
import BreadcrumbApp from '../../components/interface/Breadcrumb';
import ProductSlideImage from '../../components/interface/ProductSlideImage';
import ButtonsApp from '../../components/interface/Buttons';
import TitleApp from '../../components/interface/Title';
import RelatedsApp from '../../components/interface/Relateds';
import { getApolloClient } from '../../lib/apollo';
import { ProductOBJ, ProductsOBJ } from '../../hooks/querys';

type Props = {
  apiData: any;
};

const Produto({ apiData }: Props) => {
  const data = apiData[ProductOBJ.postType];
  console.log('[name]', data);

  return (
    <div className="container">
      <BreadcrumbApp path={data.title} />
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
          />
        </div>
      </div>

      <TitleApp text={'Produtos relacionados'} />
      <div className="relateds mt-4">
        <RelatedsApp />
      </div>
    </div>
  );
};

export default Produto;

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = getApolloClient();

  const [{ produto }, { produtos }] = await Promise.all([
    await (
      await apolloClient.query({
        query: ProductOBJ.query(),
        variables: { slug: 'produto-teste' }
      })
    ).data,
    await (
      await apolloClient.query({
        query: ProductsOBJ.query()
      })
    ).data
  ]);

  return {
    props: {
      apiData: {
        produto,
        produtos
      }
    }
  };
};
