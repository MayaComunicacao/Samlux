import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import BudgetProvider from '../components/context/context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BudgetProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BudgetProvider>
  );
}

export default MyApp;
