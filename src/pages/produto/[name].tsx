import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import BreadcrumbApp from '../../components/interface/Breadcrumb';
import ProductSlideImage from '../../components/interface/ProductSlideImage';
import ButtonsApp from '../../components/interface/Buttons';
import TitleApp from '../../components/interface/Title';
import RelatedsApp from '../../components/interface/Relateds';
import {
  CategoriesOBJ,
  ProductOBJ,
  ProductsOBJ,
  WhatsAppOBJ
} from '../../hooks/querys';
import Image from 'next/image';

type Props = {
  apiData: any;
};

const Produto = ({ apiData }: Props) => {
  const data = apiData.product.produto;

  const [variacaoIndex, setVariacaoIndex] = useState(0);
  const [corSelecionadaIndex, setCorSelecionadaIndex] = useState<number | null>(
    null
  );

  const ambientadas = data?.produto?.proImagens || [];
  const fotosVariacoes =
    data.produto.variacoesDoProduto?.map((item: any) => item.imagemVariacao) ||
    null;

  const imagens = fotosVariacoes
    ? [...ambientadas, ...fotosVariacoes]
    : [...ambientadas];

  return (
    <div className="container">
      <BreadcrumbApp />

      <div className="sm:flex pt-8 sm:pt-14 pb-14">
        <div className="w-full sm:w-1/2 pr-0 sm:pr-8">
          <ProductSlideImage
            gallery={
              corSelecionadaIndex !== null
                ? data.produto?.variacoesDoProduto[variacaoIndex]?.fotoscores[
                    corSelecionadaIndex
                  ].imagensCor
                : imagens
            }
          />
        </div>
        <div className="w-full mt-8 sm:mt-0 sm:w-1/2 pl-0 lg:pl-8 text-gray">
          <h1 className="text-4xl font-semibold text-green pb-4">
            {data.title}
          </h1>

          {data.produto.prodDescricao && (
            <div className="pb-4">
              <span className="text-green text-lg font-bold">Descrição:</span>
              <p
                dangerouslySetInnerHTML={{
                  __html: data.produto.prodDescricao
                }}
              />
            </div>
          )}
          {data.produto?.variacoesDoProduto?.length > 0 && (
            <div className="py-4">
              <span className="block text-green text-lg font-bold pb-2">
                Variações:
              </span>

              <div className="grid grid-cols-2 lg:flex flex-wrap gap-4">
                {data.produto.variacoesDoProduto?.map(
                  (item: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center w-[fit-content] p-2 relative gap-2 border border-zinc-300 cursor-pointer"
                        onClick={() => setVariacaoIndex(index)}
                      >
                        <div className="flex items-center relative">
                          <div className="block relative top-[-14px]">
                            <input
                              type="radio"
                              name={`variacao${item.prodCodigo}`}
                              value={item.prodCodigo}
                              checked={index === variacaoIndex ? true : false}
                              readOnly={true}
                            />
                            <label htmlFor={`variacao${item.prodCodigo}`} />
                          </div>
                        </div>

                        {item?.imagemVariacao && (
                          <div className="block w-[50px] aspect-square relative">
                            <Image
                              src={item.imagemVariacao.sourceUrl}
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center"
                              priority={true}
                            />
                          </div>
                        )}

                        <div>
                          <span className="text-current text-sm">
                            cod: {item.prodCodigo}
                          </span>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>

              {data.produto?.variacoesDoProduto[variacaoIndex]?.prodCarac
                ?.length > 0 && (
                <ul className="py-4">
                  <li className="mb-2">
                    <span className="text-green text-lg font-bold">
                      Especificações técnicas:
                    </span>
                  </li>
                  {data.produto?.variacoesDoProduto[
                    variacaoIndex
                  ]?.prodCarac.map((item: any, index: number) => {
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
            </div>
          )}
          {data?.produto?.variacoesDoProduto &&
            data?.produto?.variacoesDoProduto[variacaoIndex].fotoscores
              ?.length > 0 && (
              <div className="flex gap-4 pl-1">
                {data?.produto?.variacoesDoProduto[
                  variacaoIndex
                ].fotoscores?.map((item: any, index: number) => {
                  if (item.corImage.corSelec1 || item.corImage.corSelec2) {
                    return (
                      <button
                        key={index}
                        className={`block w-[35px] h-[35px] p-1 border ${
                          corSelecionadaIndex === index
                            ? 'border-greenlight'
                            : 'border-[#ccc]'
                        }`}
                        onClick={() => setCorSelecionadaIndex(index)}
                      >
                        <div className="container-square">
                          <span
                            className="block w-full h-full square"
                            style={{
                              backgroundColor: `${item?.corImage?.corSelec1}`
                            }}
                          >
                            <span
                              className="overlay"
                              style={{
                                backgroundColor: `${item?.corImage?.corSelec2}`
                              }}
                            />
                          </span>
                        </div>
                      </button>
                    );
                  }
                })}
              </div>
            )}
          <div className="block pt-6 pl-1">
            <button
              className="block bg-green p-3 text-white"
              onClick={() => setCorSelecionadaIndex(null)}
            >
              Ver ambientadas
            </button>
          </div>
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
            <>
              <div className="pb-2">
                <span className="block text-green text-lg font-bold pb-2">
                  Itens não inclusos:
                </span>
              </div>

              <div className="border border-zinc-300 p-3">
                <span>{data.produto.prodItensnaoinc}</span>
              </div>
            </>
          )}
          <ButtonsApp
            page={'product'}
            title={data.title}
            slug={data.slug}
            codigo={
              data.produto.variacoesDoProduto
                ? data.produto.variacoesDoProduto[variacaoIndex].prodCodigo
                : null
            }
            img={data?.produto?.imagemPrincipal?.sourceUrl}
            uri={data.uri}
            volts="127v"
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

    const [{ navigation }, { products }, { result: product }, { numwhatsapp }] =
      await Promise.all([
        await CategoriesOBJ.queryExecute(),
        await ProductsOBJ.queryExecute(),
        await ProductOBJ.queryExecute(name as string),
        await WhatsAppOBJ.queryExecute()
      ]);

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
          product,
          numwhatsapp
        }
      },
      revalidate: 30
    };
  }

  return {
    notFound: true
  };
};
