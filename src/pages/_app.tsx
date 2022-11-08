import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import BudgetProvider from '../components/context/context';
import MenuProvider from '../components/context/contextMenu';
import ApiDataProvider from '../components/context/apiDataContext';

type App = {
  pageProps: { apiData: any };
};

function MyApp({ Component, pageProps }: AppProps & App) {
  return (
    <MenuProvider>
      <BudgetProvider>
        <ApiDataProvider initialProps={pageProps.apiData}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApiDataProvider>
      </BudgetProvider>
    </MenuProvider>
  );
}

export default MyApp;
