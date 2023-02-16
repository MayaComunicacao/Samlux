import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import ArquiveDownload from '../components/interface/ArquiveDownload';
import ConfigCss from '../styles/configcss';
import { CategoriesOBJ, DownloadsQueryOBJ, WhatsAppOBJ } from '../hooks/querys';
import { RootQueryToDownloadConnection } from '../generated/graphql';

const StyleButtons = {
  background: ConfigCss.colors.green,
  color: ConfigCss.colors.white,
  borderColor: ConfigCss.colors.green
};

type TypeArquiveProp = 'pdf' | '3d' | 'foto';

const Download = ({ apiData }: { apiData: any }) => {
  const files: RootQueryToDownloadConnection = apiData?.downloads;

  const [typeFile, setTypeFile] = useState<TypeArquiveProp>('pdf');

  const SetType = (type: TypeArquiveProp) => {
    setTypeFile(type);
  };

  return (
    <div className="container py-20">
      <div className="block text-center sm:flex justify-between">
        <h1 className="text-3xl text-gray">Downloads</h1>
        <div className="mt-4 sm:mt-0">
          <button
            onClick={() => SetType('pdf')}
            className="py-3 px-4 border border-gray rounded-l-2xl text-gray hover:bg-green hover:text-white hover:border-green"
            style={typeFile === 'pdf' ? StyleButtons : undefined}
          >
            Catálogos
          </button>
          <button
            onClick={() => SetType('3d')}
            className="py-3 px-4 border-t border-b border-gray text-gray hover:bg-green hover:text-white hover:border-green"
            style={typeFile === '3d' ? StyleButtons : undefined}
          >
            3Ds
          </button>
          <button
            onClick={() => SetType('foto')}
            className="py-3 px-4 border border-gray text-gray rounded-r-2xl hover:bg-green hover:text-white hover:border-green"
            style={typeFile === 'foto' ? StyleButtons : undefined}
          >
            Fotos
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6 my-8">
        {files?.nodes?.map((item, index) => {
          if (item?.downloads?.downTipo === typeFile) {
            return (
              <ArquiveDownload
                key={index}
                type={
                  item?.downloads?.downTipo as
                    | 'downPdf'
                    | 'downImagem'
                    | 'downFoto3d'
                }
                item={item}
              />
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default Download;

export const getStaticProps: GetStaticProps = async () => {
  const [{ navigation }, { numwhatsapp }, { downloads }] = await Promise.all([
    await CategoriesOBJ.queryExecute(),
    await WhatsAppOBJ.queryExecute(),
    await DownloadsQueryOBJ.queryExecute()
  ]);

  return {
    props: {
      apiData: {
        navigation,
        numwhatsapp,
        downloads
      }
    },
    revalidate: 30
  };
};
