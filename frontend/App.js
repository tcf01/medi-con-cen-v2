/**
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';

import StoreProvider from './src/contexts';
import Components from './src/components';
import { ThemeContext, styles } from './src/styles'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


const App = () => {
  useEffect(() => {
    FontAwesome.loadFont()
    Feather.loadFont()
    MaterialCommunity.loadFont()
    Ionicons.loadFont()
  }, [])


  return (
    <ThemeContext.Provider value={styles}>
      <StoreProvider>
        <Components />
      </StoreProvider>
    </ThemeContext.Provider>
  );
}

export default App;
