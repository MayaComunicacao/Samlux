import type { GetStaticProps } from 'next';
import React from 'react';
import { useBudget } from '../components/context/context';
import { useModal } from '../components/context/contextModal';
import ItemBudget from '../components/interface/ItemBudget';
import TitleApp from '../components/interface/Title';
import { CategoriesOBJ } from '../hooks/querys';

const PageOrcamento = () => {
  const { budget } = useBudget();
  const { setStatusModal } = useModal();

  return (
    <>
      <div className="container py-14">
        <TitleApp text={'Finalizar orçamento'} />

        <div className="my-8 grid grid-cols-4 gap-8">
          {budget.length > 0 &&
            budget.map((product, index: number) => {
              return (
                <ItemBudget
                  key={`${index}`}
                  title={product.title}
                  uri={product.uri}
                  slug={product.slug}
                  codigo={product.codigo}
                  img={product.img}
                  quantidade={product.quantidade}
                  volts={product.volts}
                />
              );
            })}
        </div>

        <div className="text-center mt-12">
          <button
            className="py-3 px-4 bg-green text-white font-bold inline-block uppercase"
            onClick={() => setStatusModal(true)}
          >
            Finalizar orçamento
          </button>
        </div>
      </div>
    </>
  );
};

export default PageOrcamento;

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
