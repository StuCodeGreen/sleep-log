import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

function createClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://musical-pangolin-83.hasura.app/v1/graphql',
      headers: {
        'x-hasura-admin-secret': process.env.NEXT_PUBLIC_REACT_APP_HASURA_SECRET,
      },
    }),
    cache: new InMemoryCache(),
  });
}

export const client = createClient();

