import React from 'react';
import { GetStaticProps } from 'next';
import { CategoriesOBJ } from '../hooks/querys';

export default function Custom500() {
  return <h1>500 - Server-side error occurred</h1>;
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
