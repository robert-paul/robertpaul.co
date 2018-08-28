import React from 'react';
import { render } from 'react-dom';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter >
    <div>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(
  <App />, document.getElementById('root')
);
