import { GetStaticProps } from 'next';
import React from 'react';
import MapsHome from '../components/interface/MapsHome';
import { CategoriesOBJ, ImagemMapaOBJ, WhatsAppOBJ } from '../hooks/querys';

const OndeEstamos = ({ apiData }: { apiData: any }) => {
  return (
    <div className="container">
      <div className="pb-12 lg:pb-0">
        <MapsHome mapa={apiData?.imgsMapa} />
      </div>
    </div>
  );
};

export default OndeEstamos;

export const getStaticProps: GetStaticProps = async () => {
  const [{ navigation }, { numwhatsapp }, { imgsMapa }] = await Promise.all([
    await CategoriesOBJ.queryExecute(),
    await WhatsAppOBJ.queryExecute(),
    await ImagemMapaOBJ.queryExecute()
  ]);

  return {
    props: {
      apiData: {
        navigation,
        numwhatsapp,
        imgsMapa
      }
    },
    revalidate: 30
  };
};
