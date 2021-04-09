/**
 * @format
 * @flow strict-local
 */

import React from 'react';

import StoreProvider from './src/contexts/index';
import Components from './src/components/index';

const App = () => {

  return (
    <StoreProvider>
      <Components />
    </StoreProvider>
  );
}

export default App;
