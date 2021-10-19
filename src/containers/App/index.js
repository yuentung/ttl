import React from 'react';
import { ResetStyle, GlobalStyle } from './globalStyle';
import Home from '../Home';

const App = () => {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Home />
    </>
  );
};

export default App;
