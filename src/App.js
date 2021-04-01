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
import UpdateDinerInfo from './components/diner/UpdateDinerInfo';

//operator
import OperatorLogin from './components/operator/OperatorLogin';
import AddTruck from './components/operator/AddTruck';
import UpdateOperatorInfo from './components/operator/UpdateOperatorInfo';
import AddMenuItem from './components/operator/AddMenuItem';
import UpdateMenuItem from './components/operator/UpdateMenuItem';
import UpdateTruck from './components/operator/UpdateTruck';
import OperatorSignup from './components/operator/OperatorSignup';

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
          <Route path='/operator/register' component={OperatorSignup} />

          {/* diner private routes */}
          <PrivateRoute path='/diner/dashboard' component={DinerDashboard}/>
          <PrivateRoute path='/diner/update-info' component={UpdateDinerInfo} />
          
          {/* operator private routes */}
          <PrivateRoute path='/operator/dashboard' />
          <PrivateRoute path='/operator/truck/:id' />
          <PrivateRoute path='/operator/add-truck' component={AddTruck} />
          <PrivateRoute path='/operator/update-truck/:id' component={UpdateTruck} />
          <PrivateRoute path='/operator/update-info/:id' component={UpdateOperatorInfo} />
          <PrivateRoute path='/operator/add-menuItem' component={AddMenuItem} />
          <PrivateRoute path='/operator/update-menuItem:id' component={UpdateMenuItem} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
