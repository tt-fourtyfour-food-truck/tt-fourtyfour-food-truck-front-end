import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' />

          {/* login routes */}
          <Route path='/diner-login' />
          <Route path='/operator-login' />

          {/* signup routes */}
          <Route path='/diner-register' />
          <Route path='/operator-register' />

          {/* private routes */}

        </Switch>
      </Router>
    </>
  );
}

export default App;
