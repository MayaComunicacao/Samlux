import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import BudgetProvider from '../components/context/context';
import MenuProvider from '../components/context/contextMenu';

type ApiDataProps = {
  pageProps: { apiData: any };
};

function MyApp({ Component, pageProps }: AppProps & ApiDataProps) {
  return (
    <MenuProvider>
      <BudgetProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BudgetProvider>
    </MenuProvider>
  );
}

export default MyApp;
