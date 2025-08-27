import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://your-graphql-endpoint.com/graphql', // TODO: Replace with your endpoint
  cache: new InMemoryCache(),
});

export default client;
