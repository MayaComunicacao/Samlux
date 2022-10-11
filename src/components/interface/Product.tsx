import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img from '../../assets/img/product.jpg';
import ButtonsApp from './Buttons';

const ProductApp = () => {
  return (
    <div>
      <div className="border border-gray">
        <Link href="/produto/Luminaria">
          <a>
            <Image src={img} />
          </a>
        </Link>
      </div>
      <ButtonsApp page={'category'} />
      <div className="text-center py-2">
        <p>Nome do produto</p>
        <strong>Cód.</strong>
      </div>
    </div>
  );
};

export default ProductApp;
