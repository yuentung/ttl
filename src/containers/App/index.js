import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ResetStyle, GlobalStyle } from './globalStyle';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Home from '../Home';
import Contact from '../Contact';

const App = () => {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/ttl/contact" component={Contact} />
          <Route path="/ttl" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
