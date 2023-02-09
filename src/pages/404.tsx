import React from 'react';
import { GetStaticProps } from 'next';
import { CategoriesOBJ, WhatsAppOBJ } from '../hooks/querys';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center py-36">
        <h1 className="text-xl lg:text-2xl text-green">
          Ops! Este conteúdo não foi encontrado.
        </h1>

        <div className="pt-4">
          <Link href="/">
            <a className="text-gray text-base">Voltar para home</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const [{ navigation }, { numwhatsapp }] = await Promise.all([
    await CategoriesOBJ.queryExecute(),
    await WhatsAppOBJ.queryExecute()
  ]);

  return {
    props: {
      apiData: {
        navigation,
        numwhatsapp
      }
    },
    revalidate: 30
  };
};
