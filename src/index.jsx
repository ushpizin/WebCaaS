import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

import Root from './components/Root';
import Home from './components/Home';
import ActiveContainer from './components/ActiveContainer';

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/c/:id" component={ActiveContainer} />
            <Redirect to="/" />
        </Switch>
    </Router>
);

ReactDOM.render(<Root>{routing}</Root>, document.getElementById('root'));
