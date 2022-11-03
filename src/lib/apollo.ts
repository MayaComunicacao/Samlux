import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client';

const API_ENDPOINT = `${process.env.GRAPHQL_API_ENDPOINT}`;

let cachedClient: any = null;

export const getApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  if (cachedClient) return cachedClient;

  const clientApollo = new ApolloClient({
    uri: API_ENDPOINT,
    cache: new InMemoryCache()
  });

  cachedClient = clientApollo;

  return clientApollo;
};
