/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ApolloProvider} from '@apollo/client';

import client from './app/config/ApolloClient';
import StarshipTracker from './app/Index';

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <StarshipTracker />
    </ApolloProvider>
  );
}

export default App;
