import React from 'react';
import { StoreProvider } from './store';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from './components/Main';

const App = () => {
  return (
    <>
      <CssBaseline />
      <StoreProvider>
        <Main />
      </StoreProvider>
    </>
  );
}

export default App;