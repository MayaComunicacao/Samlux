import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import configcss from '../../styles/configcss';
import ImgProduct from '../../assets/img/prod.jpg';

const ItemBudget = () => {
  return (
    <div className="flex items-center">
      <div className="w-32 reset-image">
        <Image src={ImgProduct} />
      </div>
      <div className="pl-2 relative py-4 px-4 w-[calc(100%-64px)]">
        <div>
          <strong className="w-full text-lg block text-green">
            Nome do Produto
          </strong>
          <span className="w-full text-xs block">Cód. 0000</span>
          <span className="w-full text-xs block">Quantidade: 1</span>
        </div>
        <div className="pt-3 flex items-center">
          <Link href="/produto/Luminaria">
            <a className="py-2 px-4 text-xs text-center uppercase bg-bg text-gray mr-2 leading-4">
              Visualizar
            </a>
          </Link>
          <button className="py-2 px-4 bg-bg text-center uppercase">
            <FaTrashAlt size="18px" color={configcss.colors.gray} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemBudget;
