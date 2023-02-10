import { GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';
import SlideApp from '../components/interface/Slides';
import TitleApp from '../components/interface/Title';
import { AboutPageOBJ, CategoriesOBJ, WhatsAppOBJ } from '../hooks/querys';
import { Page_Pagsobre } from '../generated/graphql';

const AboutApp = ({ apiData }: { apiData: any }) => {
  const api_galeria: Page_Pagsobre = apiData?.resultPage?.pagSobre || [];

  const galeria = api_galeria?.sobreGaleria
    ?.map((item) => {
      return {
        url: item?.sourceUrl || ''
      };
    })
    .filter(Boolean);

  const [paddingLeft, setPaddingLeft] = useState(0);

  useEffect(() => {
    const width = document.querySelector('.container')?.getBoundingClientRect();

    if (width) {
      setPaddingLeft(width.left);
    }
  }, []);

  return (
    <>
      <div className="bg-bg relative min-h-[480px] border-b border-slate-300">
        <div className="lg:flex lg:items-center">
          <div
            className="w-full lg:w-1/2 py-20 lg:pr-14 text-gray"
            style={{ paddingLeft: paddingLeft }}
          >
            <div className="pb-4">
              <TitleApp
                text={apiData?.resultPage?.title ?? ''}
                textCenter={false}
              />
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: apiData?.resultPage?.content }}
            />
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
        </div>
      </div>

      {/* <div className="container sm:max-w-screen-lg py-16">
        <Image layout="responsive" src={Video} alt="Vídeo Samlux" />
      </div> */}
    </>
  );
};

export default AboutApp;

export const getStaticProps: GetStaticProps = async () => {
  const [{ navigation }, { resultPage }, { numwhatsapp }] = await Promise.all([
    await CategoriesOBJ.queryExecute(),
    await AboutPageOBJ.queryExecute(),
    await WhatsAppOBJ.queryExecute()
  ]);

  return {
    props: {
      apiData: {
        navigation,
        resultPage,
        numwhatsapp
      }
    },
    revalidate: 30
  };
};
