import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' />

          {/* login routes */}
          <Route path='/diner/login' />
          <Route path='/operator/login' />

          {/* signup routes */}
          <Route path='/diner/register' />
          <Route path='/operator/register' />

          {/* diner private routes */}
          <PrivateRoute path='/diner/dashboard' />
          <PrivateRoute path='/diner/update-info/:id' />
          
          {/* operator private routes */}
          <PrivateRoute path='/operator/dashboard' />
          <PrivateRoute path='/operator/truck/:id' />
          <PrivateRoute path='/operator/add-truck' />
          <PrivateRoute path='/operator/update-truck/:id' />
          <PrivateRoute path='/operator/update-info/:id' />
          <PrivateRoute path='/operator/add-menuItem' />
          <PrivateRoute path='/operator/update-menuItem/:id' />

        </Switch>
      </Router>
    </>
  );
}

export default App;
