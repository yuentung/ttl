import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ResetStyle, GlobalStyle } from './globalStyle';
import ScrollToTop from './ScrollToTop';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import List from '../List';
import View from '../View';
import Case from '../Case';

const App = () => (
  <>
    <ResetStyle />
    <GlobalStyle />
    <Router basename="/ttl/">
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/about/">
          <About />
        </Route>
        <Route path="/contact/">
          <Contact />
        </Route>
        <Route path="/list/:category/">
          <List />
        </Route>
        <Route path="/view/:id/">
          <View />
        </Route>
        <Route path="/case">
          <Case />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </>
);

export default App;
