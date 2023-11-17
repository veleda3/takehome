/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import {ApolloProvider} from '@apollo/client';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import client from './app/config/ApolloClient';
import StarshipTracker from './app/index';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ApolloProvider client={client}>
      <StarshipTracker />
    </ApolloProvider>
  );
}

export default App;
