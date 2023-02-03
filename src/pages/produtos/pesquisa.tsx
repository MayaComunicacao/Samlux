import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ProductApp from '../../components/interface/Product';
import { CategoriesOBJ } from '../../hooks/querys';

const Products = () => {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<any>([]);

  const router = useRouter();

  const getResult = async (searchTerm: string) => {
    setLoading(true);
    setData([]);

    const req = await fetch('/api/search', {
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      method: 'POST',
      body: JSON.stringify(searchTerm)
    });

    if (req) {
      const json = await req.json();
      setData(json);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (router.query.s !== null) {
      if (loading) return;

      const term = router.query.s as string;
      void getResult(term);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.s]);

  return (
    <div className="container">
      <div className="pt-8 pb-14 block">
        <h1 className="text-3xl text-gray mb-5">Resultado:</h1>

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

export default Products;

export const getStaticProps: GetStaticProps = async () => {
  const navigation = await (await CategoriesOBJ.queryExecute()).navigation;

  return {
    props: {
      apiData: {
        navigation
      }
    },
    revalidate: 30
  };
};
