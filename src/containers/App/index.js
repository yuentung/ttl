import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import { ResetStyle, GlobalStyle } from './globalStyle';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Home from '../Home';
import Contact from '../Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return <></>;
};

const App = () => (
  <>
    <ResetStyle />
    <GlobalStyle />
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/ttl/contact" component={Contact} />
        <Route path="/ttl" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </>
);

export default App;
