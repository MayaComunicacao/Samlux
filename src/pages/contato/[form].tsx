import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
  FormsContact,
  FormsCustom,
  FormsWork
} from '../../components/interface/Form';
import SlideApp from '../../components/interface/Slides';
import MapApp from '../../components/interface/Map';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { GetStaticPaths } from 'next';
import { CategoriesOBJ, WhatsAppOBJ } from '../../hooks/querys';

// Imagens
import workimg from '../../assets/img/trabalhe-conosco.jpg';
import image_1 from '../../assets/img/01.jpg';
import image_2 from '../../assets/img/02.jpg';

const imagens = [
  {
    url: image_1
  },
  {
    url: image_2
  }
];

const PageContactsApp = () => {
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
                <FormsContact />
              </div>
              <div className="w-full lg:w-1/2">
                <MapApp />
              </div>
            </>
          )}

          {Router.query.form === 'trabalhe-conosco' && (
            <>
              <div
                className="w-full lg:w-1/2 py-14 lg:pr-12 text-gray"
                style={{ paddingLeft: paddingLeft }}
              >
                <h1 className="text-3xl text-green">Trabalhe conosco</h1>
                <p className="leading-6 py-3">
                  Quer fazer parte da equipe que ilumina vidas e realiza sonhos?
                  <br />
                  Preencha agora mesmo o formulário.
                </p>
                <FormsWork />
              </div>
              <div className="w-full lg:w-1/2">
                <Image src={workimg} />
              </div>
            </>
          )}

          {Router.query.form === 'projeto-personalizado' && (
            <>
              <div
                className="w-full lg:w-1/2 py-14 lg:pr-12 text-gray"
                style={{ paddingLeft: paddingLeft }}
              >
                <h1 className="text-3xl text-green">Projeto personalizado</h1>
                <p className="leading-6 py-3">
                  Nós tiramos seus sonhos do papel. Se você está em busca de um
                  projeto de iluminação único e adaptado para cada espaço da sua
                  casa ou empresa, nosso time pode ajudar você a realizar seus
                  planos. Com nossa equipe técnica e mix premium de produtos em
                  iluminação, oferecemos a melhor solução para desenvolver sua
                  ideia.
                </p>
                <b>Preencha o formulário e personalize seu projeto. </b>
                <FormsCustom />
              </div>
              <div className="w-full lg:w-1/2">
                <SlideApp
                  dot={true}
                  nav={false}
                  qnt={[1, 1, 1]}
                  imgs={imagens}
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
  const [{ navigation }, { numwhatsapp }] = await Promise.all([
    await CategoriesOBJ.queryExecute(),
    await WhatsAppOBJ.queryExecute()
  ]);

  return {
    props: {
      apiData: {
        navigation,
        numwhatsapp
      }
    },
    revalidate: 30
  };
};
