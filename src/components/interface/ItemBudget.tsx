import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import configcss from '../../styles/configcss';
import { Product, useBudget } from '../context/context';

const ItemBudget = ({ title, slug, uri, img, codigo, quantidade }: Product) => {
  const { removeBudget } = useBudget();

  const handleClickRemove = () => {
    removeBudget(slug);
  };

  return (
    <div className="flex items-center">
      <div className="w-36 aspect-[4/5] reset-image relative">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div className="pl-2 relative py-4 px-4 w-[calc(100%-64px)]">
        <div>
          <strong className="w-full text-lg block text-green">{title}</strong>
          <span className="w-full text-xs block">Cód. {codigo}</span>
          <span className="w-full text-xs block">Quantidade: {quantidade}</span>
        </div>
        <div className="pt-3 flex items-center">
          <Link href={uri}>
            <a className="py-2 px-4 text-xs text-center uppercase bg-bg text-gray mr-2 leading-4">
              Visualizar
            </a>
          </Link>
          <button
            className="py-2 px-4 bg-bg text-center uppercase"
            onClick={handleClickRemove}
          >
            <FaTrashAlt size="18px" color={configcss.colors.gray} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemBudget;
