import { gql } from '@apollo/client';
import { getClient } from '../lib/apollo';

const ApolloClient = getClient();

export const BrandsOBJ = {
  postType: 'marcasExclusivas',
  acf: 'marcasExclusivas',
  query: function () {
    return gql`
      query GetBrands {
        ${this.postType} {
          nodes {
            ${this.acf} {
              mexLogotipo {
                mediaItemUrl
              }
            }
          }
        }
      }
    `;
  },
  queryExecute: async function () {
    const result = await (
      await ApolloClient.query({ query: this.query() })
    ).data;

    const urls =
      result[this.postType]?.nodes?.map((item: any) => {
        return {
          url: item[this.postType].mexLogotipo.mediaItemUrl
        };
      }) || null;

    return {
      marcasExclusivas: urls
    };
  }
};

export const BannersOBJ = {
  postType: 'banners',
  acf: 'bannerHome',
  query: function () {
    return gql`
      query GetBanners {
        ${this.postType} {
          nodes {
            ${this.acf} {
              bannerImgDesktop {
                mediaItemUrl
              }
              bannerLink
              bannerText
              bannerTxBotao
            }
          }
        }
      }
    `;
  },
  queryExecute: async function () {
    const result = await (
      await ApolloClient.query({ query: this.query() })
    ).data;

    const banners =
      result[this.postType]?.nodes?.map((banner: any) => {
        const item = banner.bannerHome;

        return {
          url: item.bannerImgDesktop.mediaItemUrl,
          link: item.bannerLink,
          bannerText: item.bannerText,
          bannerTxButton: item.bannerTxBotao
        };
      }) || [];

    return {
      banners
    };
  }
};

export const ProductsOBJ = {
  postType: 'produtos',
  query: function () {
    return gql`
    query GetProducts {
      ${this.postType}(first: 50) {
        nodes {
          title,
          produto {
            imagemPrincipal {
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
            prodCodigo
          },
          featuredImage{
            node{
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
          },
          uri,
          slug
        }
      }
    }
  `;
  },
  queryExecute: async function () {
    const result = await (
      await ApolloClient.query({ query: this.query() })
    ).data;

    const products = result[this.postType]?.nodes?.map((item: any) => {
      const product = item;

      return {
        title: product.title,
        codigo: product.produto.prodCodigo,
        img: {
          url: product?.produto.imagemPrincipal?.sourceUrl || null,
          width: product?.produto.imagemPrincipal?.mediaDetails?.width || null,
          height: product?.produto.imagemPrincipal?.mediaDetails?.height || null
        },
        uri: product.uri,
        slug: product.slug
      };
    });

    return {
      products
    };
  }
};

export const ProductOBJ = {
  postType: 'produto',
  acf: 'produto',
  query: function () {
    return gql`
    query GetProduct($slug: ID!) {
      ${this.postType}(id: $slug, idType: SLUG) {
        title,
        ${this.acf} {
          selecaoVolts
          prodCodigo
          fotoscores {
            corImage
            imagensCor {
              sourceUrl
              mediaDetails {
                sizes {
                  width
                  height
                  sourceUrl
                }
              }
            }
          },
          imagemPrincipal {
            sourceUrl
            mediaDetails {
              height
              width
            }
          },
          proImagens {
            mediaItemUrl,
            mediaDetails {
              sizes {
                height
                width
                sourceUrl
              }
            }
          }
          prodCarac {
            prodCaracItem
          }
          prodDescricao
          prodItensinclusosDescricao
          prodItensnaoinc
        },
        uri,
        slug,
        categories {
          nodes {
            slug
          }
        }
      }
    }
  `;
  },
  queryExecute: async function (slug: string) {
    const result = await (
      await ApolloClient.query({ query: this.query(), variables: { slug } })
    ).data;

    return {
      result
    };
  }
};

export const EnvironmentsOBJ = {
  postType: 'ambientes',
  acf: 'ambientes',
  query: function () {
    return gql`
    query GetEnvironments {
      ${this.postType} {
        nodes {
          ${this.acf} {
            imagemDoAmbiente{
              mediaItemUrl
            }
          },
          categories{
            nodes {
              name,
              slug
            }
          }
        }
      }
    }
  `;
  },
  queryExecute: async function () {
    const result = await (
      await ApolloClient.query({ query: this.query() })
    ).data;

    const environments = result[this.postType]?.nodes?.map(
      (environment: any) => {
        const item = environment;

        return {
          img: item.ambientes.imagemDoAmbiente.mediaItemUrl,
          categories:
            item.categories?.nodes.map((categorie: any) => {
              return {
                name: categorie.name,
                slug: categorie.slug
              };
            }) || []
        };
      }
    );

    return {
      environments
    };
  }
};

export const CategoriesOBJ = {
  postType: 'categories',
  query: function () {
    return gql`
    query GetNavigation {
      ${this.postType} {
        nodes {
          name,
          slug
        }
      }
    }
  `;
  },
  queryExecute: async function () {
    const result = await (
      await ApolloClient.query({ query: this.query() })
    ).data;

    const navigation = result[this.postType]?.nodes?.map((item: any) => {
      return {
        name: item.name,
        slug: item.slug
      };
    });

    return {
      navigation
    };
  }
};

export const ExecuteAllQuerys = async () => {
  const [
    { marcasExclusivas },
    { banners },
    { environments },
    { navigation },
    { products }
  ] = await Promise.all([
    await BrandsOBJ.queryExecute(),
    await BannersOBJ.queryExecute(),
    await EnvironmentsOBJ.queryExecute(),
    await CategoriesOBJ.queryExecute(),
    await ProductsOBJ.queryExecute()
  ]);

  return {
    marcasExclusivas,
    banners,
    environments,
    navigation,
    products
  };
};
