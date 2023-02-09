import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ProductApp from '../../components/interface/Product';
import { CategoriesOBJ, WhatsAppOBJ } from '../../hooks/querys';
import { capitalizeFirstLetter } from '../../utils/capitalize';

const BuscaMarcas = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);

  const getBrandId = async (term: string) => {
    setLoading(true);

    const result = await fetch('/api/getBrandId', {
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      method: 'POST',
      body: JSON.stringify(term)
    });

    if (result) {
      const dataProducts = await result.json();
      setData(dataProducts);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (router.query.s) {
      if (loading) return;

      const term = router.query.s as string;

      void getBrandId(term);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.s]);

  return (
    <div className="container">
      <div className="pt-8 pb-14 block">
        <h1 className="text-3xl text-gray mb-5">{`Produtos ${
          router.query.s ? capitalizeFirstLetter(router.query.s as string) : ''
        }:`}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 2xl:grid-cols-3 gap-4 lg:gap-6">
          {loading ? (
            <div>
              <span className="text-base text-gray">Buscando...</span>
            </div>
          ) : data.length === 0 ? (
            <span className="text-base text-gray">Sem resultado.</span>
          ) : (
            data?.map((produto: any, index: number) => {
              return (
                <ProductApp
                  key={`${index}`}
                  title={produto.title}
                  img={produto.img.url}
                  uri={produto.uri}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default BuscaMarcas;

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
