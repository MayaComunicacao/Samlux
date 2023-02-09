import { useRouter } from 'next/router';
import React from 'react';
import ModalBudget from '../interface/ModalBudget';
import WhatsappButton from '../interface/WhatsappButton';
import FooterApp from './Footer';
import HeadApp from './Head';
import HeaderApp from './Header';

const MainApp = ({
  children,
  api
}: {
  children: React.ReactNode;
  api: any;
}) => {
  const Router = useRouter();

  return (
    <>
      <HeadApp />
      <HeaderApp apidata={api} />

      {Router.route != '/orcamento' && <ModalBudget />}

      <main>{children}</main>

      <WhatsappButton numwhatsapp={api.numwhatsapp} />

      <FooterApp />
    </>
  );
};

export default MainApp;
