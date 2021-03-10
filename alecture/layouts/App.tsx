import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LogIn from '@pages/LogIn';
import SignUp from '@pages/SignUp';

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
