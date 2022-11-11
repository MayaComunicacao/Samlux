import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client';

const API_ENDPOINT = `${process.env.GRAPHQL_ENDPOINT}`;

let cachedClient: any = null;

export const getClient = (): ApolloClient<NormalizedCacheObject> => {
  if (cachedClient) return cachedClient;

  const client = new ApolloClient({
    uri: API_ENDPOINT,
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore'
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore'
      }
    }
  });

  cachedClient = client;

  return client;
};
