import React from 'react';
import { render } from 'react-dom';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import Navbar from './components/Navbar';
import Pnc from './screens/Pnc';
import Intuit from './screens/Intuit'

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter >
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/pnc" component={Pnc} />
        <Route exact path="/intuit" component={Intuit} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(
  <App />, document.getElementById('root')
);
