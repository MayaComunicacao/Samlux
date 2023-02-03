import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  img: string;
  uri: string;
};

const ProductApp = ({ title, img, uri }: Props) => {
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
      <div className="text-center py-2">{title && <p>{title}</p>}</div>
    </div>
  );
};

export default ProductApp;
