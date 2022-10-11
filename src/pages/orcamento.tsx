import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { useBudget } from '../components/context/context';
import ItemBudget from '../components/interface/ItemBudget';
import TitleApp from '../components/interface/Title';

const PageOrcamento: NextPage = () => {
  const { state } = useBudget();
  console.log(state);

  return (
    <>
      <div className="container py-14">
        <TitleApp text={'Finalizar orçamento'} />

        <div className="my-8 grid grid-cols-4 gap-8">
          <ItemBudget />
          <ItemBudget />
          <ItemBudget />
          <ItemBudget />
        </div>

        <div className="text-center mt-12">
          <Link href="/">
            <a className="py-3 px-4 bg-green text-white font-bold inline-block uppercase">
              Finalizar orçamento
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageOrcamento;
