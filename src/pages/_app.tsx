import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import BudgetProvider from '../components/context/context';
import MenuProvider from '../components/context/contextMenu';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import ContextFilterProvider from '../components/context/contextFilter';

export interface IApiData {
  apiData: any;
}

function MyApp({ Component, pageProps }: AppProps<IApiData>) {
  return (
    <MenuProvider>
      <BudgetProvider>
        <ContextFilterProvider>
          <Layout api={pageProps.apiData}>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />

            <Component {...pageProps} />
          </Layout>
        </ContextFilterProvider>
      </BudgetProvider>
    </MenuProvider>
  );
}

export default MyApp;
