import React from 'react';
import { GetStaticProps } from 'next';
import { CategoriesOBJ } from '../hooks/querys';

export default function Custom404() {
  return <h1>404 - Page Not Found</h1>;
}

export const getStaticProps: GetStaticProps = async () => {
  const navigation = await (await CategoriesOBJ.queryExecute()).navigation;

  return {
    props: {
      apiData: {
        navigation
      }
    },
    revalidate: 30
  };
};
