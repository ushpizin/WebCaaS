import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route, Switch, Redirect, BrowserRouter as Router,
} from 'react-router-dom';

import Root from './components/Root';
import Home from './components/Home';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

ReactDOM.render(<Root>{routing}</Root>, document.getElementById('root'));
