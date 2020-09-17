import React from 'react';
import './styles/global.css';

import Routes from './routes';
import { StoreContext, RootInstance } from 'Store';

function App() {
  return (
    <StoreContext.Provider value={RootInstance}>
      <Routes />
    </StoreContext.Provider>
  );
}

export default App;
