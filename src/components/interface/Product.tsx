import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ButtonsApp from './Buttons';

type Props = {
  title: string;
  cod: string;
  img: string;
  uri: string;
  slug: string;
};

const ProductApp = ({ title, cod, img, uri, slug }: Props) => {
  return (
    <div>
      <input type="hidden" name="" />
      <div className="border border-gray">
        <Link href={`${uri}`} passHref={true}>
          <a className="block relative w-full aspect-square">
            {img && (
              <Image
                layout="fill"
                src={img}
                objectFit="cover"
                objectPosition="center"
                priority={true}
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
        uri={uri}
      />
      <div className="text-center py-2">
        {title && <p>{title}</p>}
        {cod && <strong>Cód. {cod}</strong>}
      </div>
    </div>
  );
};

export default ProductApp;
