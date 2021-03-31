import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DinerLogin from './components/diner/DinerLogin';
import OperatorLogin from './components/operator/OperatorLogin';
import PrivateRoute from './components/PrivateRoute';
import DinerSignup from './components/diner/DinerSignup';
import MarketingPage from './components/MarketingPage';
import AddTruck from './components/operator/AddTruck';
import UpdateOperatorInfo from './components/operator/UpdateOperatorInfo';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={MarketingPage} />

          {/* login routes */}
          <Route path='/diner/login' component={DinerLogin} />
          <Route path='/operator/login' component={OperatorLogin} />

          {/* signup routes */}
          <Route path='/diner/register' component={DinerSignup} />
          <Route path='/operator/register' />

          {/* diner private routes */}
          <PrivateRoute path='/diner/dashboard' />
          <PrivateRoute path='/diner/update-info/:id' />
          
          {/* operator private routes */}
          <PrivateRoute path='/operator/dashboard' />
          <PrivateRoute path='/operator/truck/:id' />
          <PrivateRoute path='/operator/add-truck' component={AddTruck} />
          <PrivateRoute path='/operator/update-truck/:id' />
          <PrivateRoute path='/operator/update-info/:id' component={UpdateOperatorInfo} />
          <PrivateRoute path='/operator/add-menuItem' />
          <PrivateRoute path='/operator/update-menuItem/:id' />

        </Switch>
      </Router>
    </>
  );
}

export default App;
