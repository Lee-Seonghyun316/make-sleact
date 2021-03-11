import React from 'react';
import loadable from '@loadable/component';
import { Switch, Route, Redirect } from 'react-router-dom';

const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));

const App = () => {
  return (
    <switch>
      <Redirect exact path="/" to="/Login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
    </switch>
  );
};

export default App;
