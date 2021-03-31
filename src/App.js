import React from 'react';

//router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import MarketingPage from './components/MarketingPage';

//private route
import PrivateRoute from './components/PrivateRoute';

//diner
import DinerLogin from './components/diner/DinerLogin';
import DinerSignup from './components/diner/DinerSignup';
import DinerDashboard from "./components/diner/DinerDashboard";

//operator
import OperatorLogin from './components/operator/OperatorLogin';
import AddTruck from './components/operator/AddTruck';

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
          <PrivateRoute path='/diner/dashboard' component={DinerDashboard}/>
          <PrivateRoute path='/diner/update-info/:id' />
          
          {/* operator private routes */}
          <PrivateRoute path='/operator/dashboard' />
          <PrivateRoute path='/operator/truck/:id' />
          <PrivateRoute path='/operator/add-truck' component={AddTruck} />
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
