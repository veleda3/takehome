import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: 'YOUR_GRAPHQL_API_URI', // update in the next task
  cache: new InMemoryCache(),
});

export default client;
