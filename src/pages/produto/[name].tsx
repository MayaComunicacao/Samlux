import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import BreadcrumbApp from '../../components/interface/Breadcrumb';
import ProductSlideImage from '../../components/interface/ProductSlideImage';
import ButtonsApp from '../../components/interface/Buttons';
import TitleApp from '../../components/interface/Title';
import RelatedsApp from '../../components/interface/Relateds';
import ApiDataContext from '../../components/context/apiDataContext';
import { getApolloClient } from '../../lib/apollo';
import { ProductOBJ } from '../../hooks/querys';

type Props = {
  apiData: any;
};

const Produto: NextPage<Props> = ({ apiData }: Props) => {
  return (
    <ApiDataContext initialProps={apiData}>
      <div className="container">
        <BreadcrumbApp />
        <div className="sm:flex pt-8 sm:pt-14 pb-14">
          <div className="w-full sm:w-1/2 pr-0 sm:pr-8">
            <ProductSlideImage />
          </div>
          <div className="w-full mt-8 sm:mt-0 sm:w-1/2 pl-0 lg:pl-8 text-gray">
            <h1 className="text-4xl font-semibold text-green">
              Nome do Produto
            </h1>
            <span>Ref: 0000</span>
            <p className="py-4">
              <span className="text-green text-lg font-bold">Descrição: </span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <ul className="py-4">
              <li className="mb-2">
                <span className="text-green text-lg font-bold">
                  Especificações técnicas:
                </span>
              </li>
              <li className="bg-zinc-100 py-2 px-4">
                <b>Difusores: </b>0000
              </li>
              <li className="bg-zinc-50 py-2 px-4">
                <b>Luminária total: </b>0000
              </li>
              <li className="bg-zinc-100 py-2 px-4">
                <b>Base do teto: </b>0000
              </li>
              <li className="bg-zinc-50 py-2 px-4">
                <b>Soquete: </b>0000
              </li>
              <li className="bg-zinc-100 py-2 px-4">
                <b>Voltagem: </b>0000
              </li>
            </ul>
            <p className="py-4">
              <span className="text-green text-lg font-bold">
                Itens inclusos:{' '}
              </span>
              Descrição...
            </p>
            <div className="border border-zinc-300 p-3">
              <span>Não acompanha lâmpada</span>
            </div>
            <ButtonsApp page={'product'} />
          </div>
        </div>

        <TitleApp text={'Produtos relacionados'} />
        <div className="relateds mt-4">
          <RelatedsApp />
        </div>
      </div>
    </ApiDataContext>
  );
};

export default Produto;

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = getApolloClient();

  const [{ produtos }] = await Promise.all([
    await (await apolloClient.query({ query: ProductOBJ.query() })).data
  ]);

  return {
    props: {
      apiData: {
        produtos
      }
    }
  };
};
