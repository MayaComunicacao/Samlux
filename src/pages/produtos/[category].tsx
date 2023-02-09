import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import BreadcrumbApp from '../../components/interface/Breadcrumb';
import FilterApp from '../../components/interface/Filter';
import ProductApp from '../../components/interface/Product';
import { Maybe, Produto } from '../../generated/graphql';
import {
  CategoriesOBJ,
  WhatsAppOBJ,
  getProductsByCategory,
  getAllProducts
} from '../../hooks/querys';
import { capitalizeFirstLetter } from '../../utils/capitalize';

type Props = {
  apiData: any;
};

const Products = ({ apiData }: Props) => {
  const [products, setProducts] = useState<Maybe<Produto>[] | []>([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const query = router.query?.category;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      const result =
        query !== 'todos'
          ? await getProductsByCategory(query as string)
          : await getAllProducts();

      const json = await result.json();

      if (json) {
        setProducts(json.data.contentNodes.nodes);
      }

      setLoading(false);
    };

    getProducts();
  }, [router, query]);

  return (
    <div className="container">
      <BreadcrumbApp />
      <div className="pt-8 pb-14 block lg:flex">
        {query === 'todos' && (
          <div className="w-full lg:w-[280px] lg:mt-14">
            <FilterApp />
          </div>
        )}

        <div
          className={`w-full ${
            query === 'todos' && 'lg:w-[calc(100%_-_280px)]'
          }`}
        >
          <h1 className="text-3xl text-gray mb-5">
            {query === 'todos'
              ? 'Todos os produtos'
              : `Produtos: ${capitalizeFirstLetter(query as string)}`}
          </h1>

          {loading ? (
            <span className="text-sm text-gray">Buscando...</span>
          ) : (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 2xl:grid-cols-3 gap-4 lg:gap-6">
                {products.map((product, index: number) => {
                  return (
                    <ProductApp
                      key={`${index}`}
                      title={product?.title || ''}
                      img={product?.produto?.imagemPrincipal?.sourceUrl || ''}
                      uri={product?.uri || ''}
                    />
                  );
                })}
              </div>

              <div className="flex items-center justify-center w-full pt-4">
                <button className="bg-green hover:bg-greenlight text-white transition-all rounded-sm py-2 px-6">
                  Buscar mais
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;

export const getStaticPaths: GetStaticPaths = async () => {
  const navigation = await (await CategoriesOBJ.queryExecute()).navigation;

  const paths = navigation?.map((item: { slug: string }) => {
    return {
      params: {
        category: item.slug
      }
    };
  });

  return {
    paths,
    fallback: 'blocking'
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
