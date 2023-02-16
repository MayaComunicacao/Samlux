import Image from 'next/image';
import React, { useRef } from 'react';
import { Maybe, Download } from '../../generated/graphql';

interface IProps {
  item: Maybe<Download>;
  type: 'downPdf' | 'downImagem' | 'downFoto3d';
}

type Indices = {
  [key: string]: 'downPdf' | 'downImagem' | 'downFoto3d';
};

const ArquiveDownload = ({ item, type }: IProps) => {
  const refLink = useRef(null);

  const indices: Indices = {
    pdf: 'downPdf',
    foto: 'downImagem',
    '3d': 'downFoto3d'
  };

  const downloadFile = (url: string, name: string) => {
    if (!url || !name) return;

    fetch(url)
      .then((resp) => resp.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        // the filename you want
        a.download = name;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(() => alert('An error sorry'));
  };

  return (
    <>
      <div className="block text-center">
        <div className="block relative w-full aspect-square">
          <Image
            layout="fill"
            src={item?.downloads?.[indices[type]]?.sourceUrl || ''}
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <h2 className="font-bold text-green text-base">{item?.title}</h2>

        <p className="text-gray text-sm">{item?.downloads?.downDescricao}</p>

        <a
          ref={refLink}
          href={item?.downloads?.[indices[type]]?.mediaItemUrl || ''}
          onClick={(e) => {
            e.preventDefault();

            const url = item?.downloads?.[indices[type]]?.mediaItemUrl || '';
            const name = item?.downloads?.[indices[type]]?.title || '';

            downloadFile(url, name);
          }}
          target="_blank"
          download={item?.downloads?.[indices[type]]?.title}
          className="py-2 px-4 bg-green text-white text-center block mt-3"
          rel="noreferrer"
        >
          Baixar
        </a>
      </div>
    </>
  );
};

export default ArquiveDownload;
