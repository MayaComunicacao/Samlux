import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import SlideApp from '../../components/interface/Slides';
import MapApp from '../../components/interface/Map';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next';
import {
  CategoriesOBJ,
  CustomProjectsPageOBJ,
  WhatsAppOBJ
} from '../../hooks/querys';
import workimg from '../../assets/img/trabalhe-conosco.jpg';
import { Page_Galeriaprojetopersonalizado } from '../../generated/graphql';
import FormContact from '../../components/interface/form/FormContact';
import FormCustomProject from '../../components/interface/form/FormCustomProject';
import FormWork from '../../components/interface/form/FormWork';

const PageContactsApp = ({ apiData }: { apiData: any }) => {
  const contentCustomProjectPage = apiData?.contentCustomProjectPage;

  const api_galeria: Page_Galeriaprojetopersonalizado =
    apiData?.contentCustomProjectPage?.galeriaProjetoPersonalizado;

  const galeria = api_galeria?.galeriaProjetosPersonalizados?.map((item) => {
    return {
      url: item?.sourceUrl || ''
    };
  });

  const Router = useRouter();

  const [paddingLeft, setPaddingLeft] = useState(0);

  useEffect(() => {
    const whidth = document
      .querySelector('.container')
      ?.getBoundingClientRect();

    if (whidth) {
      setPaddingLeft(whidth.left);
    }
  }, []);

  return (
    <div className="px-4 2xl:px-0 bg-graylight">
      <div className="relative lg:min-h-[480px] contacts">
        <div className="lg:flex lg:items-center">
          {Router.query.form === 'fale-conosco' && (
            <>
              <div
                className="w-full lg:w-1/2 py-14 lg:pr-12 text-gray"
                style={{ paddingLeft: paddingLeft }}
              >
                <h1 className="text-3xl text-green">Fale conosco</h1>
                <p className="leading-6 py-3">
                  Entre em contato com nossa equipe e esclareça sua dúvidas.
                </p>
                <FormContact />
              </div>
              <div className="w-full lg:w-1/2">
                <MapApp />
              </div>
            </>
          )}

          {Router.query.form === 'trabalhe-conosco' && (
            <>
              <div
                className="w-full lg:w-1/2 py-8 lg:pr-12 text-gray"
                style={{ paddingLeft: paddingLeft }}
              >
                <h1 className="text-3xl text-green">Trabalhe conosco</h1>
                <p className="leading-6 py-3">
                  Quer fazer parte da equipe que ilumina vidas e realiza sonhos?
                  <br />
                  Preencha agora mesmo o formulário.
                </p>
                <FormWork />
              </div>
              <div className="w-full lg:w-1/2">
                <Image src={workimg} />
              </div>
            </>
          )}

          {Router.query.form === 'projeto-personalizado' && (
            <>
              <div
                className="w-full lg:w-1/2 py-4 lg:py-10 lg:pr-12 text-gray"
                style={{ paddingLeft: paddingLeft }}
              >
                <h1 className="text-3xl text-green">
                  {contentCustomProjectPage?.title || 'Projeto personalizado'}
                </h1>

                <p
                  className="leading-6 py-3"
                  dangerouslySetInnerHTML={{
                    __html: contentCustomProjectPage?.content
                  }}
                />
                <b>Preencha o formulário e personalize seu projeto. </b>
                <FormCustomProject />
              </div>
              <div className="w-full lg:w-1/2">
                <SlideApp
                  dot={true}
                  nav={false}
                  qnt={[1, 1, 1]}
                  imgs={galeria}
                  play={true}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageContactsApp;

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { form: 'fale-conosco' } },
      { params: { form: 'trabalhe-conosco' } },
      { params: { form: 'projeto-personalizado' } }
    ],
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const [
    { navigation },
    { numwhatsapp },
    { resultPage: contentCustomProjectPage }
  ] = await Promise.all([
    await CategoriesOBJ.queryExecute(),
    await WhatsAppOBJ.queryExecute(),
    await CustomProjectsPageOBJ.queryExecute()
  ]);

  return {
    props: {
      apiData: {
        navigation,
        numwhatsapp,
        contentCustomProjectPage
      }
    },
    revalidate: 30
  };
};
