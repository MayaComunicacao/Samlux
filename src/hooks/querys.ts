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
            },
            slug,
            marcaExclusivaId
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
          url: item[this.postType].mexLogotipo.mediaItemUrl,
          id: item.marcaExclusivaId,
          slug: item.slug
        };
      }) || null;

    return {
      marcasExclusivas: urls
    };
  }
};

export const GetBrandIdOBJ = {
  postType: 'marcaExclusiva',
  acf: 'marcaExclusiva',
  query: function () {
    return gql`
      query GetBrandId ($id: ID!) {
        ${this.postType} (id: $id, idType: SLUG) {
          marcaExclusivaId
        }
      }
    `;
  },
  queryExecute: async function (title: string) {
    const result = await (
      await ApolloClient.query({
        query: this.query(),
        variables: { id: title }
      })
    ).data;

    return {
      id: result?.[this.postType]?.marcaExclusivaId || null
    };
  }
};

export const GetProductsByBrandOBJ = {
  postType: 'produtos',
  query: function () {
    return gql`
    query GetProducts ($value: String = "") {
      ${this.postType} (where: {metaQuery: {relation: OR, metaArray: {key: "fabricante_prod", value: $value}}}, first: 25) {
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
  queryExecute: async function (id: string) {
    const result = await (
      await ApolloClient.query({
        query: this.query(),
        variables: { value: `${id}` }
      })
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
  acf: 'produto',
  query: function () {
    return gql`
    query GetProducts {
      ${this.postType} (where: {metaQuery: {metaArray: {key: "produto_destaque_pag_inicial", value: "1"}}}, first: 16) {
        nodes {
          title,
          ${this.acf} {
            imagemPrincipal {
              sourceUrl
              mediaDetails {
                width
                height
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

export const AllProductsOBJ = {
  postType: 'produtos',
  query: function () {
    return gql`
    query GetProducts {
      ${this.postType} (first: 25) {
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
        img: {
          url: product?.produto.imagemPrincipal?.sourceUrl || null,
          width: product?.produto.imagemPrincipal?.mediaDetails?.width || null,
          height: product?.produto.imagemPrincipal?.mediaDetails?.height || null
        },
        uri: product.uri
      };
    });

    return {
      products
    };
  }
};

export const SearchProductsOBJ = {
  postType: 'produtos',
  query: function () {
    return gql`
    query GetProducts ($search: String = "") {
      ${this.postType} (where: {search: $search}, first: 25) {
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
  queryExecute: async function (search: string) {
    const result = await (
      await ApolloClient.query({
        query: this.query(),
        variables: { search: search }
      })
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

export const BrandsProductsOBJ = {
  postType: 'produtos',
  query: function () {
    return gql`
    query GetProducts {
      ${this.postType} (where: {metaQuery: {relation: OR, metaArray: {key: "fabricante_prod", value: "46"}}}, first: 25) {
        nodes {
          ... on Produto {
            title,
            produto {
              imagemPrincipal {
                sourceUrl
                mediaDetails {
                  width
                  height
                }
              }
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
    }
  `;
  },
  queryExecute: async function (search: string) {
    const result = await (
      await ApolloClient.query({
        query: this.query(),
        variables: { search: search }
      })
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
        uri
        title
        slug
        produto {
          imagemPrincipal {
            sourceUrl
            mediaDetails {
              width
              height
              sizes {
                sourceUrl
                width
                height
              }
            }
            mediaItemUrl
          }
          proImagens {
            mediaDetails {
              width
              height
              sizes {
                sourceUrl
                width
                height
              }
            }
            mediaItemUrl
          }
          prodDescricao
          prodItensinclusosDescricao
          prodItensnaoinc
          variacoesDoProduto {
            imagemVariacao {
              mediaDetails {
                width
                height
                sizes {
                  sourceUrl
                  width
                  height
                }
              }
              sourceUrl
              mediaItemUrl
            }
            prodCodigo
            prodCarac {
              prodCaracItem
            }
            fotoscores {
            corImage {
              corSelec1
              corSelec2
            }
            imagensCor {
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
          }
        }
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

export const AboutPageOBJ = {
  postType: 'page',
  query: function () {
    return gql`
    query GetNavigation {
      ${this.postType}(id: "a-samlux", idType: URI) {
        title
        content
        pagSobre {
          sobreGaleria {
            mediaDetails {
              width
              height
            }
            sourceUrl
          }
        }
      }
    }
  `;
  },
  queryExecute: async function () {
    const resultPage = await (
      await ApolloClient.query({ query: this.query() })
    ).data;

    return {
      resultPage: resultPage?.page || {}
    };
  }
};

export const CustomProjectsPageOBJ = {
  postType: 'page',
  query: function () {
    return gql`
    query GetNavigation {
      ${this.postType}(id: "projeto-personalizado", idType: URI) {
        title
        content
        galeriaProjetoPersonalizado {
          galeriaProjetosPersonalizados {
            mediaDetails {
              width
              height
            }
            sourceUrl
          }
        }
      }
    }
  `;
  },
  queryExecute: async function () {
    const resultPage = await (
      await ApolloClient.query({ query: this.query() })
    ).data;

    return {
      resultPage: resultPage?.page || {}
    };
  }
};

export const WhatsAppOBJ = {
  postType: 'whatsapp',
  acf: 'num_whatsapp',
  query: function () {
    return gql`
      query GetNumWhatsApp {
        whatsapp(id: "sjrp", idType: SLUG) {
          num_whatsapp {
            numeroWhatsapp
            mensagemWhatsapp
          }
        }
      }
    `;
  },
  queryExecute: async function () {
    const numwhatsapp = await (
      await ApolloClient.query({ query: this.query() })
    ).data;

    return {
      numwhatsapp: numwhatsapp?.[this.postType]?.[this.acf] || {}
    };
  }
};

export const OndeEstamosOBJ = {
  postType: 'page',
  acf: 'ondeEstamos',
  query: function () {
    return gql`
      query GetEndOfStores {
        ${this.postType}(id: "onde-estamos", idType: URI) {
          slug
          ${this.acf} {
            ondeEstamos {
              cidade
              endereco
              telefone
            }
          }
        }
      }
    `;
  },
  queryExecute: async function () {
    const enderecos = await (
      await ApolloClient.query({ query: this.query() })
    ).data;

    return {
      enderecos
    };
  }
};

export const ImagemMapaOBJ = {
  postType: 'page',
  acf: 'acfImagemBanner',
  query: function () {
    return gql`
      query GetImgMapa {
        ${this.postType}(id: "home", idType: URI) {
          ${this.acf} {
            imagemParaDesktop {
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
            imagemParaMobile {
              sourceUrl
              mediaDetails {
                width
                height
              }
            }
          }
        }
      }
    `;
  },
  queryExecute: async function () {
    const imgsMapa = await (
      await ApolloClient.query({ query: this.query() })
    ).data;

    return {
      imgsMapa: imgsMapa?.page?.[this.acf] || {}
    };
  }
};

export const ExecuteAllQuerys = async () => {
  const [
    { marcasExclusivas },
    { banners },
    { navigation },
    { products },
    { imgsMapa },
    { numwhatsapp }
  ] = await Promise.all([
    await BrandsOBJ.queryExecute(),
    await BannersOBJ.queryExecute(),
    await CategoriesOBJ.queryExecute(),
    await ProductsOBJ.queryExecute(),
    await ImagemMapaOBJ.queryExecute(),
    await WhatsAppOBJ.queryExecute()
  ]);

  return {
    marcasExclusivas,
    banners,
    navigation,
    products,
    imgsMapa,
    numwhatsapp
  };
};
/** CLIENT SIDE */
const API_ENDPOINT = 'https://painel.samlux.com.br/graphql/';

export const getProductsByCategory = (category: string) => {
  return fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        query getProductsByCategory($id: ID = "", $terms: [String] = "") {
          category(id: $id, idType: NAME) {
            slug
          }
          contentNodes(
            where: {taxQuery: {taxArray: {field: SLUG, operator: IN, taxonomy: CATEGORY, terms: $terms}}}
          ) {
            nodes {
              ... on Produto {
                title
                uri
                produto {
                  imagemPrincipal {
                    sourceUrl
                    mediaDetails {
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }
    `,
      variables: {
        id: category,
        terms: category
      }
    })
  });
};

export const getAllProducts = () => {
  return fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        query getAllProducts {
          contentNodes(first: 30) {
            nodes {
              ... on Produto {
                title
                uri
                produto {
                  imagemPrincipal {
                    sourceUrl
                    mediaDetails {
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }
    `
    })
  });
};

export const getProductsByFilter = (whereQuery: any) => {
  return fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        query GetProductsByFilter($where: RootQueryToProdutoConnectionWhereArgs = {}) {
          produtos(where: $where, first: 25) {
            nodes {
              title
              slug
              produto {
                imagemPrincipal {
                  sourceUrl
                  mediaDetails {
                    width
                    height
                  }
                }
              }
            }
          }
        }
    `,
      variables: {
        where: whereQuery
      }
    })
  });
};

export const getFieldsOfFilter = () => {
  return fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
      query GetFieldsOfFilter {
        categories(where: {hideEmpty: true}) {
          nodes {
            slug
            name
          }
        }
        marcasExclusivas {
          nodes {
            title
            marcaExclusivaId
          }
        }
      }
    `
    })
  });
};
