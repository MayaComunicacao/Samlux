import { GetStaticProps } from 'next';
import React from 'react';
import { Page_Ondeestamos_OndeEstamos } from '../generated/graphql';
import { CategoriesOBJ, OndeEstamosOBJ, WhatsAppOBJ } from '../hooks/querys';

const OndeEstamos = ({ apiData }: { apiData: any }) => {
  const enderecos: Page_Ondeestamos_OndeEstamos[] =
    apiData?.enderecos?.page?.ondeEstamos?.ondeEstamos || {};

  return (
    <div className="container">
      <div className="space-y-4 pb-10">
        <h1 className="text-2xl text-gray">Onde nós estamos:</h1>

        <div className="space-y-4">
          {enderecos?.map((item, index) => {
            return (
              <div
                key={index}
                className="border-b border-slate-300 rounded-sm space-y-4 pb-2"
              >
                <div className="flex flex-col text-gray space-y-1">
                  <span>loja: {item.cidade}</span>
                  <span>endereço: {item.endereco}</span>
                  <span>telefone: {item?.telefone}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OndeEstamos;

export const getStaticProps: GetStaticProps = async () => {
  const [{ navigation }, { numwhatsapp }, { enderecos }] = await Promise.all([
    await CategoriesOBJ.queryExecute(),
    await WhatsAppOBJ.queryExecute(),
    await OndeEstamosOBJ.queryExecute()
  ]);

  return {
    props: {
      apiData: {
        navigation,
        numwhatsapp,
        enderecos
      }
    },
    revalidate: 30
  };
};
