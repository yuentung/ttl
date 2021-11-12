import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ResetStyle, GlobalStyle } from './globalStyle';
import ScrollToTop from './ScrollToTop';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Home from '../Home';
import Contact from '../Contact';

const App = () => (
  <>
    <ResetStyle />
    <GlobalStyle />
    <Router basename="/ttl">
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  </>
);

export default App;
