import { gql } from '@apollo/client';

export const BrandsOBJ = {
  postType: 'marcasExclusivas',
  query: function () {
    const q = gql`
      query GetPosts {
        ${this.postType} {
          nodes {
            marcasExclusivas {
              mexLogotipo {
                mediaItemUrl
              }
            }
          }
        }
      }
    `;
    return q;
  }
};

export const BannersOBJ = {
  postType: 'banners',
  query: function () {
    const q = gql`
      query GetPosts {
        ${this.postType} {
          nodes {
            bannerHome {
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
    return q;
  }
};

export const ProductsOBJ = {
  postType: 'produtos',
  query: function () {
    const q = gql`
    query GetPosts {
      ${this.postType} {
        nodes {
          title,
          produto {
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
    return q;
  }
};

export const ProductOBJ = {
  postType: 'produto',
  query: function () {
    const q = gql`
    query GetProduct($slug: ID!) {
      ${this.postType}(id: $slug, idType: SLUG) {
        title,
        produto {
          prodCodigo
          proImagens{
            mediaItemUrl,
            mediaDetails{
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
        categories{
          nodes{
            slug
          }
        },
        featuredImage{
          node{
            sourceUrl
            mediaDetails {
              height
              width
              sizes{
                sourceUrl
              }
            }
          }
        },
      }
    }
  `;
    return q;
  }
};

export const EnvironmentsOBJ = {
  postType: 'ambientes',
  query: function () {
    const q = gql`
    query GetPosts {
      ${this.postType} {
        nodes{
          ambientes{
            imagemDoAmbiente{
              mediaItemUrl
            }
          },
          categories{
            nodes{
              name,
              slug
            }
          }
        }
      }
    }
  `;
    return q;
  }
};

export const CategoriesOBJ = {
  postType: 'categories',
  query: function () {
    const q = gql`
    query GetPosts {
      ${this.postType} {
        nodes{
          name,
          slug
        }
      }
    }
  `;
    return q;
  }
};
