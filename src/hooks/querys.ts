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

export const ProductOBJ = {
  postType: 'produtos',
  query: function () {
    const q = gql`
    query GetPosts {
      ${this.postType} {
        nodes {
          title
          produto {
            prodCodigo
            proImagens {
              sourceUrl
            }
            prodCarac {
              prodCaracItem
            }
            prodDescricao
            prodItensinclusosDescricao
            prodItensnaoinc {
              prodItensnaoincItem
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
          uri
        }
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
