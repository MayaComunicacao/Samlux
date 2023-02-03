import React, { useState } from 'react';
import { FaClipboardList } from 'react-icons/fa';
import configcss from '../../styles/configcss';
import Link from 'next/link';
import ItemBudget from './ItemBudget';
import { IoMdClose } from 'react-icons/io';
import { useBudget } from '../context/context';

const ModalBudget = () => {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  const { budget } = useBudget();

  return (
    <>
      <div
        className={`fixed top-0 right-0 z-20 w-full max-w-sm bg-white h-screen shadow-xl translate-x-full transition-all ${
          isActive ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button onClick={onClick} className="block absolute top-4 right-4 z-50">
          <IoMdClose size="24px" color={configcss.colors.gray} />
        </button>
        <div className="absolute top-[calc(50%_-_100px)] -left-[50px] pl-[6px] h-[210px] w-14 flex items-center bg-backicon bg-no-repeat">
          <button
            onClick={onClick}
            className=" h-10 w-10 rounded-full bg-white py-2 px-2"
          >
            <FaClipboardList size="24px" color={configcss.colors.green} />
          </button>
        </div>
        <div className="flex flex-col justify-between p-6 text-gray border-l border-green h-full relative">
          <div>
            <h3 className="text-2xl font-bold">Produtos</h3>
            <small>Lista dos produtos para orçamento</small>
          </div>

          <div className="block h-[80%] overflow-y-auto scroll_budget">
            {budget.length > 0 &&
              budget.map((product, index: number) => {
                return (
                  <div key={index} className="block pb-4">
                    <ItemBudget
                      key={`${index}`}
                      title={product.title}
                      uri={product.uri}
                      slug={product.slug}
                      codigo={product.codigo}
                      img={product?.img}
                      quantidade={product.quantidade}
                      volts={product.volts}
                    />
                  </div>
                );
              })}
          </div>

          <div className="relative text-center w-full pt-2">
            <Link href="/orcamento">
              <a className="py-3 px-4 bg-green text-white font-bold block">
                Finalizar orçamento
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBudget;
