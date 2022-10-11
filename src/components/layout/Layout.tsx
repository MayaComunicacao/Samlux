import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import ModalBudget from '../interface/ModalBudget';
import FooterApp from './Footer';
import HeadApp from './Head';
import HeaderApp from './Header';

interface Props {
  children: ReactNode;
}

const MainApp = ({ children }: Props) => {
  const Router = useRouter();

  return (
    <>
      <HeadApp />
      <HeaderApp />

      {Router.route != '/orcamento' && <ModalBudget />}

      <main>{children}</main>

      <FooterApp />
    </>
  );
};

export default MainApp;
