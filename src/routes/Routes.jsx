import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import SignInPage from '../pages/SignIn';
import SignUpPage from '../pages/SignUp';
import QuotesPage from '../pages/Quotes';
import MyQuotesPage from '../pages/MyQuotes';
import DashboardAdminPage from '../pages/Dashboard';

const Router = () => (
  <Switch>
    <Route exact path="/login" component={SignInPage} />
    <Route exact path="/sign-up" component={SignUpPage} />
    <PrivateRoute exact path="/quotes" component={QuotesPage} />
    <PrivateRoute exact path="/my-quotes" component={MyQuotesPage} />
    <PrivateRoute exact roles={['admin']} path="/dashboard" component={DashboardAdminPage} />
    <Redirect from="/" to="/quotes" />
  </Switch>
);

export default Router;
