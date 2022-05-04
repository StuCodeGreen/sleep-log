import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

function createClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://musical-pangolin-83.hasura.app/v1/graphql',
      headers: {
        'x-hasura-admin-secret': process.env.HASURA_SECRET,
      },
    }),
    // cache: new InMemoryCache(),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            logs: {
              merge(existing = [], incoming) {
                return { ...existing, ...incoming };
              }
            }
          }
        }
      }
    })
  });
}

export const client = createClient();
