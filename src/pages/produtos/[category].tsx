import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useContextFilter } from '../../components/context/contextFilter';
import BreadcrumbApp from '../../components/interface/Breadcrumb';
import FilterApp from '../../components/interface/Filter';
import ProductApp from '../../components/interface/Product';
import { Maybe, Produto } from '../../generated/graphql';
import {
  CategoriesOBJ,
  WhatsAppOBJ,
  getProductsByCategory,
  getAllProducts,
  getProductsByFilter
} from '../../hooks/querys';
import { capitalizeFirstLetter } from '../../utils/capitalize';

const Products = () => {
  const [products, setProducts] = useState<Maybe<Produto>[] | []>([]);
  const [loading, setLoading] = useState(false);

  const { selectedFilters } = useContextFilter();

  const router = useRouter();

  const query = router.query?.category;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      let array_of_string_categorys = [''];
      let string_with_fabricantes_post_id = '';

      if (selectedFilters.length > 0) {
        array_of_string_categorys = selectedFilters
          ?.map((item) => {
            if (item.type !== 'categories') return;

            return item.value;
          })
          .filter(Boolean) as string[];

        string_with_fabricantes_post_id = selectedFilters
          ?.map((item) => {
            if (item.type !== 'manufacture') return;

            return item.value;
          })
          .filter(Boolean)
          .join(', ') as string;
      }

      const whereQuery: TWhereQuery = {
        where: {
          taxQuery: {
            relation: 'OR',
            taxArray: [
              {
                field: 'SLUG',
                operator: 'IN',
                taxonomy: 'CATEGORY',
                terms: array_of_string_categorys || null
              }
            ]
          },
          metaQuery: {
            relation: 'OR',
            metaArray: [
              {
                compare: 'IN',
                key: 'fabricante_prod',
                value: string_with_fabricantes_post_id || null
              }
            ]
          }
        }
      };

      if (array_of_string_categorys.length === 0) {
        delete whereQuery.where.taxQuery;
      }

      if (!string_with_fabricantes_post_id) {
        delete whereQuery.where.metaQuery;
      }

      const result =
        query !== 'todos'
          ? await getProductsByCategory(query as string)
          : selectedFilters.length > 0
          ? await getProductsByFilter(whereQuery.where)
          : await getAllProducts();

      const json = await result.json();

      if (json) {
        setProducts(
          json?.data?.contentNodes?.nodes
            ? json.data.contentNodes.nodes.filter((item: any) =>
                Object.keys(item).length > 0 ? true : false
              )
            : json.data.produtos.nodes.filter((item: any) =>
                Object.keys(item).length > 0 ? true : false
              )
        );
      }

      setLoading(false);
    };

    getProducts();
  }, [router, query, selectedFilters]);

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
          ) : products.length > 0 ? (
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
          ) : (
            <span className="text-sm text-gray">Não houve resultado.</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;

type TWhereQuery = {
  where: {
    taxQuery?: {
      relation: 'OR';
      taxArray: [
        {
          field: 'SLUG';
          operator: 'IN';
          taxonomy: 'CATEGORY';
          terms: string[] | null;
        }
      ];
    };
    metaQuery?: {
      relation: 'OR';
      metaArray: [
        {
          compare: 'IN';
          key: 'fabricante_prod';
          value: string | null;
        }
      ];
    };
  };
};

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
