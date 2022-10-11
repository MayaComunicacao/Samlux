import { NextPage } from 'next';
import React, { useState } from 'react';
import ArquiveDownload from '../components/interface/ArquiveDownload';
import Arquives from '../assets/images/arquives.json';
import ConfigCss from '../styles/configcss';

interface DownloadProps {
  link: string;
  name: string;
  description: string;
}

const StyleButtons = {
  background: ConfigCss.colors.green,
  color: ConfigCss.colors.white,
  borderColor: ConfigCss.colors.green
};

const Download: NextPage = () => {
  const [TypeArquive, setTypeArquive] = useState('catalogos');
  const SetType = (type: string) => {
    setTypeArquive(type);
  };

  return (
    <div className="container py-20">
      <div className="block text-center sm:flex justify-between">
        <h1 className="text-3xl text-gray">Downloads</h1>
        <div className="mt-4 sm:mt-0">
          <button
            onClick={() => SetType('catalogos')}
            className="py-3 px-4 border border-gray rounded-l-2xl text-gray hover:bg-green hover:text-white hover:border-green"
            style={TypeArquive === 'catalogos' ? StyleButtons : undefined}
          >
            Catálogos
          </button>
          <button
            onClick={() => SetType('3ds')}
            className="py-3 px-4 border-t border-b border-gray text-gray hover:bg-green hover:text-white hover:border-green"
            style={TypeArquive === '3ds' ? StyleButtons : undefined}
          >
            3Ds
          </button>
          <button
            onClick={() => SetType('fotos')}
            className="py-3 px-4 border border-gray text-gray rounded-r-2xl hover:bg-green hover:text-white hover:border-green"
            style={TypeArquive === 'fotos' ? StyleButtons : undefined}
          >
            Fotos
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6 my-8">
        {Arquives[0][TypeArquive].map((item: DownloadProps, index: number) => {
          return (
            <ArquiveDownload key={index} type={TypeArquive} array={item} />
          );
        })}
      </div>
    </div>
  );
};

export default Download;
