import React from 'react';
import './styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';
import { StoreContext, RootInstance } from 'Store';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <StoreContext.Provider value={RootInstance}>
      <ToastContainer />
      <Routes />
    </StoreContext.Provider>
  );
}

export default App;
