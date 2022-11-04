import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ButtonsApp from './Buttons';

type Props = {
  title: string;
  cod: string;
  img: string;
  originalWidth: string;
  originalHeight: string;
  url: string;
  slug: string;
};

const ProductApp = ({
  title,
  cod,
  img,
  originalWidth,
  originalHeight,
  url,
  slug
}: Props) => {
  return (
    <div>
      <input type="hidden" name="" />
      <div className="border border-gray">
        <Link href={`${url}`}>
          <a className="relative">
            {img && (
              <Image
                layout="responsive"
                width={originalWidth}
                height={originalHeight}
                src={img}
              />
            )}
          </a>
        </Link>
      </div>
      <ButtonsApp
        page={'category'}
        title={title}
        slug={slug}
        codigo={cod}
        img={img}
      />
      <div className="text-center py-2">
        {title && <p>{title}</p>}
        {cod && <strong>Cód. {cod}</strong>}
      </div>
    </div>
  );
};

export default ProductApp;
