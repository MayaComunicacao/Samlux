import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import ModalBudget from '../interface/ModalBudget';
import FooterApp from './Footer';
import HeadApp from './Head';
import HeaderApp from './Header';

interface Props {
  children: ReactNode;
  apiData: any;
}

const MainApp = ({ children, apiData }: Props) => {
  const Router = useRouter();

  return (
    <>
      <HeadApp />
      <HeaderApp apiData={apiData} />

      {Router.route != '/orcamento' && <ModalBudget />}

      <main>{children}</main>

      <FooterApp />
    </>
  );
};

export default MainApp;
