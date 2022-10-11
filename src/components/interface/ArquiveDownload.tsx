import Image from 'next/image';
import React from 'react';

import ImgDownload from '../../assets/img/download.jpg';

interface ArquiveDownloadProps {
  array: {
    link: string;
    name: string;
    description: string;
  };
  type: string;
}

const ArquiveDownload = ({ type, array }: ArquiveDownloadProps) => {
  return (
    <>
      <div className="text-center">
        <Image src={ImgDownload} />
        <h2 className="font-bold text-green text-base">{array.name}</h2>
        <p className="text-gray text-sm">{array.description}</p>
        <a
          href={array.link}
          download={type}
          className="py-2 px-4 bg-green text-white text-center block mt-3"
        >
          Baixar
        </a>
      </div>
    </>
  );
};

export default ArquiveDownload;
